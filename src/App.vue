<template>
  <MenuRutas/>
  <router-view/>
</template>

<script>
import MenuRutas from './components/MenuRutas.vue'

export default {
  name: 'App',
  components: {
    MenuRutas
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
