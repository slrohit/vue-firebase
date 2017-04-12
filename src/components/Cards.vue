<template>
  <div>
    <card v-for="user in users" :key="user.name" :user="user" ></card>
  </div>
</template>

<script>
import Vue from 'vue'
import Card from './Card'
Vue.component('card', Card)
export default {
  name: 'cards',
  data () {
    return {
      users: [
        {
          "name":"Rohit",
          "age":27
        },
        {
          "name":"salona",
          "age":28
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
