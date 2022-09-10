<template>
    
    <div v-for="button in buttons" :key="button.name" class="my-10 md:my-0 md:mx-2">
        <router-link :to="button.to" class="relative w-full text-2xl font-medium text-center uppercase md:text-lg"  >
            <p class="after:rounded-md text-center after:bottom-0 after:h-[2px] after:left-2/4 after:absolute hover:after:w-full hover:after:left-0 after:bg-black">
                {{ button.name }}
            </p>
        </router-link>
    </div>

</template>

<script setup lang="ts">
    const buttons = [
        {name: 'Connexion', to: '/'},
        {name: 'Administration', to: '/'},
        {name: 'Agenda', to: '/'},
        {name: 'Récapitulatif', to: '/'},
    ]
</script>

<style scoped>
</style>