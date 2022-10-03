<template>
    <!-- <table>
        <tr><td>{{group.name}}</td></tr>
        <tr v-for="item in group.teams">
            <td><span :class="`fi fi-${item.code}`"></span>{{item.team}}</td>
        </tr>
    </table> -->
    <table>
        <tr><td>{{group.group_name}}</td></tr>
        <tr><td><span :class="`fi fi-${group.team1_code}`"></span>{{group.team1}}</td></tr>
        <tr><td><span :class="`fi fi-${group.team2_code}`"></span>{{group.team2}}</td></tr>
        <tr><td><span :class="`fi fi-${group.team3_code}`"></span>{{group.team3}}</td></tr>
        <tr><td><span :class="`fi fi-${group.team4_code}`"></span>{{group.team4}}</td></tr>
    </table>
</template>

<script setup>
    defineProps({
        group: Object,

    })
</script>