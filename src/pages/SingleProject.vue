<script>
import axios from "axios";

export default {
    name: "SingleProject",

    data() {
        return {
            item: null,
            baseUrl: "http://127.0.0.1:8000",
            apiUrl: "/api/projects/",
        };
    },

    methods: {
        getData() {
            return axios
                .get(this.baseUrl + this.apiUrl + this.$route.params.slug)
                .then((response) => {
                    if (response.data.success) {
                        this.item = response.data.result;
                    } else {
                        this.$router.push({ name: "not-found" });
                    }
                })
                .catch((error) => {
                    console.error("Errore:", error);
                });
        },
    },

    mounted() {
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
    <div v-if="!item" class="container py-4">
        <div>Loading...</div>
    </div>
    <div v-else class="container py-4">
        <div class="row">
            <h1 class="">{{ item.title }}</h1>
            <p>{{ item.description }}</p>
        </div>
    </div>
</template>
