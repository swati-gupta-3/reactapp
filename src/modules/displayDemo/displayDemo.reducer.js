import * as actionTypes from './displayDemo.actionTypes'


const initialState = {
    data: []
}

const reducer = (state = initialState, action)=> {
  debugger
  switch (action.type) {
    case actionTypes.API_DATA:
      debugger
      return {...state, data: action.payload };

    case actionTypes.EDIT_DATA:
        debugger
        console.log(state,"edit dataa")
        const userdata =state.data.map(each => 
          {
          if (each.id === action.payload.user_id) 
          {
            each.user_name = action.payload.user_name;
            each.user_username = action.payload.user_username;
            each.user_email = action.payload.user_email;
            console.log(each.user_name)
            console.log(each.user_username)
            console.log(each.user_email)
            
          
          }
          return each;
        });
        return {...state, data: userdata};


     
      default:
        return state;
    }
  
  } 
  
export default reducer
