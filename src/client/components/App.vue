<template>
  <div id="app">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
h1 {
  color: lightblue;
  font-size: 50px;
}
</style>
