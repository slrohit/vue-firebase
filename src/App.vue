<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1> A firebase application </h1>
    </div>
    <router-view></router-view>
    <div class="page-footer">
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
