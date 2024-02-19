<script>
import store from "../store";

export default {
    name: "ProjectSearch",
    data() {
        return {
            store,
        };
    },
    emits: ["searchProject"],
    methods: {
        search() {
            this.store.projects.currentPage = 1;
            this.$router.push({
                name: "projects",
                query: { page: 1, key: this.store.projects.searchKey },
            });
            this.$emit("searchProject");
        },
    },
};
</script>
<template>
    <section id="project-search">
        <form action="" @submit.prevent="search">
            <div class="form-floating mb-3">
                <input
                    type="text"
                    class="form-control"
                    id="search-key"
                    placeholder="Cerca nei progetti"
                    v-model="store.projects.searchKey"
                />
                <label for="search-key">Cerca nei progetti</label>
            </div>
            <button class="btn btn-primary">Cerca</button>
        </form>
    </section>
</template>
