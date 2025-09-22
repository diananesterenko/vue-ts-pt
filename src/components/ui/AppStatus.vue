<template>
   <span :class="['badge', className]">
        {{ text }}
   </span>
</template>

<script setup lang="ts">
import { ref ,watch} from 'vue';
const classesMap ={
    active: 'primary',
    pending: 'warning',
    done: 'primary',
    cancelled: 'danger'
}
const textMap={
    active: 'Active',
    pending: 'Pending',
    done: 'Done',
    cancelled: 'Cancelled'
}
const props = defineProps<{
    type: 'active' | 'pending' | 'done' | 'cancelled'
}>()
const className = ref(classesMap[props.type])
const text = ref(textMap[props.type])

watch(props, val=>{
    className.value = classesMap[val.type]
    text.value = textMap[val.type]
})
</script>

<style scoped>

</style>