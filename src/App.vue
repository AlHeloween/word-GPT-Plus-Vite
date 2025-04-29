<!-- src/App.vue -->
<template>
  <div id="app">
    <div v-if="showSplash" class="hero">
      <!-- same content as above -->
      <router-link to="/" class="btn">Home</router-link>
      <router-link to="/settings" class="btn">Settings</router-link>
    </div>
    <router-view v-else/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const showSplash = ref(true)
onMounted(() => {
  // hide splash after 2 seconds (example)
  setTimeout(() => (showSplash.value = false), 2000)
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
