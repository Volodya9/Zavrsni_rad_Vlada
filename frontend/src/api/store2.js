import { createStore } from "vuex";

export const store = createStore({
    state(){
        return{
            niz: [],
            niz2: []
        }
    },
    mutations:{
        fillData(state){
            for(let i=1;i<6;i++){
                state.niz.push(i)
            }
        },
        async getData(state){
            await fetch('http://localhost:3000/news')
            .then(response=>response.json())
            .then(data=>data.forEach(item=>{
                state.niz2.push(item);
            }))
        }
    }    
})