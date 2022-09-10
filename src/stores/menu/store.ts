import { defineStore } from "pinia";

import { ref } from "vue";

export const useMenuStore = defineStore("menu", () => {
  // HAMBURGER MENU
  const isActive = ref<boolean>(false);

  function activeMenu() {
    isActive.value = !isActive.value;
  }

  return {
    isActive,
    activeMenu,
  };
});
