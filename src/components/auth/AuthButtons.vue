<template>
    
    <div v-for="button in buttons" :key="button.name" class="my-10 md:my-0 md:mx-2">
        <router-link :to="button.to" class="relative w-full text-2xl font-medium text-center uppercase md:text-lg"  >
            <p v-if="!button.requiresAuth" class="after:rounded-md text-center after:bottom-0 after:h-[2px] after:left-2/4 after:absolute hover:after:w-full hover:after:left-0 after:bg-black">
                {{ button.name }}
            </p>
        </router-link>
    </div>

</template>

<script setup lang="ts">
    const buttons = [
        {name: 'Connexion', to: '/'},
        {name: 'Administration', to: '/', requiresAuth: true},
        {name: 'Agenda', to: '/', requiresAuth: true},
        {name: 'Récapitulatif', to: '/', requiresAuth: true},
    ]
</script>

<style scoped>
</style>