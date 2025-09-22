import { defineStore } from "pinia";
import { ref, watch } from "vue";
import axios from "../../axios/request";
import { error } from "@/utils/error";
import { useMainStore } from '@/store/index';
import { useAuthStore } from '@/store/ modules/auth.module'; 



export const useRequestStore = defineStore("request",()=> {
    const authStore = useAuthStore();
    const mainStore = useMainStore();
    
    const requests = ref<Array<any>>([]);
    function setRequests(newRequests: any) {
        requests.value = newRequests;
    }
    function addRequest(newRequest: any
    ) {
        requests.value.push(newRequest);
    }

   async function createRequest(payload : { fio: string; phone: string; sum: number }) {
       try {
            const token = authStore.token;
           const response = await axios.post(`/requests.json?auth=${token}`, {...payload});
           addRequest({...payload, id: response.data.name});
           mainStore.setMessageWithTimeout('Apllication created', 'primary');
       } catch (e) {
           const err = e as any;
           mainStore.setMessageWithTimeout(err.message, 'danger');
           
          
           throw new Error();
       }

    }
    async function load() {
        try {
            const token = authStore.token;
           const {data} = await axios.get(`/requests.json?auth=${token}`);
           const requestsArray = Object.keys(data).map(id => ({...data[id], id}));
           setRequests(requestsArray);
       } catch (e) {
           const err = e as any;
           mainStore.setMessageWithTimeout(err.message, 'danger');
           
          
           throw new Error();
       }
    }

    async function loadById(id: string) {
        try {
            const token = authStore.token;
           const {data} = await axios.get(`/requests/${id}.json?auth=${token}`);
              return data          
       } catch (e) {
           const err = e as any;
           mainStore.setMessageWithTimeout(err.message, 'danger');
           
          
           throw new Error();
       }
    }

    async function remove(id: string) {
        try {
            const token = authStore.token;
           await axios.delete(`/requests/${id}.json?auth=${token}`);    
           mainStore.setMessageWithTimeout("Application deleted!", 'primary');       
       } catch (e) {
           const err = e as any;
           mainStore.setMessageWithTimeout(err.message, 'danger');
           
          
           throw new Error();
       }
    }

    async function update(payload: any) {
        try {
            const token = authStore.token;
           await axios.put(`/requests/${payload.id}.json?auth=${token}`, payload); 
           mainStore.setMessageWithTimeout("Application updated!", 'primary');       
       } catch (e) {
           const err = e as any;
           mainStore.setMessageWithTimeout(err.message, 'danger');
           
          
           throw new Error();
       }
    }

    return { requests, setRequests, createRequest, load, loadById, remove, update };
});