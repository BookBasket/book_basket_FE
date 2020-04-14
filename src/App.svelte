<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Library from './routes/Library.svelte';
  import User from './routes/User.svelte';
  import Login from './routes/Login.svelte';
  import Search from './routes/Search.svelte';
  import NotFound from './routes/BadPath.svelte';
  import Book from './routes/Book.svelte';

  export let url='';

  let bgImage = './assets/basket-bg.jpg';
  let logo = './assets/BB-Logo-White.png';
  let book = {};
  let books = [];
  let radioInput = null;
  let userInput;
  let bookNum;

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

</script>

<Router url='{url}'>
  <div>
    <Route path='/' component='{Login}' />
    <Route path='/user' component='{User}' />
    <Route path='/library-future' component='{Library}' />
    <Route path='/library-past' component='{Library}' />
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
      chosenBook='{books[bookNum]}'
    />
    <Route component='{NotFound}' />
  </div>
</Router>
