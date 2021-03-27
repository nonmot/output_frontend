<template>
    <div>
        <GlobalHeader></GlobalHeader>
        <router-view></router-view>
    </div>
</template>

<script>
    import axios from 'axios';
    import GlobalHeader from './components/GlobalHeader';

    export default {
        components: {
            GlobalHeader,
        },
        data() {
            return {
                groups: [],
            }
        },
        methods: {
            getAllGroups() {
                axios.get('http://127.0.0.1:3000/api/groups')
                .then(response => {
                    this.groups = response.data
                })
            }
        },
        created() {
            this.getAllGroups()
        }
    }
</script>

<style>
    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    }
</style>
