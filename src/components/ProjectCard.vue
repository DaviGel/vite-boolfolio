<script>
export default {
    name: "ProjectCard",
    props: {
        project: Object,
    },
};
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">
                {{ project.description.substring(0, 70) }}
            </p>
            <router-link
                :to="{
                    name: 'project',
                    params: { slug: project.slug },
                }"
                class="btn btn-primary"
                >Guarda il progetto</router-link
            >
        </div>
    </div>
</template>

<style scoped="scss"></style>
