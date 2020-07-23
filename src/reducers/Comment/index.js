export default function comments(state = [], action) {
  switch (action.type) {
    case 'SET_COMMENTS':
      action.payload.reverse();
      return action.payload;
    case 'SET_CLEAR_COMMENTS':
      return [];
    default:
      return state
  }
}
  