<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      items: [],
      baseUrl: 'http://127.0.0.1:8000',
      apiUrl: '/api',
    };
  },
  methods: {
    getData(){
      return axios.get(this.baseUrl + this.apiUrl).then(response => {
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