<template>
    <div class="absolute top-0 w-screen h-screen bg-orange-200">
        <div class="flex flex-col items-center w-11/12 mx-auto">
            <div class="p-3 mt-10 rounded-xl">
                <AuthButtons />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AuthButtons from "./AuthButtons.vue";

</script>

<style scoped>
</style>