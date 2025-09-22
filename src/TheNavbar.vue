<template>
    <nav class="navbar">
        <h3>Online Bank</h3>
        <ul class="navbar-menu">
            <li>
                <router-link to="/">Applications</router-link>
            </li>
            <li>
                <router-link to="/help">Help</router-link>
            </li>
            <li>
                <a href="#" @click.prevent="openSidebar">Messages</a>
            </li>
            <li>
                <a href="#" @click.prevent="logout"> Log out</a>
            </li>
        </ul>
    </nav>
      
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/ modules/auth.module';
import { useMainStore } from '@/store';
const store = useMainStore();
const openSidebar = () => {
    store.openSidebar();
};
import { useRouter } from 'vue-router';
const authStore = useAuthStore();
const router = useRouter();
const logout = () => {
    authStore.logout();
    router.push('/auth');
}
</script>

<style scoped>

</style>