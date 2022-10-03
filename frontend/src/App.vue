<template>
  <header>
    <div class="container">
      <div class="logo">
        <img src="./images/Qatar_logo.png" alt="">
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/schedules">Schedules</RouterLink>
        <RouterLink to="/groups">Groups</RouterLink>
        <RouterLink to="/teams">Teams</RouterLink>
        <div class="login">
          <RouterLink to="/signin">sign in</RouterLink>
          <RouterLink to="/login">login</RouterLink>
      </div>
      </nav>      
    </div>      
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <div class="footer-logo">
      <img src="./images/Qatar_logo.png" alt="">
    </div>
          
    <div class="footer-text">
      <a href="#">Home</a>
      <a href="#">Schedules</a>
      <a href="#">Groups</a>
      <a href="#">Players</a>
      <a href="#">Fantasy</a>
      <p>&copy;dvsoft 2022.</p>
    </div>
    <div class="footer-icons">
      <a href="#"><img src="./images/icons/facebook_icon.png" alt=""></a>
      <a href="#"><img src="./images/icons/instagram_icon.png" alt=""></a>
      <a href="#"><img src="./images/icons/twitter_icon.png" alt=""></a>
    </div>
  </footer>
</template>

<style lang="scss">
@mixin img_size($width, $height){
  width: $width;
  height: $height;
}

  body{
    background-color: whitesmoke;
    font-family: 'Inter', sans-serif;
  }

  #app{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .container{
    width: 70%;
    margin: 0 auto;
  }

  header{
    //background-color: #3b3b3b;
    background-color: #020f2a;
    height: 70px;
    width: 100%;
    color: #fff;
    position: fixed;
    z-index: 99;

    .container{
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo{
        display: inline-block; 

        img{
          @include img_size(60px, 60px);
          padding-top: 5px;
        }
      }

      nav{
        display: flex;
        justify-content: space-between;
        align-items: center;

        a{
          text-decoration: none;
          padding: 10px 15px;
          color: #fff;
          transition: all .2s ease-in-out;
        }

        a:last-child{
          margin-right: 20px;
        }

        a:hover{
          color: #C0BFC7;
          transform: scale(1.05);
        }

        .login{
          margin: 0 40px;
          display: flex;
          justify-content: space-around;
          align-items: center;

          a{
            padding: 10px;
          }
        }
      }
    }      
  }      

  main{
    flex: 1;
    padding-top: 70px;
  }

  footer{
    width: 100%;
    height: 80px;
    background-color: #020f2a;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .footer-logo{
      display: inline-block;

      img{
        @include img_size(60px, 60px);
      }      
    }

    .footer-icons{
      width: 200px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      a{
        display: inline-block;
        transition: all .2s ease-in-out;
        
        img{
          @include img_size(20px, 20px);
          display: inline-block;
        }
      }

      a:hover{
          transform: scale(1.05);
      }
    }

    .footer-text{
      display: flex;
      justify-content: space-between;
      align-items: center;

      a{
        text-decoration: none;
        color: #fff;
        margin-right: 10px;
        transition: all .2s ease-in-out;
      }

      a::after{
        content: '|';
        color: #fff;
        margin-left: 3px;
      }

      a:hover{
          color: #C0BFC7;
          transform: scale(1.05);
      }
    }
    
  }
</style>
