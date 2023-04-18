import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
  estaNosfavoritos: boolean
}

const initialState: FavoritosState = {
  itens: [],
  estaNosfavoritos: false
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      const index = state.itens.findIndex((item) => item.id === produto.id)
      if (index === -1) {
        state.itens.push(produto)
        state.estaNosfavoritos = true
      } else {
        state.itens.splice(index, 1)
        state.estaNosfavoritos = false
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
