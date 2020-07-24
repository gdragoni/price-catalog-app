const initialState = null

export default function location(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return action.payload;
    case 'CLEAR_LOCATION':
      return initialState;
    default:
      return state
  }
}
