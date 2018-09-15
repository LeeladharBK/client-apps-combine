// state argument is not application state,
// if the argumrnt comes in undefined return null
export default function(state = null, action) {
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
  }
  return state;
}
