<template>
    <table>
        <tr v-for="item in players">
            <td>{{item.player_name}}</td>
            <td>{{item.position}}</td>
            <td>{{item.team}}</td>
            <td>{{item.points}}</td>
            <td><button @click="$emit('choosePlayer',item.player_name, item.position, item.points)">choose</button></td>
        </tr>
    </table>
</template>
<script setup>
    const props = defineProps({
        players: Array
    })

    function klikniMe(){
        console.log(this.players)
    }
</script>

<style lang="scss">
    td{
        padding: 3px;
        padding-left: 5px;
    }
</style>