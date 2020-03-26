import * as actionTypes from './listDemo.actionTypes.js'
export const addArticle = article => {
  return {
    type: actionTypes.ADD_ARTICLE,
    payload: article
  }
}

export const removeArticle = id => {
  return {
    type: actionTypes.REMOVE_ARTICLE,
    payload: id
  }
}
export const handleEdit = id => {
  debugger
  return {
    type: actionTypes.EDIT_DATA,
    payload: id
  }
}

export const saveSelectedItem = id => {
  debugger
  return {
    type: 'SAVE_SELECTED',
    payload: id
  }
}
export const apiDataItem = data => {
  console.log(data, 'action')
  debugger
  return {
    type: actionTypes.API_DATA,
    payload: data
  }
}
