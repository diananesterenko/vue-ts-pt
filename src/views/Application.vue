
<template>
    <AppLoader v-if="loading" />
    <AppPage back title="Application Details" v-else-if="application">
        <p><strong>FIO</strong> : {{ application.fio }}</p>
        <p><strong>Phone</strong> : {{ application.phone }}</p>
        <p><strong>Sum</strong> : {{ formatCurrency(application.sum) }}</p>
        <p><strong>Status</strong> : <AppStatus :type="application.status as 'done' | 'active' | 'pending' | 'cancelled'" /> </p>
        
        <div class="form-control">
            <label for="status">Status</label>
            <select id="status" name="status" v-model="status">
                <option value="done">Done</option>
                <option value="cancelled">Cancelled</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
            </select>
        </div>

        <button class="btn danger" @click="remove">Delete</button>
        <button class="btn" @click="update" v-if="hasChanges">Update</button>
    </AppPage>
    <h3 v-else class="text-center text-white">Application not found</h3>
</template>

<script setup lang="ts">
import AppPage from '@/components/ui/AppPage.vue';
import { useRoute, useRouter } from 'vue-router';
import { useRequestStore } from '@/store/ modules/application.module';
import { ref, onMounted,computed } from 'vue';
import AppLoader from '@/components/ui/AppLoader.vue';
import AppStatus from '@/components/ui/AppStatus.vue';
import { formatCurrency } from '@/utils/currency-formater';

const route = useRoute();
const router = useRouter();
const requestStore = useRequestStore();
const loading = ref(true)
const application = ref<any | null>(null);
const status= ref()
const hasChanges = computed(() => application.value?.status !== status.value)

onMounted(async()=>{
    loading.value = true;
    application.value = await requestStore.loadById(route.params.id as string);
    status.value = application.value?.status;
    loading.value = false;
})
const remove = async () => {
    if(!application.value) return;
    if(window.confirm('Are you sure you want to delete this application?')){
        await requestStore.remove(application.value.id);
        application.value = null;
        router.push('/')
    }
}
const update = async () => {
     const data = { ...application.value, status: status.value, id: route.params.id};
    
    await requestStore.update(data);
    application.value.status = status.value;
    router.push('/')
    // application.value = await requestStore.loadById(route.params.id as string);
}

</script>

<style scoped>

</style>