<script setup>
import {RouterLink} from 'vue-router'
</script>
<template>
    <div>
        <RouterLink active-class="active" to="/">Home</RouterLink>
        <RouterLink active-class="active" to="/about">About</RouterLink>
    </div>
</template>

<style scoped>
  .active{
    background-color: rgba(red, green, blue, alpha);
    font-size: 35px;
  }
</style>
