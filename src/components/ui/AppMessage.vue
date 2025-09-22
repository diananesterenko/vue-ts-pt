<template>
    <div v-if="message" :class = "['alert', message.type]">
        
        <p class = "alert-title" v-if="title">
            {{title}}
        </p>
        <p>{{message.value}}</p>
        <span class ="alert-close" @click="store.clearMessage">&times;</span>

    </div>
</template>

<script setup lang="ts">
import {useMainStore } from '@/store/index';
import { computed } from 'vue';

const store = useMainStore();
const message = computed(() => store.message);
// console.log('message.value');
// console.log(message.value?.type);
const title = computed(() => message.value ? TITLE_MAP[message.value?.type as keyof typeof TITLE_MAP] :null);

const TITLE_MAP ={
    danger: 'Error!',
    warning: 'Warning!',
    primary: 'Success!'
}

</script>


<style scoped>

</style>