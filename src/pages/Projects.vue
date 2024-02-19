<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";
import store from "../store";
import ProjectSearch from "../components/ProjectSearch.vue";

export default {
    name: "Projects",

    components: {
        ProjectCard,
        ProjectSearch,
    },

    data() {
        return {
            store,
            items: [],
            maxPage: null,
            errors: null,
            responseData: [],
        };
    },

    methods: {
        getData() {
            this.errors = null;
            return axios
                .get(this.store.api.baseUrl + this.store.api.apiUrls.projects, {
                    params: {
                        page: this.store.projects.currentPage,
                        key: this.store.projects.searchKey,
                    },
                })
                .then((response) => {
                    this.responseData = response.data;
                    this.maxPage = response.data.results.last_page;
                })
                .catch((error) => {
                    this.responseData.results.data = [];
                    this.errors = error.response.data.message;
                });
        },

        nextPage() {
            if (this.store.projects.currentPage >= this.maxPage) {
                this.store.projects.currentPage = 1;
            } else {
                this.store.projects.currentPage++;
            }
            this.$router.push({
                name: "projects",
                query: {
                    page: this.store.projects.currentPage,
                    key: this.store.projects.searchKey,
                },
            });
            this.getData();
        },

        prevPage() {
            if (this.store.projects.currentPage > 1) {
                this.store.projects.currentPage--;
            } else {
                this.store.projects.currentPage = this.maxPage;
            }
            this.$router.push({
                name: "projects",
                query: {
                    page: this.store.projects.currentPage,
                    key: this.store.projects.searchKey,
                },
            });
            this.getData();
        },
    },

    created() {
        this.store.projects.currentPage = this.$route.query.page ?? 1;
        this.store.projects.searchKey = this.$route.query.key ?? null;
        this.getData();

        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                this.store.projects.currentPage = this.$route.query.page ?? 1;
                this.store.projects.searchKey = this.$route.query.key ?? null;
                this.getData();
            }
        );
    },
};
</script>

<template>
    <div class="container py-4">
        <div class="row">
            <h1>Progetti</h1>

            <ProjectSearch @search-project="getData" />

            <div v-if="errors">{{ errors }}</div>

            <div
                class="col col-4 g-4"
                v-for="project in responseData.results?.data"
            >
                <ProjectCard :project="project" />
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
