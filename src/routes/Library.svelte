
<script context='module'>
	import Nav from './Navigation.svelte';
	import Book from './Book.svelte';

	let userName = 'Virginia';


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
<section>
	<h1>{userName}'s Library of Read Books</h1>
</section>
