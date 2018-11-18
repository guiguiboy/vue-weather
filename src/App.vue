<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <select v-model="location">
      <option value="paris">Paris</option>
      <option value="london">London</option>
      <option value="roma">Roma</option>
      <option value="marseille">Marseille</option>
    </select>
    <Meteo v-bind:location="location"/>
  </div>
</template>

<script>
import Meteo from './components/Meteo.vue'

export default {
  name: 'app',
    data: function() {
      return {
          location: "paris"
      }
    },
  components: {
    Meteo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
