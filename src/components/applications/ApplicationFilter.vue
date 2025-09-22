<template>
    <div class="filter">
        <div class="form-control">
           <input type="text" placeholder="Start searching name..."  v-model="name" />
        </div>
        <div class="form-control">
            <select v-model="status">
                <option disabled selected>Select status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="done">Done</option>
                <option value="cancelled">Cancelled</option>
            </select>
        </div>
        <button class="btn warning" v-if="isActive" @click="reset"> Clear</button>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
const name = ref('')
const status = ref('')
const emits = defineEmits<{
    (e: 'update:modelValue', value: { name: string; status: string }): void
}>()
const props = defineProps<{
  modelValue: { name: string; status: string }
}>()

watch([name, status], values => {
   
    emits('update:modelValue', {name: values[0], status: values[1]})
})

const isActive = computed(() => status.value || name.value)
const reset = () => {
    name.value = ''
    status.value = ''
}
</script>

<style scoped>

</style>