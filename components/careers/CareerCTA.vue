<template>
    <section class="CareerCTA overflow-hidden">
        <div class="w-screen pl-8 2xl:pl-[calc((100%-1410px)/2)] px-5">
            <div
                class="imgCta  rounded-l-[60px]  lg:rounded-l-[100px] pr-5 pl-10 py-8 sm:pl-14 sm:py-14 md:pl-20 md:py-20 xl:py-32  xl:px-[132px] relative">
                <div
                    class="absolute top-0 left-0  rounded-l-[60px]  lg:rounded-l-[100px] w-full h-full bg-[#000000] opacity-50 transition-all ease-in-out duration-500 z-10">
                </div>
                <div class="relative z-20 text-white w-full md:max-w-[1041px] ">
                    <SectionTitle title="YOUR FIRST STEP TOWARD A CREATIVE FUTURE STARTS HERE"
                        class=" uppercase mb-4 md:mb-6 lg:!leading-[73px] " />
                    <p
                        class="md:max-w-[917px] text-base md:text-xl lg:text-3xl font-normal w-full lg:!leading-[44.8px]  text-white">
                        Be part of a passionate team shaping timeless spaces with vision, craftsmanship, and creativity.
                    </p>
                    <div class="flex gap-4 max-md:flex-col ">
                        <nuxt-link to="/contact">
                            <button class="gradient-buttonTwo   mt-4 sm:mt-8 lg:mt-12">Contact Us</button>
                        </nuxt-link>
                        <a href="http://wa.me/+966126829184" target="_blank">
                            <button class="gradient-buttonTwo  w-full sm:mt-8 lg:mt-12">Send Your CV To WhatsApp
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.imgCta {
    background-image: url("../../assets/img/career/careerCta.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>