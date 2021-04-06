<template>
    <div>
        <v-toolbar
            dark
        >
            <v-app-bar-nav-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title>
                <router-link
                    to="/"
                    class="title"
                >OutPut</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <p
                v-if="useremail"
            >
                {{ useremail }}
            </p>
            <div
                v-if="!isLoggedIn"
            >
                <router-link
                    to="/login"
                    class="button"
                >
                    <v-btn>ログイン</v-btn>
                </router-link>
                <router-link
                    to="/sign_up"
                    class="button"
                >
                    <v-btn>新規登録</v-btn>
                </router-link>
            </div>
            <v-btn
                v-else
                @click="logout"
            >ログアウト</v-btn>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    computed: {
        isLoggedIn() {
            return this.$store.getters['auth/isLoggedIn']
        },
        useremail() {
            return this.$store.getters['auth/email']
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('auth/logout')
            this.$router.replace('/login')
        }
    }
}
</script>

<style scoped>
    .title {
        color: inherit;
        text-decoration: none;
    }

    .button {
        text-decoration: none;
    }
</style>