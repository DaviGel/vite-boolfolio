<script>
import "bootstrap/dist/css/bootstrap.css";
import ProjectCard from "./components/ProjectCard.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
    components: {
        ProjectCard,
        AppHeader,
        AppFooter,
    },
};
</script>

<template>
    <AppHeader></AppHeader>
    <router-view></router-view>
    <AppFooter></AppFooter>
</template>
