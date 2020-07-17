import { createStore } from 'redux';

export default function user(state = {
    id: "",
    name: "",
    password: "",
    email: "",
    token: "",
}, action) {
  switch (action.type) {
    case 'SET_USER':
      return action.payload
    default:
      return state
  }
}
