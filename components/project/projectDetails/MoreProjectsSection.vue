<template>
    <section>
        <div class="container mx-auto max-w-[1328px] max-2xl:px-5">
            <SectionTitle title="MORE PROJECTS" class="text-center mb-10 md:mb-14  " />
            <div class="flex max-md:flex-col gap-6">
                <div class="group relative rounded-[40px]">
                    <img src="~/assets/img/projects/ProjectDetails/more.svg" class="max-w-full rounded-[40px]"
                        alt="more.svg">
                    <div
                        class="absolute top-0 left-0 w-full h-full bg-[#000000] items-end p-12 opacity-0 group-hover:opacity-30 transition-all ease-in-out duration-500 flex rounded-[40px]">
                    </div>
                    <div
                        class="absolute top-0 left-0 w-full h-full  items-end p-2 md:p-4 lg:p-7 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 flex">
                        <h1 class="text-white text-base sm:text-xl md:text-2xl font-medium !opacity-100">
                            Mövenpick Hotel
                        </h1>
                    </div>
                </div>
                <div class="group relative rounded-[40px]">
                    <img src="~/assets/img/projects/ProjectDetails/more2.svg" class="max-w-full" alt="more2.svg">
                    <div
                        class="absolute top-0 left-0 w-full h-full bg-[#000000] items-end p-12 opacity-0 group-hover:opacity-30 transition-all ease-in-out duration-500 flex rounded-[40px]">
                    </div>
                    <div
                        class="absolute top-0 left-0 w-full h-full  items-end p-2 md:p-4 lg:p-7 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 flex">
                        <h1 class="text-white text-base sm:text-xl md:text-2xl font-medium !opacity-100">
                            Mövenpick Hotel
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.group {
    cursor: pointer;
}
</style>