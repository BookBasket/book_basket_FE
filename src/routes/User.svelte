<script>
  import { Link } from 'svelte-routing';
  import { afterUpdate } from 'svelte';

  import Nav from './Navigation.svelte';

  let bgImage = './assets/basket-bg.jpg';
  let logo = './assets/BB-Logo-White.png';

</script>

<style>
  button {
    height: 100px;
    width: 300px;
    border-bottom: 20px;
    color: #73363D;
    margin: 10px;
    font-size: 20px;
  }
  .library-page {
    background-size: 120%;
    background-repeat: no-repeat;
    background-color: saddlebrown;
    height: 100vh;
    background-position: calc(50% - 110px) 50%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .blur {
    background-color:  rgba(230,214,197,0.5);
    height: 100vh;
    width: 201.5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
</style>

<section class='library-page' style="background-image: url('{bgImage}')">
  <Nav />
  <div class='blur'>
    <Link to='/library-future'><button>Want to Read Books</button></Link>
    <Link to='/library-past'><button>Already Read Books</button></Link>
    <Link to='/search'><button>Search For New Book</button></Link>
  </div>
</section>
