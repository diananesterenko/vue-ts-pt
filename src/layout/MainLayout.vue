<template>
    <TheNavbar />
    <TheSideBar />
    <div class="container with-nav">
        <AppMessage />
       <router-view/>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import TheNavbar from '@/TheNavbar.vue';
import AppMessage from '@/components/ui/AppMessage.vue';
import TheSideBar from '@/components/TheSideBar.vue';
</script>

<style scoped>

</style>