<template>
    <div class="container">
        <h1>Schedules</h1>
        <div class="schedule-content">        
            <table>
                <tr>
                    <td>Match date</td>
                    <td>Host</td>
                    <td>Match time</td>
                    <td>Away</td>
                    <td>stadium</td>
                </tr>
                <tr v-for="(item, index) in matches" :key="index">
                    <td>{{item.match_date}}</td>
                    <td><span :class="`fi fi-${item.host_code}`"></span>{{item.host}}</td>
                    <td>{{item.time}}</td>
                    <td><span :class="`fi fi-${item.away_code}`"></span>{{item.away}}</td>
                    <td>{{item.stadium}}</td>
                </tr>
            </table>                        
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

    let matches = ref([]);
    let n = 1;
    fetch('http://localhost:3000/matches')
    .then(response=>response.json())
    .then((data) => {
        matches.value = data.slice()
        n = matches.value.length/2;        
    });

     
</script>

<style lang="scss">

    h1{
        font-size: 28px;
        font-weight: bold;
        line-height: 28px;
        margin: 20px 0;
    }

    .schedule-content{
        display: flex;
        flex-direction: row;    

        table{
            margin: 10px 0 20px 0;

            tr:nth-child(odd){
                background-color: #DDD8FF;
            }            

            td{
                padding: 4px;
                padding-left: 16px;
            }            
        }
    }
</style>