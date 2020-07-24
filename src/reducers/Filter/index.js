const initialState = {
    range: "10",
}

export default function filter(state = initialState, action) {
  switch (action.type) {
    case 'SET_FILTER_RANGE':
      return {
          ...state,
          range: action.payload,
      };
    case 'CLEAR_FILTER':
      return initialState;
    default:
      return state
  }
}
