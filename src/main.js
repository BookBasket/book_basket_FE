import Library from './routes/Library.svelte';
import Login from './routes/Login.svelte';
import App from './App.svelte';

// var app = new Library({
// 	target: document.body,
// 	components: { Login }
// });

var app = new App({
	target: document.body,
	components: { Library }
})

export default login;
