<script context='module'>
  import { Link } from 'svelte-routing';
  import Nav from './Navigation.svelte';
  let bgImage = './assets/basket-bg.jpg';
  let logo = './assets/BB-Logo-White.png';

  export let userName;
  let userPassword = null;

  function updateName() {
    userName = document.getElementById('username').value
    checkLogin()
  }

  function updatePassword() {
    userPassword = document.getElementById('password').value
    checkLogin()
  }

  function checkLogin() {
    let button = document.getElementById('login-btn')
    if (userName !== null && userPassword !== null ) {
      button.classList.remove('disabled')
      button.disabled = false
    }
  }


</script>

<style>
  .login-page {
    background-size: 130%;
    background-repeat: no-repeat;
    background-color: saddlebrown;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-position: calc(50% - 110px) 50%;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    background-color: rgba(230,214,197,0.95);
    height: 450px;
    width: 500px;
    border-radius: 10px;
  }
  .logo-image {
    height: 200px;
    margin-bottom: -30px;
  }
  input {
    width: 300px;
    height: 50px;
    font-size: 24px;
    padding: 5px;
    margin: 5px;
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
  h1 {
    margin: 5px;
    color: #73363D;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  h2 {
    color: #73363D;
  }
  .disabled {
    background-color: #746062;
  }
  .hidden {
    display: none;
  }
</style>

<section class='login-page' style="background-image: url('{bgImage}')">
  <div class='hidden'>
    <Nav userName={userName} />
  </div>
  <form class='login-form'>
    <img class='logo-image' src= {logo} alt='book basket home logo' />
    <input id='username' placeholder='Username' type='text' maxlength='25' on:change={updateName}/>
    <input id='password' placeholder='Password' type='password' maxlength='25'on:change={updatePassword}/>
    <div class='buttons'>
      <Link to='/user'><button disabled='true' id='login-btn' class='disabled'>Login</button></Link>
      <h2>or</h2>
      <Link to='/search'><button>Search For Books</button></Link>
    </div>
    <h1>Come Pick Out Your Next Favorite Book</h1>
  </form>
</section>
