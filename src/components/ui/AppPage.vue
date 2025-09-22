<template>
    <div class="breadcrumbs" v-if="back">
        <router-link to="/" class="text-white">Home</router-link> 
    </div>
    <div class="card">
        <h1 class ="card-title">{{title}}
            <slot name="header" ></slot>
        </h1>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string,
    back : boolean
}>()
const title = props.title
document.title = `${title} | Clone of bank`
</script>

<style scoped>

</style>