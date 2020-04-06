<script>
  let src = 'assets/White-BB-Logo.png';
  let text = 'assets/BB-Logo-Words.png';
  let avatar = 'assets/user.svg';
  let search = 'assets/search.svg';
  let library = 'assets/bookshelf.svg';

</script>

<style>
  nav {
    background-color: #73363D;
    border-bottom: solid 5px #FCF8F5;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .logo {
    height: 30px;
    margin: 20px;
  }
  .title {
    height: 80px;
    margin-top: 50px;
  }
  .search,
  .avatar,
  .library {
    height: 40px;
    margin: 15px;
  }
  .welcome {
    margin-left: auto;
    color: #FCF8F5;
    font-size: 24px;
  }
  .search {
    height: 50px;
    margin-top: 25px;
  }
</style>

<nav>
  <img class='logo' { src } alt='book basket logo' />
  <img class='title' src={ text } alt='book basket logo' />
  <p class='welcome'>Welcome user.name</p>
  <img class='avatar' src={ avatar } alt='book basket logo' />
  <img class='search' src={ search } alt='book basket logo' />
  <img class='library' src={ library } alt='book basket logo' />
</nav>
