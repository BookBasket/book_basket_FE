import Library from './routes/Library.svelte';
import App from './App.svelte';

var app = new App({
	target: document.body,
	components: { Library, App }
})

export default app;
