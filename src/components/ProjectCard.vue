<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      items: [],
      baseUrl: 'http://127.0.0.1:8000',
      apiUrl: '/api/projects',
    };
  },
  methods: {
    getData(){
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
      return axios.get(this.baseUrl + this.apiUrl, {headers}).then(response => {
        console.log(response);
        this.items = response.data.results;
      }).catch(error => {
        console.error('Errore:', error);
      });
    },
  },
  mounted() {
    this.getData();
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
    </div>
</template>