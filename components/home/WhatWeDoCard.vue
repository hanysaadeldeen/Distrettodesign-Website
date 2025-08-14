<template>

    <div ref="container" class="WhatWeDoCard  h-screen sticky top-[30px]  ">
        <h1 :class="i === 0 ? 'visible' : 'hide'"
            class="uppercase text-2xl sm:text-3xl md:text-4xl pb-[56px] lg:text-6xl font-medium">
            WHAT WE DO
        </h1>
        <div class="flex flex-col relative " :class="i !== 0 && 'pt-[56]px'" :style="{ top: `calc( ${i * 30}px)` }">
            <div class="shadow-xl rounded-l-[100px] flex max-md:flex-col bg-white min-h-[555px] ">
                <div class="w-full md:w-1/2">
                    <img :src="src" :alt="title" class="object-cover w-full h-full  md:rounded-l-[100px]">
                </div>
                <div class="p-11 flex flex-col justify-between items-start w-full md:w-1/2 gap-14 md:gap-20">
                    <h1 class="font-medium text-primary text-2xl sm:text-3xl md:text-4xl lg:text-6xl">{{ number }}</h1>
                    <div>
                        <p class="font-medium text-xl md:text-2xl lg:text-3xl mb-2">{{ title }}</p>
                        <p class="font-normal text-lg md:text-xl lg:text-2xl">
                            {{ description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap'

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
const props = defineProps({
    i: Number,
    number: String,
    title: String,
    description: String,
    src: String,
    targetScale: Number
})

// const container = ref(null)
// const image = ref(null)

// onMounted(() => {
//     gsap.fromTo(
//         image.value,
//         { scale: 2 },
//         {
//             scale: 1,
//             scrollTrigger: {
//                 trigger: container.value,
//                 start: 'top bottom',
//                 end: 'top top',
//                 scrub: true
//             }
//         }
//     )

//     gsap.to(container.value, {
//         // scale: props.targetScale,
//         scrollTrigger: {
//             trigger: container.value,
//             start: 'top bottom',
//             end: 'top top',
//             scrub: true
//         }
//     })
// })
</script>



<style scoped>
.hide {
    visibility: hidden;
}
</style>