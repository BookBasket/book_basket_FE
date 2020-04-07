
<script>
	import Nav from './Navigation.svelte';
	import Book from './Book.svelte';

	let userName = 'Virginia';

	// figure out each block

	let bookB = {
		title: 'Salt Acid Fat Heat',
		author: 'Samin Nosrat',
		genre: 'Cooking',
		published: 'April 10, 2018',
		rating: '3.0',
		review: 'New York Times Bestseller and Winner of the 2018 James Beard Award for Best General Cookbook.'
	}

	// console.log({Book})
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

</style>
<Nav />
<h1>{userName}'s Library of Read Books</h1>
<section class='library'>
	<Book />
	<div class='single-book'>
		<h2>{bookB.title}</h2>
		<h3>{bookB.author}</h3>
		<p>{bookB.review}</p>
	</div>
</section>
