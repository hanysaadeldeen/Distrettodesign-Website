<template>
    <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium  ">
        {{ title }}</h1>
</template>

<script setup lang="ts">


defineProps({
    title: {
        type: String,
    }
})

</script>

<style scoped></style>