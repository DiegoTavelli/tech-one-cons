import { SET_PERSON, SET_ACADEMICS, POST_PERSON, CLEAR_POST, GET_PERSONS } from "../constants"


const initialState = {
  person: [],
  academics: [],
  post: {},
  users: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERSON:
      return {
        ...state,
        person: action.payload
      }
    case SET_ACADEMICS:
      return {
        ...state,
        academics: action.payload
      }
    case POST_PERSON:
      return {
        ...state,
        post: action.payload
      }
    case CLEAR_POST:
      return {
        ...state,
        post: action.payload
      }
    case GET_PERSONS:
      return {
        ...state,
        users: action.payload
      }
    default:
      return {
        state
      }
  }
}

export default reducer;