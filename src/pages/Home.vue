<template>
    <div>
        <v-container>
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
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                groups: [],
                group_id: 0,
            }
        },
        methods: {
            getAllGroups() {
                axios.get('http://127.0.0.1:3000/api/groups')
                .then(response => {
                    this.groups = response.data
                    this.group_id = response.data.id
                })
            }
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
</style>