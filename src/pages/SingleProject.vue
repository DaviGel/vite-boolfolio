<script>
import axios from "axios";
import store from "../store";

export default {
    name: "SingleProject",

    data() {
        return {
            item: [],
            store,
            loading: false,
        };
    },

    methods: {
        getData() {
            this.loading = true;
            return axios
                .get(
                    this.store.api.baseUrl +
                        this.store.api.apiUrls.projects +
                        this.$route.params.slug
                )
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
