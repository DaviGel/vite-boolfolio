<script>
export default {
    name: "ProjectCard",
    props: {
        item: Object,
    },
};
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">
                {{ item.description.substring(0, 70) }}
            </p>
            <router-link
                :to="{
                    name: 'project',
                    params: { slug: item.slug },
                }"
                class="btn btn-primary"
                >Guarda il progetto</router-link
            >
        </div>
    </div>
</template>

<style scoped="scss"></style>
