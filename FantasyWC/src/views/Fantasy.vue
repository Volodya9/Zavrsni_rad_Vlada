<template>
    <div class="container">
        <h2>Fantasy</h2>
        <div class="fantasy-container">
            <div class="fantasy-content">
                <div class="positions">
                    <button @click="showGoalkeepers">goalkeepers</button>
                    <button @click="showDefenders">defenders</button>
                    <button @click="showMidfielders">midfielders</button>
                    <button @click="showAtackers">atackers</button>
                </div>
                <div class="players">
                    <TablePlayers :players="goalkeepers" v-if="isShownGoalkeepers" @choosePlayer="getPlayer"></TablePlayers>                
                    <TablePlayers :players="defenders" v-if="isShownDefenders" @choosePlayer="getPlayer"></TablePlayers>
                    <TablePlayers :players="midfielders" v-if="isShownMidfielders" @choosePlayer="getPlayer"></TablePlayers>
                    <TablePlayers :players="atackers" v-if="isShownAtackers" @choosePlayer="getPlayer"></TablePlayers>
                </div>
            </div>
            <div class="fantasy-team">
                <h3>Your fantasy team</h3>
                <p>Points: <span>{{totalPoints}}</span></p>
                <p>Name of team: <input type="text" v-model="team_name" class="team_name"></p>
                <table>
                    <tr v-for="item in players">
                        <td>{{item.name}}</td>
                        <td>{{item.position}}</td>
                        <td>{{item.points}}</td>
                    </tr>
                    <tr>
                        <td><button @click="submitTeam">Submit</button></td>
                        <td><button @click="reset">Reset</button></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script setup>
    import {ref} from 'vue';
    import TablePlayers from '../components/TablePlayers.vue';

    const goalkeepers = ref([]);
    const defenders = ref([]);
    const midfielders = ref([]);
    const atackers = ref([]);

    let isShownGoalkeepers = ref(false);
    let isShownDefenders = ref(false);
    let isShownMidfielders = ref(false);
    let isShownAtackers = ref(false);
    let totalPoints = ref(900);
    let players = ref([]);
    let team_name = ref();

    //goalkeepers
    fetch('http://localhost:3000/players/goalkeepers')
    .then(response=>response.json())
    .then(data=> goalkeepers.value = data.slice());

    //defenders
    fetch('http://localhost:3000/players/defenders')
    .then(response=>response.json())
    .then(data=> defenders.value = data.slice());

    //midfielders
    fetch('http://localhost:3000/players/midfielders')
    .then(response=>response.json())
    .then(data=> midfielders.value = data.slice());

    //atackers
    fetch('http://localhost:3000/players/atackers')
    .then(response=>response.json())
    .then(data=> atackers.value = data.slice());

    function showGoalkeepers(){
        isShownGoalkeepers.value = true;
        isShownDefenders.value = false;
        isShownMidfielders.value = false;
        isShownAtackers.value = false;
    }

    function showDefenders(){
        isShownGoalkeepers.value = false;
        isShownDefenders.value = true;
        isShownMidfielders.value = false;
        isShownAtackers.value = false;
    }

    function showMidfielders(){
        isShownGoalkeepers.value = false;
        isShownDefenders.value = false;
        isShownMidfielders.value = true;
        isShownAtackers.value = false;
    }

    function showAtackers(){
        isShownGoalkeepers.value = false;
        isShownDefenders.value = false;
        isShownMidfielders.value = false;
        isShownAtackers.value = true;
    }

    function getPlayer(name, position, points){
        const player = {
            name: name,
            position: position,
            points: points
        };
        players.value.push(player);
        totalPoints.value = totalPoints.value - points;
    }

    function checkDuplicates(arrayOfPlayers){
        let tmp = arrayOfPlayers.map(item=>item.name);
        if(tmp.some((item, index)=>index!==tmp.indexOf(item))){
            return true;
        }
        else{
            return false;
        }            
    }

    async function submitTeam(){
        if(totalPoints.value<0){
            alert('You must make team with max 900 points! Try again.');
            return;
        }
        if(players.value.filter(item=>item.position=='goalkeeper').length>1){
            alert('You cannot have more than 1 goalkeeper! Try again.');
            return;
        }
        if(checkDuplicates(players.value)){
            alert('You cannot have more than 1 same player! Try again.');
            return;
        }
        const response = await fetch('http://localhost:3000/signin', {
            method: 'POST',
            body: JSON.stringify({
                team_name: team_name.value,
                username: '',
                score: 0,
                players: players.value.slice()
            }),
            headers: { 'Content-type' : 'application/json;'},
        })
        .then(response=>response.json());
        alert('Successfully created team!');
        router.push('/fantasy');
    }

    function reset(){
        //players.value.splice(0,players.value.length);
        players.value.length = 0;
        totalPoints.value = 900;
    }
</script>

<style lang="scss">
    @mixin font_style($size, $weight){
        font-size: $size;
        font-weight: $weight;
    }

    h2{
        @include font_style(28px, bold);
        line-height: 20px;
        margin-top: 20px;
    }

    .fantasy-container{
        display: flex;
        flex-direction: row;

        button{
            color: #fff;
            background-color: #040235;
            letter-spacing: 0.5px;
            padding: 5px;
            margin: 0 10px 5px 0;
            border: 1px solid #040235;
            border-radius: 10px;
            display: inline-block;
            transition: all 0.2s ease 0s;
        }

        .fantasy-content{
            margin: 20px 0;
            width: 60%;

            .positions{
                margin-bottom: 40px;
            }
        }

        .fantasy-team{
            margin: 20px 0;
            width: 40%;

            h3{
                @include font_style(20px, bold);
                margin-bottom: 20px;
            }

            .team_name{
                width: 200px;
                color: #4E4C97;
                background: #fff;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 1px;
                height: 40px;
                padding: 6px 12px;
                border-radius: 5px;
                border: 2px solid #F2F5F6;
                box-shadow: none;
            }
        }
    }
</style>