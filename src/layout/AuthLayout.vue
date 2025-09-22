<template>
    <div class="container">
        <AppMessage />
       <router-view/>
    </div>
</template>

<script setup lang="ts">
import App from '@/App.vue';
import AppMessage from '@/components/ui/AppMessage.vue';


</script>

<style scoped>

</style>