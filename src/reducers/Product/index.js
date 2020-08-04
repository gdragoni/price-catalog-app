export default function products(state = [], action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload
    case 'UPDATE_PRODUCT':
      return state.map((item) => {
        if(item._id == action.payload._id) {
          return action.payload;
        }
        return item;
      })
    case 'SET_CLEAR_PRODUCTS':
      return []
    default:
      return state
  }
}
