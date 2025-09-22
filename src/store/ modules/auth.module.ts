import { defineStore } from "pinia";
import { ref, watch } from "vue";
import axios from "axios";
import { error } from "@/utils/error";
import { useMainStore } from '@/store/index';


export const useAuthStore = defineStore("auth",()=> {
    const mainStore = useMainStore();
    //const state = ref <null>(null)
    const token = ref<string | null>(localStorage.getItem("jwt-token"));
    const isAuthenticated = ref(!!token.value);


    function setToken(newToken: string | null) {
        token.value = newToken;
        localStorage.setItem("jwt-token", newToken ?? "" );
        isAuthenticated.value = !!newToken;
    }
    function logout() {
        token.value = null;
        localStorage.removeItem("jwt-token");
         isAuthenticated.value = false;
    }

   async function login(payload : { email: string; password: string }) {
console.log(process.env.VUE_APP_FB_KEY);
       try {
           const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`, {...payload, returnSecureToken: true});
           setToken(response.data.idToken);
        //    console.log(response.data);
        //    console.log('Login successful');
       } catch (e) {
           const err = e as any;
           mainStore.setMessageWithTimeout(error(err.response?.data?.error?.message), 'danger');
           
           //console.log(err);
           throw new Error();
       }
   }
  return {  token, isAuthenticated, setToken, logout, login }
});