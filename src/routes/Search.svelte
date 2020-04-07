<script>
  import Nav from './Navigation.svelte';

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
</style>

<section>
  <Nav />
  <form>
    <div>
      <input class='search-bar' type='text' placeholder='Search...' />
    </div>
    <div class='radio-btns'>
      <input type='radio' id='title' name='title' value='title' />
      <label for='title'>Title</label>
      <input type='radio' id='author' name='author' value='author' />
      <label for='author'>Author</label>
      <input type='radio' id='genre' name='genre' value='genre' />
      <label for='Genre'>Genre</label>
      <input type='radio' id='isbn' name='isbn' value='isbn' />
      <label for='Isbn'>ISBN</label>
      <button type='button'>Submit</button>
    </div>
  </form>
</section>
