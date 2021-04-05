<template>
    <div>
        <v-container>
            <router-link
                to="group/create"
                class="group_create"
            >
                <v-btn>グループ作成</v-btn>
            </router-link>
            <div class="group_list">
                <v-card
                    hover
                    v-for="group in groups"
                    :key="group.id"
                    :to="{name: 'groupDetail', params: {id: group.id}}"
                >
                    <div class="mb-5">
                        <v-card-title>
                            {{ group.title }}
                        </v-card-title>
                        <v-card-text
                            v-html="group.introduction"
                        >
                        </v-card-text>
                    </div>
                </v-card>
            </div>
        </v-container>
    </div>
</template>

<script>
    import api from '../services/api'

    export default {
        data() {
            return {
                groups: [],
                group_id: 0,
            }
        },
        methods: {
            getAllGroups() {
                api.get('api/groups')
                .then(response => {
                    this.groups = response.data
                    this.group_id = response.data.id
                })
            },
        },
        created() {
            this.getAllGroups()
        }
    }
</script>

<style scoped>
    .v-card {
        margin-bottom: 20px;
        padding: 10px;
    }

    .group_create {
        float: right;
    }

    .group_create::after {
        display: block;
        content: "";
        clear: both;
    }
</style>