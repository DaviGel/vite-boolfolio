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
                    console.log(response);
                    this.item = response.data.result;
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
