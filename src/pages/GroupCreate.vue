<template>
    <div>
        <v-container>
            <h1>新規グループの作成</h1>
            <v-form
                @submit.prevent="createGroup"
            >
                <v-text-field
                    v-model="form.title"
                    label="グループのタイトルを入力"
                ></v-text-field>
                <v-textarea
                    v-model="form.introduction"
                    label="グループの紹介文を入力"
                ></v-textarea>
                <v-btn
                    type="submit"
                >作成</v-btn>
            </v-form>
        </v-container>
    </div>
</template>

<script>
import api from '../services/api'

export default {
    data() {
        return {
            form: {
                title: '',
                introduction: '',
            }
        }
    },
    methods: {
        createGroup() {
            api.post('/api/groups', {
                title: this.form.title,
                introduction: this.form.introduction
            })
            .then(() => {
                this.$router.replace('/')
            })
        }
    }
}
</script>