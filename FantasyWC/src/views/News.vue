<template>
    <div class="container">
        <div class="news-section">
            <div class="news-heading">
                <h2>{{store.state.niz[index-1].title}}</h2>
                <img :src="`/src/images/news/${store.state.niz[index-1].img_path}`" alt="">
            </div>            
            <div class="news-content">
                <p>{{store.state.niz[index-1].article}}</p>
            </div>                    
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    //import {store} from '../api/store2';
    import {useRoute} from 'vue-router';
    import {store} from '../store/store'

    const route = useRoute();
    let index = Number(route.params.id);

</script>
<style lang="scss">

    .news-section{
        height: 100%;
        display: flex;
        flex-direction: row;

        .news-heading, .news-content{
            width: 50%;            
        }

        .news-heading{
            text-align: center;
            margin: 0 auto;

            h2{
                font-size: 28px;
                padding: 10px;
                font-weight: bold;
                margin: 20px 0;
            }

            img{
                width: 70%;
                height: 300px;
                
                object-fit: cover;
            }
        }

        .news-content{
            text-align: justify;
            margin: auto 0;

            p{
                margin-top: 40px;
                font-size: 18px;
                line-height: 28px;
            }
        }
    }
    
</style>
