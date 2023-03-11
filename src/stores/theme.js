import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(0)
  function setTheme(item) {
    theme.value =item
  }

  return { user, setUser }
})
