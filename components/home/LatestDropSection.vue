<template>
    <section class="LatestDrop bg-SectionBG py-16 md:py-[120px] relative overflow-hidden">
        <div class="container mx-auto max-w-[1410px] max-xl:px-5 mb-8 md:mb-16">
            <SectionTitle title="LATEST DROP" class="uppercase" />
        </div>
        <div class="absolute left-0 w-screen 2xl:pl-[calc((100%-1410px)/2)] max-md:pr-5 ">
            <LatestDropSwiper />
        </div>
        <LatestDropSwiper class="visability" />

    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.visability {
    visibility: hidden;
}
</style>