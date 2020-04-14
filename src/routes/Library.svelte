
<script>
	import { afterUpdate } from 'svelte';
	import { Link } from 'svelte-routing';
	import Nav from './Navigation.svelte';
	import Book from './Book.svelte';

	let userName = 'Virginia';
	export let usersWantToReadBooks;
	export let setCurrentBook;

	afterUpdate(() => {
		usersWantToReadBooks = usersWantToReadBooks
		console.log(usersWantToReadBooks)
	});


</script>

<style>

	.library {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.single-book {
		width: 200px;
		height: 350px;
		background-color: indianred;
		padding: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 20px;
		border: solid 5px pink;
		border-radius: 15px;
	}

	p {
		color: white;
		font-family: sans-serif;
		font-size: 1.5em;
	}

	.user-review {
		color: purple;
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
		color: black;
  }

</style>
<Nav />
<section>
	<h1>{userName}'s Library of Read Books</h1>
	<section id='bookshelf'>
    {#each usersWantToReadBooks as book, i}
        <div class='each-book'>
          <Link to='/book/{i}' on:click={() =>  setCurrentBook(i)} >
            <img class='book-pic' src={book.image_url} />
            <p class='book-title'>{book.title}</p>
          </Link>
        </div>
    {:else}
    <p>No Books to Display</p>
    {/each}
  </section>
</section>
