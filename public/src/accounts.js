function findAccountById(accounts, id) {
  //usning find method on accounts array of object
  const matchedAccount = accounts.find(account => account.id.toString() === id.toString());//used find() method and arrow function
  return matchedAccount;
}
//=======================================================================================================================

function sortAccountsByLastName(accounts) {
  //used sort method
  accounts.sort((accountA,accountB) => accountA.name.last.toLowerCase() < accountB.name.last.toLowerCase() ? -1 : 1)
 return accounts; 
}
//===============================================================================================================
function getTotalNumberOfBorrows(account, books) {
    let result = 0;
  //looping through books objects
for (let i = 0; i< books.length; i++) {
  let book = books[i];
  //looping through borrows array nested within book object arrays
   for(let j =0; j < book.borrows.length; j++){
        if(book.borrows[j].id === account.id){
      result = result +1;
      }
    }
  }
    return result;
}
//===========================================================================================================================

function getBooksPossessedByAccount(account, books, authors) {
  const accId = account.id;
  //filtering books that checked out based on account id
  const booksOut = books.filter((book) => book.borrows.some(borrow => !borrow.returned && borrow.id === accId)
  );
  //applyin map method on filetered books to find associated author and returning book embedded author info.
  booksOut.map(book => book['author'] = authors.find(person => person.id === book.authorId))
  return booksOut;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
