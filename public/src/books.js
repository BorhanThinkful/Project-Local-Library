function findAuthorById(authors, id) {
  //using find method on array of authors object
  const foundAuthor = authors.find(author => author.id == id);
  return foundAuthor;
}
//=======================================================================================================================

function findBookById(books, id) {
  //arrow function used where book is a callback function
  const found = books.find(book => book.id.toString() === id.toString());//used arrow funtion, callback function, find() method
  return found;
}

//========================================================================================================================

function partitionBooksByBorrowedStatus(books) {
  let result =[];
  //filtering books that are returned
  const returnedBooks = books.filter(book => !book.borrows[0].returned);
  //filtering books that are checked out/not returned
  const NotreturnedBooks = books.filter(book => book.borrows[0].returned);
  result[0] = returnedBooks;
  result[1] = NotreturnedBooks;
  return result;
}

//======================================================================================================================

function getBorrowersForBook(book, accounts) {
  
 // Object destructuring
  const { borrows } = book;

  const borrowers = borrows.map(({ id, returned })=> {
    // find account that matches the borrower's ID
    const account = accounts.find(account => account.id === id);

    // return the matching account, along with the `returned` info
    return {
      ...account,
      returned,
    };
  });
return borrowers.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
