<template>
    <div>
        <v-container>
            <h1>{{ group.title }}</h1>
            <p v-html="group.introduction"></p>
        </v-container>


    </div>
</template>

<script>
import axios from 'axios'

export default {

    data() {
        return {
            group: {}
        }
    },
    methods: {
        getGroup() {
            axios.get('http://127.0.0.1:3000/api/groups/' + this.$route.params.id)
            .then(response => {
                this.group = response.data
            })
        }
    },
    created() {
        this.getGroup()
    }
}
</script>