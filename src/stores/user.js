import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref(0)
  function setUser(item) {
    user.value =item
  }

  return { user, setUser }
})
