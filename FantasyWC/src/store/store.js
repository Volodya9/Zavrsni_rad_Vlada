import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'

export const store = createStore({
    state(){
        return{
            niz: []
        }
    },
    mutations:{
        getData(state){
            state.niz = [];
            fetch('http://localhost:3000/news')
            .then(response=>response.json())
            .then(data=> state.niz = data.slice())
        }
    },
    plugins: [createPersistedState()]    
})