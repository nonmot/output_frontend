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
        </v-toolbar>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .title {
        color: inherit;
        text-decoration: none;
    }
</style>