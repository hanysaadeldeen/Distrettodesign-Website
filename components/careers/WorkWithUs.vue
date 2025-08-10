<template>

    <section class="workWithUs  relative">
        <div class="w-screen pl-8 2xl:pl-[calc((100%-1520px)/2)]">
            <div class="relative">
                <div class="absolute hidden 2xl:block -top-[48px] 2xl:-top-[63px] -left-8 2xl:-left-[63px] ">
                    <img src="~/assets/img/career/careersPattern.svg" alt="careersPattern">
                </div>
                <div
                    class=" bg-primary rounded-l-[60px]  lg:rounded-l-[100px]  pl-8 py-8 sm:pl-14 sm:py-14  md:py-20 xl:py-32  xl:pl-[132px] relative">
                    <div class="relative  text-white w-full md:max-w-[922px]">
                        <SectionTitle title="WHY WORK WITH US?" class=" uppercase mb-4 md:mb-6 lg:!leading-[73px] " />
                    </div>
                    <div class="mt-6 lg:mt-10 xl:mt-40">
                        <SwiperWorkWithUs />

                    </div>
                </div>
            </div>

        </div>
    </section>

</template>

<script setup lang="ts">

</script>

<style scoped></style>