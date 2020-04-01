import * as actionTypes from './apiDemo.actionTypes'


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
    
        const userdata =state.data.map(each => 
          {
          if (each.id === action.payload.user_id) 
          {
            each.name = action.payload.name;
            each.address = action.payload.address;
            each.phoneNo=action.payload.phoneNo;
            each.country = action.payload.country;
                      }
          return each;
        });
        return {...state, data: userdata};


      default:
        return state;
    } 
  } 
  
export default reducer
