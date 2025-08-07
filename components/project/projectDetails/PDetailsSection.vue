<template>
  <section class="ProjectSection">
    <div class="container mx-auto max-w-[1520px] max-2xl:px-5 mb-16 relative text-center">
      <div class="flex gap-6 max-md:flex-col">
        <div class="flex flex-col gap-6">
          <nuxt-link to="/projects/1">
            <div class="group relative">
              <img src="~/assets/img/projects/one/Placeholder Image 1.svg" alt="">
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
          </nuxt-link>
          <nuxt-link to="/projects/2">
            <div class="group relative">
              <div
                class="absolute top-0 left-0 w-full h-full bg-[#000000] items-end p-12 opacity-0 group-hover:opacity-30 transition-all ease-in-out duration-500 flex rounded-[40px]">
              </div>
              <div
                class="absolute top-0 left-0 w-full h-full  items-end p-2 md:p-4 lg:p-7 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 flex">
                <h1 class="text-white text-base sm:text-xl md:text-2xl font-medium !opacity-100">
                  Mövenpick Hotel
                </h1>
              </div>
              <img src="~/assets/img/projects/one/Placeholder Image 2.svg" alt="">
            </div>
          </nuxt-link>
        </div>
        <div class="flex flex-col gap-6">


          <div class="group relative">


            <img src="~/assets/img/projects/one/Placeholder Image 3.svg" alt="">
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


          <div class="group relative">


            <div
              class="absolute top-0 left-0 w-full h-full bg-[#000000] items-end p-12 opacity-0 group-hover:opacity-30 transition-all ease-in-out duration-500 flex rounded-[40px]">
            </div>
            <div
              class="absolute top-0 left-0 w-full h-full  items-end p-2 md:p-4 lg:p-7 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 flex">
              <h1 class="text-white text-base sm:text-xl md:text-2xl font-medium !opacity-100">
                Mövenpick Hotel
              </h1>
            </div>
            <img src="~/assets/img/projects/one/Placeholder Image 4.svg" alt="">
          </div>
        </div>
      </div>


      <button class="gradient-button mt-16 ">
        Load More
      </button>
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