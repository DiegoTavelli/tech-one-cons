import axios from 'axios';
import { SET_PERSON, SET_ACADEMICS, POST_PERSON } from "../constants";
import { BASE_URL, POST_PROFILE } from '../../constants'


export function setPerson(payload) {
  return (dispatch) => {
    dispatch({
      type: SET_PERSON,
      payload: payload
    })
  }
}

export function setAcademics(payload) {
  return (dispatch) => {
    dispatch({
      type: SET_ACADEMICS,
      payload: payload
    })
  }
}

export function postUser(payload) {
  return async (dispatch) => {
    try {
      const send = await axios.post(`${BASE_URL}${POST_PROFILE}`, payload);
      const response = await send.data;
      dispatch({
        type: POST_PERSON,
        payload: response
      })
    } catch (error) {
      console.log('--Error on postUser action', error)
    }
  }
}