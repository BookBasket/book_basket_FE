<script>
	import { afterUpdate } from 'svelte';

	export let chosenBook;

	afterUpdate(() => {
		if (chosenBook !== {}) {
			chosenBook = chosenBook
			console.log(chosenBook)
		}
	});

</script>

<style>

	.single-book {
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
	}

	p {
		color: white;
		font-family: sans-serif;
		font-size: 1.5em;
	}

</style>

<div class='single-book'>
</div>
