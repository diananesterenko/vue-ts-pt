<template>
    <div class="question" @click="isOpen = !isOpen">
        <div class="question-title"> {{ question.q}}</div>
        <hr />
        <div class="question-body" v-if="isOpen"> {{ question.a }}</div>


    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
   question: { q: string; a: string}
}>();
const isOpen = ref(false);
</script>

<style scoped>

</style>