<template>
    <div class="cover">
    </div>
    <div class="intro">
      <div class="container">
        <div class="intro-text">
          <h2>Waiting for the World cup</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, expedita cum! Cupiditate nobis itaque quae ut eos adipisci magnam corporis.</p>
          <p>Minima dolorum magnam consequuntur nemo quia cum est eveniet laboriosam delectus odit.</p>
        </div>
      </div>
    </div>
    <div class="container">      
      <div class="news">
        <h2>News about Qatar 2022</h2>
        <NewsBoxes :news="news2" @sendNewsData="sendNews"></NewsBoxes>
      </div>
    </div>
    <div class="matches-info">
      <div class="matches-info-content">
        <h2>Matches & Schedules</h2>
        <h4>View all the matches & schedules by date</h4>
        <RouterLink :to="`/schedules`">View</RouterLink>
      </div>
    </div>
    <div class="stadiums">
      <div class="container">
        <h2>Explore stadiums where they will play games</h2>
      </div>
      <SliderStadiums :stadiums="stadiumsArray"></SliderStadiums>
    </div>
    <div class="about">
      <div class="container">
        <div class="about-heading">
          <h2>About Qatar</h2>
          <h4>Explore more about host country</h4>
          <RouterLink :to="`/about`">Read more...</RouterLink>
        </div>
        <div class="about-img">
          <img src="../images/qatar_site.jpg" alt="">
        </div>
      </div>
    </div>
</template>

<script setup>
  import {ref, onMounted, onBeforeMount} from 'vue'
  import NewsBoxes from '../components/NewsBoxes.vue';
  import SliderStadiums from '../components/SliderStadiums.vue';  

  

  const stadiumsArray = ref([]);
  const news = [1,2,3,4,5];
  const news2 = [];

  
  fetch('http://localhost:3000/stadiums')
  .then(response=>response.json())
  .then(data=> stadiumsArray.value = data.slice());  


  function sendNews(e){
    console.log(e)
  }
  
</script>

<style lang="scss">
  @mixin heading($size,$height){
    font-size: $size;
    font-weight: bold;
    line-height: $height;
  }

  .cover{
    background-image: url('../images/cover2.jpg');
    width: 100%;
    height: 900px;
    background-position: bottom bottom;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-attachment: fixed;

      &-text{
        position: absolute;
        color: #fff;       
        top: 10%; 
        left: 15%;
      }
  }

  .intro{
    width: 100%;
    height: 200px;
    background-image: linear-gradient(90deg, rgba(11,6,52, 1), rgba(11,8,85, 0.95));
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    &-text{
      padding: 5px;

      h2{
        margin-bottom: 20px;
        font-size: 28px;
        font-weight: bold;
      }

      p{
        padding: 5px;
      }
    }
  }

  .news{
    h2{
      @include heading(32px, 1.5);
      margin: 50px 0 40px 0;
    }
  }

  .matches-info{
    width: 100%;
    height: 500px;
    background-image: linear-gradient(90deg, rgba(11,6,52, 1), rgba(15,8,117, 0.55)),
    url('../images/stadium1.png');
    background-repeat: no-repeat;                
    background-position: top top;    
    background-size: cover;
    color: #fff;
    position: relative;

    &-content{
      position: absolute;
      top: 50%;
      left: 50px;
      transform: translateY(-50%);

      h2{
        @include heading(28px, 1.5)
      }

      h4{
        @include heading(18px, 1)
      }

      a{        
        text-decoration: none;
        background: transparent;
        border-radius: 20px;
        font-size: 16px;
        cursor: pointer;
        text-transform: uppercase;
        border: 1px solid #fff;
        padding: 8px 30px;
        color: #fff;
        min-width: 90px;
        transition: all .2s ease-in-out;
        display: inline-block;
        margin-top: 20px;
      }

      a:hover{
        transform: scale(1.1);
      }
    }
  }

  .stadiums{
    width: 100%;

    h2{
      @include heading(28px, 1.5);
      letter-spacing: 1.5px;
      margin: 20px 0;
    }    
  }

  .about{
    width: 100%;
    height: 500px;
    background-image: linear-gradient(to right, rgba(107,3,3,.55), rgba(135,10,52,.81)),
                url('../images/poster10.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    position: relative;
    color: #fff;    

    &-heading{
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);

      h2{
        @include heading(24px, 2.5);
        letter-spacing: 12px;
      }

      h4{
        margin-bottom: 30px;
        @include heading(16px, 1.5);
      }

      a{        
        text-decoration: none;
        background: transparent;
        border-radius: 20px;
        font-size: 16px;
        cursor: pointer;
        text-transform: uppercase;
        border: 1px solid #fff;
        padding: 8px 30px;
        color: #fff;
        min-width: 90px;
        transition: all .2s ease-in-out;
        display: inline-block;
      }

      a:hover{
        transform: scale(1.1);
      }
    }

    &-img{
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(-35%,-50%);
    }
  }
  
</style>