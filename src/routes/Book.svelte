<script>
	import { Link, Route, Router } from 'svelte-routing';
	import Nav from './Navigation.svelte';
	import { beforeUpdate, afterUpdate } from 'svelte';

	export let chosenBook;
	let authorNames = '';

	afterUpdate(() => {
		if (chosenBook !== {}) {
			chosenBook = chosenBook
			// findAuthors()
			console.log(chosenBook)
		}
	});

	function findAuthors() {
		chosenBooks.attributes.authors.data.forEach(author => {
			console.log(author.attributes.name)
			authorNames += `${author.attributes.name}`
		})
		console.log(authorNames)
	}


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
    height: 60px;
    width: 300px;
    background-color: #73363D;
    border-radius: 5px;
    color: white;
    font-size: 20px;
		margin: 20px;
  }
	button:hover {
		color:#73363D;
		background-color: rgba(230,214,197,0.95);
	}
	.book-buttons {
    display: flex;
    flex-direction: column;
    align-items: right;
		margin-top: 30px;
		margin-right: 10px;
    margin-left: auto;
  }
	.book-info-buttons {
		display: flex;
		flex-direction: row;
		padding: 20px;
	}
	.description {
		height: 300px;
		font-size: 18px;
		line-height: 22px;
		margin: 15px;
		margin-left: 100px;
		margin-right: 100px;
	}
	.single-book-image {
		width: 200px;
		height: 350px;
		margin: 20px;
		object-fit: cover;
		margin-left: 100px;
	}
	.book-title {
		width: 600px;
		font-size: 28px;
	}
	.book-description-title {
		margin-left: 100px;
		font-size: 22px;
	}

</style>

<section>
	<Nav />
	<section class='single-book'>
		<div class='book-info-buttons'>
		<img src={chosenBook.attributes.image_url} class='single-book-image'>
			<div class='book-info'>
				<h1 class='book-title'>{chosenBook.attributes.title}</h1>
				<p class='book-isbn'>Author: {authorNames} </p>
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
			<h2 class='book-description-title'>Description</h2>
			<p class='description'>{chosenBook.attributes.description}</p>
		</div>
	</section>
</section>
