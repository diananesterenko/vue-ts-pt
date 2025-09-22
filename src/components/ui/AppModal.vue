<template>
    <div class="modal-backdrop" @click="$emit('close')"></div>
        <div class="modal">
            <h3 v-if="title">{{ title }}</h3>
            <slot></slot>
        </div>

   
</template>

<script setup lang="ts">


const props = defineProps<{
    title?: string
}>()

const emits = defineEmits<{
    (e: 'close'): void
}>()


</script>

<style scoped>

</style>