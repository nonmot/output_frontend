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
            <router-link
                v-if="!isLoggedIn"
                to="/login"
            >ログイン</router-link>
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
</style>