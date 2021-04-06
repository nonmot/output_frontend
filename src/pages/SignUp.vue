<template>
    <div>
        <v-container>
            <v-form
                @submit.prevent="sign_up"
            >
                <v-text-field
                    label="名前"
                    v-model="form.name"
                ></v-text-field>
                <v-text-field
                    label="メール"
                    v-model="form.email"
                ></v-text-field>
                <v-text-field
                    label="パスワード"
                    v-model="form.password"
                    type="password"
                ></v-text-field>
                <v-text-field
                    label="パスワード確認"
                    v-model="form.password_confirmation"
                    type="password"
                ></v-text-field>

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
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                }
            }
        },

        methods: {
            sign_up() {
                api.post('/auth/', {
                    name: this.form.name,
                    email: this.form.email,
                    password: this.form.password,
                    password_confirmation: this.form.password_confirmation
                })
                .then(() => {
                    this.$store.dispatch('auth/login', {
                        email: this.form.email,
                        password: this.form.password
                    })
                    .then(() => {
                        this.$router.replace('/')
                    })
                })
            }
        }
    }
</script>