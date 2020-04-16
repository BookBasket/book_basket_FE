
<script>
	import { afterUpdate } from 'svelte';
	import { Link } from 'svelte-routing';
	import Nav from './Navigation.svelte';
	import Book from './Book.svelte';

	let usersWantToReadBooks = [];
	export let setCurrentBook;

	afterUpdate(() => {
		let header = {
		 method: 'POST',
		 headers: {
			 'Content-Type': 'application/json'
		 },
		 body: JSON.stringify({
  	 	"query": `{ shelf(id: "U2hlbGZPYmplY3Q6Mg==") { id type books { edges { node { id title summary publishedDate imageUrl isbn authors { edges { node { id name } } } genres { edges { node { id type } } } } } } } }`
		})}
	 fetch(`http://book-basket-be.herokuapp.com/graphql`, header)
	 	.then(response => response.json())
		.then(response => usersWantToReadBooks = response.data.shelf.books.edges)
		.catch(error => console.log(error))

	});

	function setLibrary(allBooks) {
		usersWantToReadBooks = allBooks
	}

</script>

<style>
	h1 {
		margin-left: 100px;
		font-size: 24px;
		color: #73363D;
	}

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
	<h1>Library of Want to Read Books</h1>
	<section id='bookshelf'>
	    {#each usersWantToReadBooks as book, i}
	        <div class='each-book'>
	          <Link to='/users-book/{i}' on:click={() =>  setCurrentBook(book)} >
	            <img class='book-pic' src={book.node.imageUrl} />
	            <p class='book-title'>{book.node.title}</p>
	          </Link>
	        </div>
    {:else}
    <p>No Books to Display</p>
    {/each}
  </section>
</section>
