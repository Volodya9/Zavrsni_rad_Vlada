<template>
    <div class="container">
        <h1>Teams</h1>
        <div class="teams-content">
            <table v-for="item in groups">
                <tr><td>{{item.group_name}}</td></tr>
                <tr><td><span :class="`fi fi-${item.team1_code}`"></span>{{item.team1}}</td></tr>
                <tr><td><span :class="`fi fi-${item.team2_code}`"></span>{{item.team2}}</td></tr>
                <tr><td><span :class="`fi fi-${item.team3_code}`"></span>{{item.team3}}</td></tr>
                <tr><td><span :class="`fi fi-${item.team4_code}`"></span>{{item.team4}}</td></tr>
            </table>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'

    let groups = ref([]);

    fetch('http://localhost:3000/groups')
    .then(response=>response.json())
    .then(data=>groups.value = data.slice())

    function klikniMe(){
        console.log(groups.value[0])
    }
</script>
<style lang="scss">
    h1{
        font-size: 28px;
        font-weight: bold;
        line-height: 28px;
        margin: 20px 0;
        color: #0C0828;
    }

    .teams-content{
        display: flex;
        flex-direction: row;

        table{
            width: 24%;

            tr:first-child{
                background-color: #130D3F;
                color: #fff;
                font-size: 24px;
            }
            
            td{
                padding: 10px;
                font-size: 16px;

                span{
                    margin-right: 5px;
                }
            }
        }
    }
</style>