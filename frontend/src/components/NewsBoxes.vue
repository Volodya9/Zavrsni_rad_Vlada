<template>
    <div class="news-boxes">
      <div class="news-box" v-for="(item,index) in store.state.niz" :key="index">
        <RouterLink :to="`/news/${item.id}`" @click="$emit('sendNewsData', index)">
          <figure>
            <img :src="`/src/images/news/${item.img_path}`" alt="">
            <figcaption>{{item.title}}</figcaption>
          </figure>
        </RouterLink>
      </div>       
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
//import { store } from '../api/store2'
import {store} from '../store/store'

defineProps({
    news: Array
});

  store.commit('getData');  

</script>

<style lang="scss">

.news-boxes{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: space-evenly;
      gap: 20px;
      margin-bottom: 30px;
      
      .news-box{
        text-align: center;
        width: 385px;
        height: 270px;

        a{
          text-decoration: none;
          color: #727070;
          transition: all .2s ease-in-out;
          display: block;

          figure{
          margin: auto;

            img{
              display: block;
              width: 100%;
              height: 220px;
              object-fit: cover;
            }

            figcaption{
              margin-top: 10px;
            }
          }
        }

        a:hover{
          transform: scale(1.05);
        }
      }
    }
</style>