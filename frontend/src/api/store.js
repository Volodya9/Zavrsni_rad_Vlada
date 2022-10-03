import {reactive} from 'vue';


// export const myStore = defineStore('main', ()=>{
//     const newsArray = ref([]);
//     function getNews(){
//         fetch('http://localhost:3000/news')
//         .then(response=>response.json())
//         .then(data=>data.forEach(item=>{
//             newsArray.value.push(item)
//         }));        
//     }

//     return {getNews}
// });

export const myStore = reactive({
    newsArray : [],
    counter: [],
    async getData(){
        this.newsArray = [];
        await fetch('http://localhost:3000/news')
        .then(response=>response.json())
        .then(data=>data.forEach(item=>{
            this.newsArray.push(item)
        }));      
    },
    fillData(){
        for(let i=1;i<6;i++){
            this.counter.push(i)
        }
    }
})