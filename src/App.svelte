<script>
  import { Router, Link, Route } from "svelte-routing";
  import Login from "./routes/Login.svelte";
  import Library from "./routes/Library.svelte";

  export let url = '';
</script>

<Router url='{url}'>
  <nav>
    <Link to='/'>Login</Link>
    <Link to='library'>Library</Link>
  </nav>
  <div>
    <Route path='library' component='{Library}' />
    <Route path="/"><Login /></Route>
  </div>
</Router>
