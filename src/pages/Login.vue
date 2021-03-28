<template>
    <div>
        <v-container>
            <v-form
                @submit.prevent="submit"
            >
                <v-text-field
                    label="メールアドレス"
                    v-model="form.email"
                ></v-text-field>
                <v-text-field
                    label="パスワード"
                    type="password"
                    v-model="form.password"
                ></v-text-field>
                <v-btn
                    type="submit"
                >送信</v-btn>
            </v-form>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        submit() {
            this.$store.dispatch('auth/login', {
                email: this.form.email,
                password: this.form.password
            })
            .then(() => {
                this.$router.replace('/')
            })
        }
    }
}
</script>