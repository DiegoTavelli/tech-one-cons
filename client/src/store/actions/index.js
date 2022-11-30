import axios from 'axios';
import {
  SET_PERSON,
  SET_ACADEMICS,
  POST_PERSON,
  CLEAR_POST,
  GET_PERSONS,
  CLEAR_STATES
} from "../constants";
import {
  BASE_URL,
  POST_PROFILE_URL,
  GET_USERS_URL
} from '../../constants'


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

export function postUser(userData) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${BASE_URL}${POST_PROFILE_URL}`, userData);
      dispatch({
        type: POST_PERSON,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: POST_PERSON,
        payload: error.response.data
      })
    }
  }
}

export function clearPost() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_POST,
      payload: null
    })
  }
}

export function getPersons() {
  return async (dispatch) => {
    const { data } = await axios.get(`${BASE_URL}${GET_USERS_URL}`);
    dispatch({
      type: GET_PERSONS,
      payload: data
    })
  }
}

export function clearStates() {
  return async (dispatch) => {
    dispatch({
      type: CLEAR_STATES,
      payload: []
    })
  }
}