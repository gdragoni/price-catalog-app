import { createStore } from 'redux';

export default function market(state = {
    mapMarkets: [],
}, action) {
  switch (action.type) {
    case 'SET_MAP_MARKETS':
      return {
        ...state,
        mapMarkets: action.payload,
      }
    default:
      return state
  }
}
