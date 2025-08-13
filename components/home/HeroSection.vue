<template>
    <div class="HeroSection  h-[calc(100vh-104px)] md:h-[calc(100vh-120px)] lg:h-[calc(100vh-152px)]">
        <div class="flex justify-between flex-col h-full">
            <div class="max-w-[1688px] mx-auto  overflow-hidden w-full   h-full">
                <h1
                    class="text-4xl sm:text-5xl md:text-7xlmax-xl:px-5 lg:text-[80px] text-white pt-16 lg:pt-[110px] lg:!leading-[90px] font-semibold ">
                    DISTRETTO <br> DESIGN</h1>
            </div>
            <div
                class="relative ml-auto bg-white pt-6 px-6 lg:pt-10 lg:px-10 rounded-tl-[24px] md:rounded-tl-[36px] lg:rounded-tl-[50px] w-fit flex">
                <div class="absolute bottom-0 -left-[90px]">
                    <img src="~/assets/img/home/heroSection/test.svg" class="" alt="homeArrow">
                </div>
                <nuxt-link :to="localePath('projects')">
                    <div
                        class=" relative  bg-primary hover:bg-black transition-all duration-300 ease-in-out cursor-pointer rounded-l-[24px] md:rounded-l-[36px] lg:rounded-l-[50px] w-fit py-6 px-16 lg:py-9 lg:px-40">
                        <div>
                            <img src="~/assets/img/home/heroSection/homeArrow.svg"
                                class="animate-translateXLoop max-md:size-14 md:size-20 lg:size-28" alt="homeArrow">
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

</script>

<style scoped>
.HeroSection {
    background-image: url("../../assets/img/home/heroSection/HeroImg.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


@keyframes translateXLoop {

    0%,
    100% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(10px);
    }
}

.animate-translateXLoop {
    animation: translateXLoop 1s alternate infinite;
}
</style>