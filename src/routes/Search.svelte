<script>
  import { Link } from 'svelte-routing';
  import Nav from './Navigation.svelte';

  let src = './assets/plus.svg';
  let singleBook;

  export let books;
  export let getBooks;
  export let updateBtn;
  export let updateWarning;
  export let setCurrentBook;
  export let updateFutureLibrary;

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
  #bookshelf {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 20px;
  }
  .each-book {
    display: flex;
    flex-direction: column;
    width: 180px;
    margin: 30px;
    align-items: center;
    justify-content: flex-start;
  }
  .book-pic {
    height: 200px;
    width: 130px;
    object-fit: cover;
    box-shadow: 10px 0px 10px 0px rgba(0,0,0,0.5);
  }
  .book-title {
    font-size: 18px;
    text-align: center;
    /* margin-left: -25px; */
  }
  .plus-icon {
    position: absolute;
    height: 30px;
    margin-top: 15px;
    margin-left: 40px;
    visibility: hidden;
  }
  .each-book:hover .plus-icon {
    visibility: visible;
    display: absolute;
  }
  .hidden {
    display: none;
    height: 0px;
  }
  #warning {
    position: absolute;
    margin-left: 620px;
    margin-top: -40px;
    font-size: 18px;
  }
</style>

<section>
  <Nav />
  <form>
    <div>
      <input
        on:click={updateWarning}
        class='search-bar'
        id='user-input'
        type='text'
        placeholder='Search...'
      />
      <h4 id='warning' class='hidden'>Search Criteria Required</h4>
    </div>
    <div class='radio-btns' id='radio-btns'>
      <input
        type='radio'
        id='title'
        name='books'
        value='title'
        on:click={updateBtn}
        checked='true'
      />
      <label for='title'>Title</label>
      <input
        type='radio'
        id=':author'
        name='books'
        value='author'
        on:click={updateBtn}
        checked='false'
      />
      <label for='author'>Author</label>
      <input
        type='radio'
        id='genre'
        name='books'
        value='genre'
        on:click={updateBtn}
        checked='false'
      />
      <label for='genre'>Genre</label>
      <input
        type='radio'
        id='isbn'
        name='books'
        value='isbn'
        on:click={updateBtn}
        checked='false'
      />
      <label for='isbn'>ISBN</label>
      <button type='button' on:click={getBooks}>Submit</button>
    </div>
  </form>
  <section id='bookshelf'>
    {#each books as book, i}
        <div class='each-book'>
          <img class='plus-icon' {src} alt='add to library plus button' on:click={() => updateFutureLibrary(book.attributes)}/>
          <Link to='/book/{i}' on:click={() =>  setCurrentBook(book)} >
            <img class='book-pic' src={book.attributes.image_url} />
            <p class='book-title'>{book.attributes.title}</p>
          </Link>
        </div>
    {:else}
    <p>No Books to Display</p>
    {/each}
  </section>
</section>
