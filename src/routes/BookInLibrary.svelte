<script>
	import { afterUpdate } from 'svelte';
	import Nav from './Navigation.svelte';

	export let chosenBook;
	export let updatePastLibrary;

	let authorNames = '';
	let month = '';
	let formatDate = [];
	let url = 'https://amazon.com';
	let searchQuery;
	let selectedEBtn = false;
	let selectedABtn = false;
	let selectedLBtn = false;

	afterUpdate(() => {
		changeMonth()
		if (chosenBook !== {}) {
			chosenBook = chosenBook
			findAuthors()
		}
	})

	function updateEBtnValue() {
		selectedEBtn = true;
	}
	function updateLBtnValue() {
		selectedLBtn = true;
	}
	function updateABtnValue() {
		selectedABtn = true;
	}

	function changeMonth() {
		if (!chosenBook.publishedDate.includes('-')) {
			return;
			formatDate = chosenBook.publishedDate.split('-');
			for(var i = 0; i < 13; i++) {
				let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
				if (formatDate[1] === '10') {
					month = 'October'
				} else if (formatDate[1].includes(0)) {
					if(`0${i}` === formatDate[1]) {
						month = months[i - 1]
					}
				} else {
					if (`${i}` === formatDate[1]) {
						month = months[i - 1]
					}
				}
			}
		}
	}

	function findAuthors() {
		let newString = '';
		if(chosenBook.authors.edges.length === 1) {
			authorNames = chosenBook.authors.edges[0].node.name
			return authorNames
		} else {
			chosenBook.authors.edges.forEach(author => {
				newString += ` ${author.node.name} &`
			})
			authorNames = newString.slice(0, -1);
			return authorNames;
		}
	}

	function searchAmazon(bookTitle) {
		searchQuery = bookTitle.split(' ').join('+')
		// url = `https://www.amazon.com/s?k=${searchQuery}&i=stripbooks&ref=nb_sb_noss_2`
	}

</script>

<style>
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
		margin: 10px;
		margin-right: 100px;
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
		<img src={chosenBook.imageUrl} class='single-book-image'>
			<div class='book-info'>
				<h1 class='book-title'>{chosenBook.title}</h1>
				<p class='book-isbn'>Author: {authorNames}</p>
				{#if !chosenBook.publishedDate.includes('-') }
					<p class='book-isbn'>Date Published: {chosenBook.publishedDate}</p>
				{:else}
					<p class='book-isbn'>Date Published: {month} {formatDate[2]}, {formatDate[0]}</p>
					<p class='book-isbn'>ISBN: {chosenBook.isbn}</p>
				{/if}
			</div>
			<div class='book-buttons'>
				{#if selectedLBtn === false}
				<button on:click={() => updatePastLibrary(chosenBook)} on:click={updateLBtnValue}>Add to Already Read Shelf</button>
				{:else}
				<button class='clicked' on:click={() => updatePastLibrary(chosenBook)}>Added!</button>
				{/if}
				{#if selectedABtn === false}
				<a href='{url}'><button on:click={() => searchAmazon(chosenBook.title)} on:click={updateABtnValue}>Search on Amazon</button></a>
				{:else}
				<button class='clicked'}>Click to Search!</button>
				{/if}
				{#if selectedEBtn === false}
				<button on:click={updateEBtnValue}>Connect to E-Reader</button>
				{:else}
				<button class='clicked' >Click to Connect</button>
				{/if}
			</div>
		</div>
		<div class='book-description'>
			{#if chosenBook.summary === ""}
				<h2 class='book-description-title'>No Description Provided</h2>
			{:else}
				<h2 class='book-description-title'>Description</h2>
				<p class='description'>{chosenBook.summary}</p>
			{/if}
		</div>
	</section>
</section>
