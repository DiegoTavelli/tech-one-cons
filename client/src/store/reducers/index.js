import { SET_PERSON, SET_ACADEMICS, POST_PERSON } from "../constants"


const initialState = {
  person: [],
  academics: [],
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
        state
      }
    default:
      return {
        state
      }
  }
}

export default reducer;