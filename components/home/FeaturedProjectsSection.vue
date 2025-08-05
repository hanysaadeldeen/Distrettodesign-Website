<template>
    <section class="Featured-projects bg-SectionBG">
        <div class="container mx-auto max-w-[1520px]  px-5 py-16 md:py-[120px]">
            <div class="flex justify-between items-center  max-sm:flex-col mb-14 gap-4">

                <SectionTitle title="FEATURED PROJECTS" class="text-center uppercase" />
                <button class="gradient-button ">
                    View All Projects
                </button>
            </div>
            <div class="flex max-md:flex-col gap-4 md:gap-6">
                <div class="w-full md:w-[55.94%]  flex flex-col gap-4 md:gap-6">
                    <div class="flex gap-4 md:gap-6">
                        <div class="w-1/2 overflow-hidden relative group">
                            <img src="~/assets/img/home/featured/FEATUREDChair.svg"
                                class="group-hover:scale-110 transition-all duration-300 ease-in-out"
                                alt="FEATUREDChair" loading="lazy">
                            <div
                                class="absolute top-0 left-0 w-full h-full bg-[#000000] items-end p-12 opacity-0 group-hover:opacity-30 transition-all ease-in-out duration-500 flex">
                            </div>
                            <div
                                class="absolute top-0 left-0 w-full h-full  items-end p-2 md:p-4 lg:p-7 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 flex">
                                <h1 class="text-white text-base sm:text-xl md:text-2xl font-medium !opacity-100">
                                    Mövenpick Hotel
                                </h1>
                            </div>
                        </div>
                        <div class="w-1/2 overflow-hidden relative group">
                            <img src="~/assets/img/home/featured/FEATUREDAirbort.svg"
                                class="group-hover:scale-110 transition-all duration-300 ease-in-out"
                                alt="FEATUREDAirbort" loading="lazy">
                            <div
                                class="absolute top-0 left-0 w-full h-full bg-[#000000] items-end p-12 opacity-0 group-hover:opacity-30 transition-all ease-in-out duration-500 flex">
                            </div>
                            <div
                                class="absolute top-0 left-0 w-full h-full  items-end p-2 md:p-4 lg:p-7 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 flex">
                                <h1 class="text-white text-base sm:text-xl md:text-2xl font-medium !opacity-100">
                                    The new King Abdulaziz International Airport
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-hidden relative group">
                        <img src="~/assets/img/home/featured/FEATUREDGreen.svg"
                            class="group-hover:scale-110 transition-all duration-300 ease-in-out" alt="FEATUREDGreen"
                            loading="lazy">
                        <div
                            class="absolute top-0 left-0 w-full h-full bg-[#000000] items-end p-12 opacity-0 group-hover:opacity-30 transition-all ease-in-out duration-500 flex">
                        </div>
                        <div
                            class="absolute top-0 left-0 w-full h-full  items-end p-2 md:p-4 lg:p-7 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 flex">
                            <h1 class="text-white text-base sm:text-xl md:text-2xl font-medium !opacity-100">
                                Haramain High Speed Railway
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-[44.06%] flex flex-col gap-4 md:gap-6 items-stretch">
                    <div class="h-1/2 overflow-hidden relative group">
                        <img src="~/assets/img/home/featured/FEATUREDStation.svg" alt="FEATUREDStation"
                            class="h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
                            loading="lazy">
                        <div
                            class="absolute top-0 left-0 w-full h-full bg-[#000000] items-end p-12 opacity-0 group-hover:opacity-30 transition-all ease-in-out duration-500 flex">
                        </div>
                        <div
                            class="absolute top-0 left-0 w-full h-full  items-end p-2 md:p-4 lg:p-7 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 flex">
                            <h1 class="text-white text-base sm:text-xl md:text-2xl font-medium !opacity-100">
                                Dallah Albaraka
                            </h1>
                        </div>
                    </div>
                    <div class="h-1/2 overflow-hidden relative group">
                        <img src="~/assets/img/home/featured/FEATUREDHotel.svg" alt="FEATUREDHotel"
                            class="h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
                            loading="lazy">
                        <div
                            class="absolute top-0 left-0 w-full h-full bg-[#000000] items-end p-12 opacity-0 group-hover:opacity-30 transition-all ease-in-out duration-500 flex">
                        </div>
                        <div
                            class="absolute top-0 left-0 w-full h-full  items-end p-2 md:p-4 lg:p-7 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 flex">
                            <h1 class="text-white text-base sm:text-xl md:text-2xl font-medium !opacity-100">
                                King Fahd International Airport
                            </h1>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>
</template>

<script setup lang="ts">


// 16:9

</script>

<style scoped>
.group,
img {
    border-radius: 40px;
    cursor: pointer;
}

@media (max-width:768px) {

    .group,
    img {
        border-radius: 20px;
    }
}
</style>