<template>
  <component :is="layout" />
</template>


<script setup lang="ts">
import MainLayout from './layout/MainLayout.vue';
import AuthLayout from './layout/AuthLayout.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const layouts = {
  main: MainLayout,
  auth: AuthLayout
};
const layout = computed(() => {
  return layouts[route.meta.layout as keyof typeof layouts] || MainLayout;
});
</script>





<!-- <style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style> -->