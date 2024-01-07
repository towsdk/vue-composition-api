<script setup>
import HomeView from "./views/HomeView.vue"
import AboutView from "./views/AboutView.vue"
import Nav from "./components/Nav.vue"
import { ref } from "vue";

const random = ref("")

</script>

<template>
  <div>
    {{ random }}
    <button @click="random= 'ok'">Click me</button>
    <Nav />
    <RouterView />
  </div>
</template>