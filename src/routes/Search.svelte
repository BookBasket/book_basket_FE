<script>
  import Nav from './Navigation.svelte';

</script>

<style>
</style>

<section>
  <Nav />
  <form>
    <input type='text' value='Search...' />
    <input type='radio' id='title' name='title' value='title' />
    <label for='title'>Title</label>
    <input type='radio' id='author' name='author' value='author' />
    <label for='author'>Author</label>
    <input type='radio' id='genre' name='genre' value='genre' />
    <label for='Genre'>Genre</label>
    <button type='button'>Submit</button>
  </form>
</section>
