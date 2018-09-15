// selectBook is an Action Creator which has to return an actions
export function selectBook(book) {
  // console.log("A book has been selected:", book.title);
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
