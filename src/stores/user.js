import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

import {useSessionStore} from '@/stores/sessions'


import { useRouter } from "vue-router"


export const useUserStore = defineStore('user', () => {
  const router = useRouter();
  const session = useSessionStore();

  const isConnected = ref(false);

  function setConnected() {
    if(session.data.token){
      isConnected.value = true;
    }
  }  
  function disconnect() {
    isConnected.value = false;
  }
  return { isConnected, setConnected, disconnect }
}, {
  persist: true,
})
