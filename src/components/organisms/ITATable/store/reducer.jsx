import { createNextState } from '@reduxjs/toolkit'

export const initialState = {
  data: [],
  columns: [],
  actualPage: 1,
  itemPerPage: 10,
}

export const Actions = {
  SET_DATA: 'SET_DATA',
  SET_COLUMNS: 'SET_COLUMNS',
  SET_ACTUAL_PAGE: 'SET_ACTUAL_PAGE',
  SET_ITEM_PER_PAGE: 'SET_ITEM_PER_PAGE',
}

// eslint-disable-next-line default-param-last
export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_DATA:
      return createNextState(state, (draft) => {
        draft.data = action.payload
      })

    case Actions.SET_COLUMNS:
      return createNextState(state, (draft) => {
        draft.columns = action.payload
      })

    case Actions.SET_ITEM_PER_PAGE:
      return createNextState(state, (draft) => {
        draft.itemPerPage = action.payload
      })

    case Actions.SET_ACTUAL_PAGE:
      return createNextState(state, (draft) => {
        draft.actualPage = state.actualPage + action.payload
      })

    default:
      return state
  }
}
