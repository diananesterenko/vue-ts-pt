import { defineStore } from "pinia";
import { ref, watch } from "vue";
// import axios from "axios";
// import { error } from "@/utils/error";

export const useMainStore = defineStore("main",()=> {

  type Message = {
  value: string;
  type: string;
  }| null;
const message = ref<Message>(null);
const sidebar= ref<boolean>(false);

function setMessage(newMessage:Message | null){
    message.value = newMessage;
}
function clearMessage(){
  console.log('clear message');
    setMessage(null);
}
function openSidebar(){
    sidebar.value = true;
}
function closeSidebar(){
    sidebar.value = false;
}

function setMessageWithTimeout(value: string, type: string ){
    setMessage({value: value, type: type});
    setTimeout(() => {
        clearMessage();
    }, 5000);
}


return { message, setMessage, clearMessage, setMessageWithTimeout, sidebar, openSidebar, closeSidebar}
})
