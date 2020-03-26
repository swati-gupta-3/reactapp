import * as actionTypes from './displayDemo.actionTypes'
export const apiDataItem = data => {
  console.log(data, 'action')
  debugger
  return {
    type: "API_DATA",
    payload: data
  }
}
export const userEdit = data => {
  return {
    type: "EDIT_DATA",
    payload: data
  }
}