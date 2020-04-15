<script>
  import { Router, Route, Link } from 'svelte-routing';
  import LibraryPast from './routes/LibraryPast.svelte';
  import LibraryFuture from './routes/LibraryFuture.svelte';
  import User from './routes/User.svelte';
  import Login from './routes/Login.svelte';
  import Search from './routes/Search.svelte';
  import NotFound from './routes/BadPath.svelte';
  import Book from './routes/Book.svelte';
  import BookInLibrary from './routes/BookInLibrary.svelte';

  export let url='';

  let bgImage = './assets/basket-bg.jpg';
  let logo = './assets/BB-Logo-White.png';
  let book = {};
  let books = [];
  let radioInput = null;
  let userInput;
  let bookNum;
  let usersReadBooks = [];
  let usersWantToReadBooks = [];
  let userName = null;
  let saveUserName;
  let chosenBook;

  function getBooks() {
    userInput = document.getElementById('user-input').value;
    if (radioInput === null ) {
      let textWarning = document.getElementById('warning')
      textWarning.classList.remove('hidden')
    } else {
      fetch(`https://book-basket-be-staging.herokuapp.com/search?type=${radioInput}&q=${userInput}`)
        .then(response => response.json())
        .then(response => exportBooks(response))
        .catch(error => console.log(error))
    }
  }

  function exportBooks(bookImports) {
    books = bookImports.data
    books = books
  }

  function updateWarning() {
    let textWarning = document.getElementById('warning')
    textWarning.classList.add('hidden')
  }

  function updateBtn() {
    let ele = document.getElementsByName('books');
    for (var i = 0; i < ele.length; i++) {
      if(ele[i].checked) {
        radioInput = ele[i].value
      }
    }
  }

  function setCurrentBook(bookInput) {
    chosenBook = bookInput.node
  }

  function deleteBook(id) {
    let findDeleted = usersWantToReadBooks.filter(book => book.isbn !== id);
    usersWantToReadBooks = findDeleted
  }

  // runs from BookInLibrary component
  // adds want to read book to already read book
  // takes in chosenBook.attributes
  function updatePastLibrary(bookInfo) {
    let usersAddedBook = bookInfo
    deleteBook(usersAddedBook.isbn)

    let header = {
      method: 'PATCH'
    }
    fetch(`https://book-basket-be.herokuapp.com/switch_shelves?isbn=${bookInfo.isbn}`)
        .then(response => console.log(response))
        .catch(error => console.log(error))
  }


  // runs in Book component
  // moves book from search results to Want to Read LibraryPast
  // takes in chosenBook.attributes
  function updateFutureLibrary(bookInfo) {
    let usersAddedBook = bookInfo
    let header = {
      method: 'POST'
    }
    fetch(`http://book-basket-be.herokuapp.com/create_book?author=${usersAddedBook.authors}&genre=${usersAddedBook.genres}&title=${usersAddedBook.title}&isbn=${usersAddedBook.isbn}&date_published=${usersAddedBook.date_published}&summary=${usersAddedBook.summary}&image_url=${usersAddedBook.image_url}`, header)
      .then(response => console.log(response));
  }



</script>

<Router url='{url}'>
  <div>
    <Route
      path='/'
      component='{Login}'
      saveUserName='{saveUserName}'
    />
    <Route
      path='/user'
      component='{User}'
n    />
    <Route
      path='/library-future'
      component='{LibraryFuture}'
      setCurrentBook='{setCurrentBook}'
    />
    <Route
      path='/library-past'
      component='{LibraryPast}'
      usersReadBooks='{usersReadBooks}'
      setCurrentBook='{setCurrentBook}'
    />
    <Route
      path='/search'
      component='{Search}'
      getBooks='{getBooks}'
      books='{books}'
      updateBtn='{updateBtn}'
      updateWarning='{updateWarning}'
      setCurrentBook='{setCurrentBook}'
    />
    <Route
      path='/book/:id'
      component='{Book}'
      chosenBook='{chosenBook}'
      updateFutureLibrary='{updateFutureLibrary}'
    />
    <Route
      path='/users-book/:id'
      component='{BookInLibrary}'
      chosenBook='{chosenBook}'
      updatePastLibrary='{updatePastLibrary}'
    />
    <Route component='{Login}' />
  </div>
</Router>
