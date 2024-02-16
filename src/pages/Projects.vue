<script>
import ProjectCardVue from "../components/ProjectCard.vue";
import axios from "axios";

export default {
    name: "Projects",
    components: {
        ProjectCardVue,
    },
};
</script>

<template>
    <main class="pb-5">
        <ProjectCardVue />
    </main>
</template>
