<script>
  import { afterUpdate, onMount } from 'svelte';
  import Nav from './Navigation.svelte';

  let books = [];
  let radioInput;
  let userInput;

  function getBooks() {
    userInput = document.getElementById('user-input').value;
    console.log(radioInput, userInput)
    fetch(`https://book-basket-be.herokuapp.com/search?type=${radioInput}&q=${userInput}`)
      .then(response => response.json())
      .then(response => exportBooks(response))
      .catch(error => console.log(error))
  }

  function exportBooks(bookImports) {
    books = bookImports.data
    books = books
    console.log(books)
  }

  function updateBtn() {
    let ele = document.getElementsByName('books');
    for (var i = 0; i < ele.length; i++) {
      if(ele[i].checked) {
        radioInput = ele[i].value
      }
    }
  }


</script>

<style>
  form {
    background-color:  rgba(230,214,197,0.5);
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: solid 5px #FCF8F5;
  }
  .radio-btns {
    display: flex;
    flex-direction: row;
  }
  input {
    margin-right: 20px;
    margin-left: 20px;
    font-size: 24px;
  }
  label {
    font-size: 18px;

  }
  button {
    font-size: 20px;
    margin-right: 20px;
    margin-left: 20px;
    width: 150px;
    background-color: #73363D;
    border-radius: 5px;
    color: white;
    padding: 3px;
    margin-top: -5px;
  }
  .search-bar {
    width: 600px;
    margin: 10px;
    padding: 5px;
  }
  .bookshelf {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 20px;
  }
  .each-book {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 10px;
    align-items: center;
  }
  .book-pic {
    height: 200px;
    width: 120px;
    object-fit: cover;
    box-shadow: 10px 0px 10px 0px rgba(0,0,0,0.5);
  }
  .book-title {
    font-size: 18px;
    text-align: center;
  }
</style>

<section>
  <Nav />
  <form>
    <div>
      <input class='search-bar' id='user-input' type='text' placeholder='Search...' />
    </div>
    <div class='radio-btns' id='radio-btns'>
      <input type='radio' id='title' name='books' value='title' on:click={updateBtn} checked='true' />
      <label for='title'>Title</label>
      <input type='radio' id=':author' name='books' value='author' on:click={updateBtn} checked='false' />
      <label for='author'>Author</label>
      <input type='radio' id='genre' name='books' value='genre' on:click={updateBtn} checked='false' />
      <label for='genre'>Genre</label>
      <input type='radio' id='isbn' name='books' value='isbn' on:click={updateBtn} checked='false' />
      <label for='isbn'>ISBN</label>
      <button type='button' on:click={getBooks}>Submit</button>
    </div>
  </form>
  <section class='bookshelf'>
    {#each books as book }
      <div class='each-book'>
        <img class='book-pic' src='{book.attributes.image_url}' />
        <p class='book-title'>{book.attributes.title}</p>
      </div>
    {:else}
      <p>No Books to Display...</p>
    {/each}
  </section>
</section>
