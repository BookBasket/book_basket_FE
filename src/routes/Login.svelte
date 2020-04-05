<script>
let bgImage = 'assets/basket-bg.jpg';
let logo = 'assets/BB-Logo-White.png';
</script>

<style>
  .login-page {
    /* for the book background */
    /* background-position: center; */
    background-size: 120%;
    background-repeat: no-repeat;
    background-color: saddlebrown;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* for the basket background */
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
    margin: 8px;
  }
  button {
    height: 50px;
    width: 200px;
    background-color: #73363D;
    border-radius: 5px;
    color: white;
    font-size: 20px;
  }
  h1 {
    margin: 5px;
    color: #921C2B;
  }
</style>

<section class='login-page' style="background-image: url('{bgImage}')">
  <form class='login-form'>
    <img class='logo-image' src= {logo} alt='book basket home logo' />
    <input placeholder='Username' type='text' maxlength='25'/>
    <input placeholder='BS Password' type='password' maxlength='25'/>
    <button>Login</button>
    <h1>Come Pick Out Your Next Favorite Book</h1>
  </form>
</section>
