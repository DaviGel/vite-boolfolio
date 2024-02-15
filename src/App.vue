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
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<template></template>