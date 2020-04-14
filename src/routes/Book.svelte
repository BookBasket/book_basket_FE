<script>
	import { Link, Route, Router } from 'svelte-routing';
	import Nav from './Navigation.svelte';
	import { beforeUpdate, afterUpdate } from 'svelte';

	export let chosenBook;

	afterUpdate(() => {
		if (chosenBook !== {}) {
			chosenBook = chosenBook
			console.log(chosenBook)
		}
	});

</script>

<style>

	/* .single-book {
		width: 200px;
		height: 350px;
		background-color: cornflowerblue;
		padding: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 20px;
		border: solid 5px navy;
		border-radius: 15px;
	} */
	h1 {
    color: #73363D;
  }
	.book-info {
		color: #73363D;
		font-family: sans-serif;
		font-size: 1.5em;
		display: flex;
		flex-direction: column;
		margin-right: 10px;
    margin-left: 10px;
	}
	button {
    height: 50px;
    width: 200px;
    background-color: #73363D;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    margin-right: 10px;
    margin-left: 10px;
  }
	.book-buttons {
    display: flex;
    flex-direction: column;
    align-items: right;
		margin-top: 30px;
		margin-right: 10px;
    margin-left: 50px;
  }
	.book-info-buttons {
		display: flex;
		flex-direction: row;
		padding: 20px;
	}
	.description {
		width: 1850px;
		height: 300px;
		font-size: 20px;
		line-height: 20px;
		padding: 15px;
		margin: 15px;
	}
	.single-book-image {
		width: 200px;
		height: 350px;
		margin: 20px;
	}

</style>

<section>
	<Nav />
	<section class='single-book'>
		<div class='book-info-buttons'>
		<img src={chosenBook.attributes.image_url} class='single-book-image'>
			<div class='book-info'>
				<h1 class='book-title'>{chosenBook.attributes.title}</h1>
				<p class='book-isbn'>Author: {chosenBook.attributes.authors}</p>
				<p class='book-isbn'>Date Published: {chosenBook.attributes.published_date}</p>
				<p class='book-isbn'>ISBN: {chosenBook.attributes.isbn}</p>
			</div>

			<div class='book-buttons'>
				<button>Add to Read Shelf</button>
				<button>Search on Amazon</button>
				<button>Connect to E-Reader</button>
			</div>
		</div>
		<div class='book-description'>
			<p class='description'>{chosenBook.attributes.description}</p>
		</div>
	</section>
</section>
