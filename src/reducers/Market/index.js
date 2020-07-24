export default function market(state = {
    mapMarkets: [],
    listMarkets: [],
}, action) {
  switch (action.type) {
    case 'SET_MAP_MARKETS':
      return {
        ...state,
        mapMarkets: action.payload,
      }
    case 'SET_LIST_MARKETS':
      return {
        ...state,
        listMarkets: action.payload,
      }
    default:
      return state
  }
}
