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

  function getBooks() {
    userInput = document.getElementById('user-input').value;
    if (radioInput === null ) {
      let textWarning = document.getElementById('warning')
      textWarning.classList.remove('hidden')
    } else {
      console.log(radioInput, userInput)
      fetch(`https://book-basket-be-staging.herokuapp.com/search?type=${radioInput}&q=${userInput}`)
        .then(response => response.json())
        .then(response => exportBooks(response))
        .catch(error => console.log(error))
    }
  }

  function exportBooks(bookImports) {
    books = bookImports.data
    books = books
    console.log(books)
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

  function setCurrentBook(bookNumInput) {
    bookNum = bookNumInput
  }

  function addToLibrary(bookNumInput) {
    bookNum = bookNumInput
    let usersAddedBook = books[bookNum].attributes
    console.log(usersAddedBook);
    // let header = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(usersAddedBook)
    // }
    // fetch(`https://book-basket-be-staging.herokuapp.com/create_book?shelf_id=2&title=Cloud Atlas&summary=Testing&image_url=https://images-na.ssl-images-amazon.com/images/I/91RPigWberL.jpg&isbn=1234567&published_date=May 4 2001&author=David Mitchell&author=J K Rowling&genre=fiction&genre=fantasy`, header)
    //   .then(response => {
    //     usersWantToReadBooks.push(usersAddedBook);
    //     console.log(usersWantToReadBooks)
    //   });th
    usersWantToReadBooks.push(usersAddedBook);
    // usersReadBooks.push(usersAddedBook);
  }

  function deleteBook(id) {
    // const findDeleted = this.state.ideas.filter(idea => idea.id !== id);
    // this.setState({ ideas: findDeleted })
    let findDeleted = usersWantToReadBooks.filter(book => book.isbn !== id);
    usersWantToReadBooks = findDeleted
  }

  function updatePastLibrary(bookInfo) {
    let usersAddedBook = bookInfo
    usersReadBooks.push(usersAddedBook);
    console.log(usersAddedBook);
    deleteBook(usersAddedBook.isbn)

    let header = {
      method: 'PATCH'
    }
    fetch(`https://book-basket-be-staging.herokuapp.com/switch_shelves?isbn=${bookInfo.isbn}`)
        .then(response => console.log(response))
        .catch(error => console.log(error))

    // bookNum = bookInfo
    // let usersAddedBook = books[bookNum]
    // console.log(usersAddedBook);
    // let header = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(usersAddedBook)
    // }
    // fetch(`https://book-basket-be-staging.herokuapp.com/create_book?shelf_id=2&title=Cloud Atlas&summary=Testing&image_url=https://images-na.ssl-images-amazon.com/images/I/91RPigWberL.jpg&isbn=1234567&published_date=May 4 2001&author=David Mitchell&author=J K Rowling&genre=fiction&genre=fantasy`, header)
    //   .then(response => {
    //     usersReadBooks.push(usersAddedBook);
    //     console.log(usersWantToReadBooks)
    //   });
  }

  function updateFutureLibrary(bookInfo) {
    let usersAddedBook = bookInfo
    console.log(usersAddedBook);
    usersWantToReadBooks.push(usersAddedBook);

    // let usersAddedBook = books[bookNum]
    // console.log(usersAddedBook);
    // let header = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(usersAddedBook)
    // }
    // fetch(`https://book-basket-be-staging.herokuapp.com/create_book?shelf_id=2&title=Cloud Atlas&summary=Testing&image_url=https://images-na.ssl-images-amazon.com/images/I/91RPigWberL.jpg&isbn=1234567&published_date=May 4 2001&author=David Mitchell&author=J K Rowling&genre=fiction&genre=fantasy`, header)
    //   .then(response => {
    //     usersWantToReadBooks.push(usersAddedBook);
    //     console.log(usersWantToReadBooks)
    //   });
  }

  function saveUserName(nameInput) {
    console.log('name:', nameInput)
    userName = nameInput
  }

</script>

<Router url='{url}'>
  <div>
    <Route path='/' component='{Login}' />
    <Route
      path='/user'
      component='{User}'
      saveUserName='{saveUserName}'
    />
    <Route
      path='/library-future'
      component='{LibraryFuture}'
      usersWantToReadBooks='{usersWantToReadBooks}'
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
      addToLibrary='{addToLibrary}'
    />
    <Route
      path='/book/:id'
      component='{Book}'
      chosenBook='{books[bookNum]}'
      updateFutureLibrary='{updateFutureLibrary}'
    />
    <Route
      path='/users-book/:id'
      component='{BookInLibrary}'
      chosenBook='{books[bookNum]}'
      updatePastLibrary='{updatePastLibrary}'
    />
    <Route component='{Login}' />
  </div>
</Router>
