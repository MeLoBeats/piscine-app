<template>
    <button @click="useMenu.activeMenu" class="z-20 h-full flex items-center hamburger hamburger--spin" :class="{ 'is-active': useMenu.isActive }" type="button">
        <span class="hamburger-box">
            <span class="hamburger-inner w-3"></span>
        </span>
    </button>
</template>

<script setup lang="ts">
    
    import { ref } from 'vue';

    import { useMenuStore } from "../stores/menu/store"

    const useMenu = useMenuStore()


</script>

<style scoped>

</style>