<script>
import axios from "axios";

export default {
    name: "SingleProject",

    data() {
        return {
            item: [],
            loading: false,
            baseUrl: "http://127.0.0.1:8000",
            apiUrl: "/api/projects/",
        };
    },

    methods: {
        getData() {
            this.loading = true;
            return axios
                .get(this.baseUrl + this.apiUrl + this.$route.params.slug)
                .then((response) => {
                    if (response.data.result) {
                        this.item = response.data.result;
                    } else {
                        this.loading = false;
                        this.$router.push({ name: "not-found" });
                    }
                })
                .catch((error) => {
                    console.error("Errore:", error);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
    },

    created() {
        this.getData();
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                this.getData();
            }
        );
    },
};
</script>

<template>
    <div v-if="loading" class="container py-4">
        <div>Loading...</div>
    </div>
    <div v-else class="container py-4">
        <h1>{{ item.title }}</h1>
        <p>{{ item.description }}</p>
    </div>
</template>
