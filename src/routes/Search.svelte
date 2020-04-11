<script>
  import { afterUpdate, onMount } from 'svelte';
  import Nav from './Navigation.svelte';

  let books = [];

  function getBooks() {
    fetch('https://book-basket-be.herokuapp.com/search?type=inauthor:&q=jk rowling')
      .then(response => response.json())
      .then(response => exportBooks(response))
      .catch(error => console.log(error))
  }

  function exportBooks(bookImports) {
    books = bookImports.data
    books = books
    console.log(books)
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
    height: 500px;
    width: 1000px;
    background-color: rebeccapurple;
  }
</style>

<section>
  <Nav />
  <form>
    <div>
      <input class='search-bar' type='text' placeholder='Search...' />
    </div>
    <div class='radio-btns'>
      <input type='radio' id='title' name='books' value='title' checked/>
      <label for='title'>Title</label>
      <input type='radio' id=':author' name='books' value='author' />
      <label for='author'>Author</label>
      <input type='radio' id='genre' name='books' value='genre' />
      <label for='genre'>Genre</label>
      <input type='radio' id='isbn' name='books' value='isbn' />
      <label for='isbn'>ISBN</label>
      <button type='button' on:click={getBooks}>Submit</button>
    </div>
  </form>
  <section class='bookshelf'>
    {#each books as book }
      <p>{book.attributes.title}</p>
    {:else}
      <p>No Books to Display...</p>
    {/each}
  </section>
</section>
