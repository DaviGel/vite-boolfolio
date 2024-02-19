<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";
import store from "../store";

export default {
    name: "Projects",

    components: {
        ProjectCard,
    },

    data() {
        return {
            store,
            items: [],
            maxPage: null,
        };
    },

    methods: {
        getData() {
            return axios
                .get(this.store.api.baseUrl + this.store.api.apiUrls.projects, {
                    params: {
                        page: this.store.projects.currentPage,
                    },
                })
                .then((response) => {
                    this.items = response.data.results.data;
                    this.maxPage = response.data.results.last_page;
                })
                .catch((error) => {
                    console.error("Errore:", error);
                });
        },

        nextPage() {
            if (this.store.projects.currentPage === this.maxPage) {
                this.store.projects.currentPage = 1;
            } else {
                this.store.projects.currentPage++;
            }
            this.getData();
        },

        prevPage() {
            if (this.store.projects.currentPage > 1) {
                this.store.projects.currentPage--;
            } else {
                this.store.projects.currentPage = this.maxPage;
            }
            this.getData();
        },
    },

    mounted() {
        this.getData();
    },
};
</script>

<template>
    <div class="container py-4">
        <div class="row">
            <h1>Progetti</h1>
            <div class="col col-4 g-4" v-for="item in items">
                <ProjectCard :item="item" />
            </div>
        </div>
        <nav
            aria-label="Page navigation example"
            class="d-flex justify-content-center mt-3 pb-5"
        >
            <ul class="pagination d-flex gap-2">
                <li class="page-item">
                    <button
                        class="page-link shadow-none"
                        @click="prevPage"
                        aria-label="Previous"
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                <li class="page-item">
                    <button
                        class="page-link shadow-none"
                        @click="nextPage"
                        aria-label="Next"
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped="scss">
.page-link {
    &:focus {
        z-index: 0;
        background-color: #fff;
    }
}
</style>
