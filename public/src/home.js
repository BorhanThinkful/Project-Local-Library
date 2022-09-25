function getTotalBooksCount(books) {
const count = books.reduce((total, book) => total+ 1, 0);
  return count;
  
  //return books.length;
}

//====================================================================================
function getTotalAccountsCount(accounts) {
const acountid = accounts.map((account) => account.id)
//account is an arrary with all account id, so length property of accountid means total no. of accounts.
return acountid.length;
}

//=============================================================================================


function getBooksBorrowedCount(books) {
  //filtering all books based on returned false means they are checked out
 const borrowedBooks = books.filter(book => book.borrows[0].returned === false);
  //length property of filtered books is count of borrowed books
  return borrowedBooks.length
}


//===============================================================================================

function getMostCommonGenres(books) {
  
 const allGenres = books.map((book) => book.genre);
  const temp = [];
  //map over book genres
  allGenres.map((genre) => {
    //for each genre, first check to see if genre already exists in temp array
    const genreLocation = temp.findIndex((element) => element.name === genre);
    //second, if it exists, increase count by 1
    if (genreLocation >= 0) {
      temp[genreLocation].count = temp[genreLocation].count + 1;
      //else, if it don't exist, push a new genre object onto array with count of 1
    } else {
      temp.push({ name: genre, count: 1 });
    }
  });
  return temp.sort((a, b) => b.count - a.count).slice(0, 5);

}

//===========================================================================================================
function getMostPopularBooks(books) {
  
  return books.map((book)=> {
    return {name: book.title, count: book.borrows.length}}).sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0,5)}

//=====================================================================================================
  
function getMostPopularAuthors(books,authors) {
const popularAuthor = authors.map((author) => ({
...author,
  
borrowCount: books.filter(book => book.authorId === author.id).reduce((acc, cur)=> acc + cur.borrows.length, 0)
})).sort((b, a) => a.borrowCount - b.borrowCount);
return popularAuthor.map(pauthor => {
return {name: pauthor.name.first + " " + pauthor.name.last, count: pauthor.borrowCount};
}).slice(0,5);
}    
              

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
