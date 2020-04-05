<script>
let bgImage = 'assets/book-circle.jpg';
let logo = 'assets/BB-Logo-Simple-Bold.png';
</script>

<style>
  .login-page {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: saddlebrown;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    background-color: rgba(242,218,168,0.95);
    height: 350px;
    width: 500px;
    border-radius: 10px;
  }
  .logo-image {
    height: 200px;
    margin-bottom: -30px;
  }
  input {
    width: 300px;
    height: 100px;
    font-size: 24px;
    padding: 5px;
    margin: 8px;
  }
  button {
    height: 100px;
    width: 200px;
    background-color: #971B1E;
    border-radius: 5px;
    color: white;
    font-size: 20px;
  }
</style>

<section class='login-page' style="background-image: url('{bgImage}')">
  <form class='login-form'>
    <img class='logo-image' src= {logo} alt='book basket home logo' />
    <input placeholder='Username' type='text' maxlength='25'/>
    <input placeholder='BS Password' type='password' maxlength='25'/>
    <button>Login</button>
  </form>
</section>
