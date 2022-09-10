<template>
    <nav class="flex items-center justify-between w-11/12 h-full mx-auto">
        <h1 class="text-xl font-semibold">Piscine du ...</h1>
        <div class="flex items-center h-full md:hidden">
            <Hamburger />
        </div>
        <div class="hidden md:flex">
            <div class="flex items-center h-full">
                <div class="p-3 md:flex rounded-xl">
                    <AuthButtons />
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import AuthButtons from './auth/AuthButtons.vue';
import Hamburger from './Hamburger.vue';

</script>

<style scoped>

</style>