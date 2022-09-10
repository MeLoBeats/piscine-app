<template>
  <div>
    <Transition name="slide">
      <component :is="ResponsiveAuthButtonsVue" v-if="useMenu.isActive" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import ResponsiveAuthButtonsVue from "../components/auth/ResponsiveAuthButtons.vue";
import { useMenuStore } from "../stores/menu/store";

  const useMenu = useMenuStore()
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease-out;
}
.slide-enter-to {
  position: absolute;
  right: 0;
}
.slide-enter-from {
  position: absolute;
  right: -100%;
}
.slide-leave-to {
  position: absolute;
  right: -100%;
}
.slide-leave-from {
  position: absolute;
  right: 0;
}
</style>