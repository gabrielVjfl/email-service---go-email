<template>
  <div id="app">
    
    <HelloWorld text="Go Email Vue" />
    <Main></Main>
    
    <div v-if="goslow == true" class="spinner-border text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Main from './components/Main.vue'
export default {


data() {
  return {
  goslow: false
  }
},

  name: 'App',
  components: {
    HelloWorld,
    Main,
  },
  
}
</script>

<style>
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #66F96A;
  flex-direction: column
  
}
</style>
