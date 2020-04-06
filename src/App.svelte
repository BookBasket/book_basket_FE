<script>
import { Router, Route, Link } from 'svelte-routing';
import Library from './routes/Library.svelte';
import User from './routes/User.svelte';
import Login from './routes/Login.svelte';
import Search from './routes/Search.svelte';
let bgImage = 'assets/basket-bg.jpg';
let logo = 'assets/BB-Logo-White.png';
export let url='';
</script>

<style>
</style>

<Router url='{url}'>
  <div>
    <Route path='/' component='{Login}' />
    <Route path='/user' component='{User}' />
    <Route path='/library' component='{Library}' />
    <Route path='/search' component='{Search}' />
  </div>
</Router>
