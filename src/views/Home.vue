<template>
  <AppLoader v-if="loading" />
  <AppPage v-else title="List of applications" :back="false">
    <template #header>
      <button class="btn primary" @click="modal = true">New Application</button>
    </template>
    <ApplicationFilter v-model="filter" />
    <ApplicationTable :applications="applications" />

    <teleport to="body">
      <AppModal v-if="modal" title="Create Application" @close="modal = false" >
       <ApplicationModal @created="modal = false"></ApplicationModal>
      </AppModal>
    </teleport>
    
  </AppPage>
</template>

<script setup lang="ts">
import AppPage from '@/components/ui/AppPage.vue';
import ApplicationTable from '@/components/applications/ApplicationTable.vue';
import AppModal from '@/components/ui/AppModal.vue';
import ApplicationModal from '@/components/applications/ApplicationModal.vue';
import { computed,ref, onMounted, watch } from 'vue';
import { useRequestStore } from '@/store/ modules/application.module';
import AppLoader from '@/components/ui/AppLoader.vue';
import ApplicationFilter from '@/components/applications/ApplicationFilter.vue';

const requestStore = useRequestStore();

const modal = ref(false) 
const loading = ref(false)
const filter = ref<{ name: string; status: string }>({ name: '', status: '' });
const close = () => {
  modal.value = false
}
const applications = computed(() => requestStore.requests
  .filter(appl => {
    if(filter.value.name){
      return appl.fio.toLowerCase().includes(filter.value.name.toLowerCase())
    }
    return appl
  })
  .filter(appl => {
    if(filter.value.status){
      return filter.value.status === appl.status
    }
    return appl
  })
)


onMounted(async () => {
  loading.value = true;
  await requestStore.load();
  loading.value = false;
});



</script> 