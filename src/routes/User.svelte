<script>
  import { Link } from 'svelte-routing';

</script>

<style>
  button {
    height: 300px;
    width: 500px;
    border-bottom: 20px;
    color: #921C2B;
  }
</style>

<section>
  <Link to='/library'><button>Already Read Books</button></Link>
  <Link to='/library'><button>Want to Read Books</button></Link>
</section>
