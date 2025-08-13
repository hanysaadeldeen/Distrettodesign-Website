<template>
    <section class="ProjectCTA overflow-hidden">
        <div class="w-screen pr-8 2xl:pr-[calc((100%-1410px)/2)]">
            <div
                class="imgCta  rounded-r-[60px]  lg:rounded-r-[100px] pr-5 py-8 sm:pr-14 sm:py-14 md:pr-20 md:py-20 xl:py-32max-xl:px-5 2xl:px-[calc((100%-1410px))] relative">
                <div
                    class="absolute top-0 left-0  rounded-r-[60px]  lg:rounded-r-[100px] w-full h-full bg-[#000000] opacity-50 transition-all ease-in-out duration-500 z-10">
                </div>
                <div class="relative z-20 text-white w-full md:max-w-[922px]">
                    <SectionTitle title="READY TO TURN AMBITION INTO ARCHITECTURE?"
                        class=" uppercase mb-4 md:mb-6 lg:!leading-[73px] " />
                    <p class="text-base md:text-xl lg:text-3xl font-normal w-full text-white">
                        Whether you're designing a palace, airport, or something uniquely yours — Destritto is your
                        partner in creating environments that leave a legacy.
                    </p>
                    <button class="gradient-buttonTwo   mt-4 sm:mt-8 lg:mt-12">Start Your project</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.imgCta {
    background-image: url("../../../assets/img/projects/ProjectDetails/projectDetails.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>