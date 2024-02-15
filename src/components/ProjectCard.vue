<script>
import axios from 'axios';

export default {
  name: 'App',

  data() {
    return {
      items: [],
      baseUrl: 'http://127.0.0.1:8000',
      apiUrl: '/api/projects',
      current_page: 1,
      max_page: null,
    };
  },

  methods: {
    getData(current_page){
      return axios.get(this.baseUrl + this.apiUrl, {
        params: {
          page: current_page
        }}).then(response => {
          this.items = response.data.results.data;
          this.max_page = response.data.results.last_page;
        }).catch(error => {
          console.error('Errore:', error);
      });
    },

    nextPage() {
      let nextPage = this.current_page;
      if (nextPage === this.max_page) {
        nextPage = 1;
      } else {
        nextPage++;
      }
      this.current_page = nextPage;
      this.getData(nextPage);
    },

    prevPage() {
      let prevPage = this.current_page;
      if (prevPage > 1) {
        prevPage--;
      } else {
        prevPage = this.max_page;
      }
      this.current_page = prevPage;
      this.getData(prevPage);
    }
  },

  mounted() {
    this.getData(this.current_page);
  },
};
</script>

<template>
    <div class="container my-4">
      <div class="row">
          <h1>Progetti</h1>
          <div class="col col-4 g-4" v-for="item in items">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.description.substring(0, 70) }}</p>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example" class="d-flex justify-content-center mt-3">
        <ul class="pagination">
          <li class="page-item">
            <button class="page-link" @click="prevPage()" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li class="page-item">
            <button class="page-link" @click="nextPage()" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
</template>