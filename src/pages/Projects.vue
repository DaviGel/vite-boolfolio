<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";

export default {
    name: "Projects",

    components: {
        ProjectCard,
    },

    data() {
        return {
            items: [],
            itemData: {},
            baseUrl: "http://127.0.0.1:8000",
            apiUrl: "/api/projects",
            currentPage: 1,
            maxPage: null,
        };
    },

    methods: {
        getData() {
            return axios
                .get(this.baseUrl + this.apiUrl, {
                    params: {
                        page: this.currentPage,
                    },
                })
                .then((response) => {
                    this.items = response.data.results.data;
                    // this.itemData = response.data.results;
                    this.maxPage = response.data.results.last_page;
                })
                .catch((error) => {
                    console.error("Errore:", error);
                });
        },

        nextPage() {
            if (this.currentPage === this.maxPage) {
                this.currentPage = 1;
            } else {
                this.currentPage++;
            }
            this.getData();
        },

        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            } else {
                this.currentPage = this.maxPage;
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
            class="d-flex justify-content-center mt-3"
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
