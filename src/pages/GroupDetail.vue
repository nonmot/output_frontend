<template>
    <div>
        <v-container>
            <div class="d_flex">
                <h1 class="group_title">{{ group.title }}</h1>
                <v-btn
                    class="group_delete"
                    @click.prevent="deleteGroup"
                >削除</v-btn>
            </div>
            <small>{{ user.uid }}</small>
            <p v-html="group.introduction"></p>
        </v-container>
    </div>
</template>

<script>
import api from '../services/api'

export default {

    data() {
        return {
            group: {},
            user: null,
        }
    },
    methods: {
        getGroup() {
            api.get('api/groups/' + this.$route.params.id)
            .then(response => {
                this.group = response.data.group
                this.user = response.data.user
            })
        },

        deleteGroup() {
            api.delete('api/groups/' + this.$route.params.id)
            .then(() => {
                this.$router.replace('/')
            })
        }
    },
    created() {
        this.getGroup()
    }
}
</script>

<style scoped>
    .d_flex {
        display: flex;
    }

    .group_title {
        display: inline-block;
    }

    .group_delete {
        margin-left: auto;
    }
</style>