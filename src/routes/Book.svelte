<script>

	let book = {
		title: 'The Great Gatsby',
		author: 'F. Scott Fitzgerald',
		genre: 'Tragedy',
		published: 'April 10, 1926',
		rating: '4.0',
		review: 'The Great Gatsby is one of the great classics of twentieth-century literature.'
	}

</script>

<style>

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

</style>

<div class='single-book'>
	<h2>{book.title}</h2>
	<h3>{book.author}</h3>
	<p>{book.review}</p>
</div>
