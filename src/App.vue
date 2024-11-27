<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Lovro Govekar</h1>
    <hr>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Domov</RouterLink>
        <RouterLink to="/ham">Radioamaterstvo</RouterLink>
      </nav>
    </div>
    <hr>
  </header>

  <RouterView />
</template>

<style scoped>
h1 {
  font-size: 48px;
}
header {
  padding: 10px;
  text-align: center;
}
nav {
  text-align: center;
}
</style>
