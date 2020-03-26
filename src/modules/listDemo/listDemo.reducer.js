import * as actionTypes from './listDemo.actionTypes'
// import { handleEdit } from './listDemo.actions'

const initialState = {
  selectedItem: '',
  articles: [],
  data: []
}

const reducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload]
      }
    case actionTypes.REMOVE_ARTICLE:
      return {
        ...state,

        articles: state.articles.filter(
          article => article.id !== action.payload
        )
      }
    case 'SAVE_SELECTED':
      return { ...state, selectedItem: action.payload }

    case actionTypes.EDIT_DATA:
      return {
        ...state
      }
    case actionTypes.API_DATA:
      debugger
      return { ...state, data: action.payload }

    default:
      return state
  }
}

export default reducer
