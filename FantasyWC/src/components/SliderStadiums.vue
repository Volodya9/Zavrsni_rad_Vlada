<template>
    <div class="section">
        <button class="pre-btn">
            <img src="../images/pre-btn.png" alt="">
        </button>
        <button class="nxt-btn">
            <img src="../images/next-btn.png" alt="">
        </button>
        <div class="slide-container">
            <div class="slide-card" v-for="(img, index) in stadiums" :key="index">
                <a href="#"><img :src="`/src/images/stadiums/${img.img_path}`" alt=""></a>
            </div>            
        </div>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue'    

    const props = defineProps({
        stadiums: Array
    });

  

    onMounted(()=>{
        const container = document.querySelector('.slide-container');
        let dimensions = container.getBoundingClientRect();

        let containerWidth = dimensions.width;

        document.querySelector('.nxt-btn').addEventListener('click', function(){
            container.scrollLeft+=containerWidth;
        });
        document.querySelector('.pre-btn').addEventListener('click', function(){
            container.scrollLeft-=containerWidth;
        });

    });

    
</script>

<style>
*{
    box-sizing: border-box;
}

.section{
    position: relative;
    overflow: hidden;
    padding: 20px;
    margin-bottom: 20px;
}

.slide-container{
    width: 80%;
    margin: 0 auto;    
    padding: 0 10vw;    
    display: flex;
    overflow-x: auto;
    
    scroll-behavior: smooth;
}

.slide-container::-webkit-scrollbar{
    display: none;
}

.slide-card{
    width: 450px;
    height: 250px;
    flex: 0 0 auto;
    margin-right: 40px;
}

.slide-card img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;    
}

.pre-btn, .nxt-btn{
    border: none;
    width: 10vw;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 100%);;
    cursor: pointer;
    z-index: 8;
}

.pre-btn img, .nxt-btn img{
    width: 13px;
    height: 22px;
    opacity: 0.2;
}

.pre-btn{
    left: 0;
}

.nxt-btn{
    right: 0;
}
</style>