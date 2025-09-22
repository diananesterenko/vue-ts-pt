<template>
    <div class="sidebar" v-if="sidebar">
        <span class="sidebar-close" @click="closeSidebar"> &times;</span>

        <div class="sidebar-content">
            <p>Welcome to system  ! Here you can find information</p>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store';
import { computed } from 'vue';

const store = useMainStore();
const sidebar= computed(() => store.sidebar);
const closeSidebar = () => {
    store.closeSidebar();
};

</script>

<style scoped>

</style>