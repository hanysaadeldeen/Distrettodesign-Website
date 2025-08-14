<template>
  <section class="relative">
    <div class="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-70 ">
    </div>
    <div class="container mx-auto max-w-[1328px] max-xl:px-5 py-14 lg:py-20 xl:py-[90px] relative z-20">


      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-11 text-white ">
        <div
          class="flex flex-col py-8 md:py-14 px-2 cursor-pointer rounded-3xl md:rounded-[40px] hover:bg-primary transition-all ease-in-out duration-300"
          v-for="value in Values" :key="value.id">

          <div class="rounded-3xl bg-secondary flex items-center justify-center w-fit mx-auto p-4 md:p-5">
            <img :src="value.icons" :alt="value.title" class="max-md:max-w-[32px]">
          </div>
          <div class="max-w-[408px] mx-auto mt-8 md:mt-12">
            <h1 class="mb-2 md:mb-4 font-medium text-xl md:text-2xl lg:text-3xl text-center">{{ value.title }}</h1>
            <p class="text-lg md:text-xl lg:text-2xl font-normal text-center">{{ value.description }}</p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">

import Timeless from "../../assets/img/about/Values/Time.svg"
import Craft from "../../assets/img/about/Values/Craft.svg"
import Vision from "../../assets/img/about/Values/Vision.svg"
import Consistency from "../../assets/img/about/Values/Consistency.svg"
import Global from "../../assets/img/about/Values/Global.svg"
import Details from "../../assets/img/about/Values/Details.svg"

const Values = [
  {
    id: 1,
    title: "Timeless by Design",
    description: "We create interiors that outlast trends — elegant today, iconic tomorrow.",
    icons: Timeless
  },
  {
    id: 2,
    title: "Craft with Purpose",
    description: "Every piece we select is rooted in quality, artistry, and meaning.",
    icons: Craft
  },
  {
    id: 3,
    title: "Your Vision, First",
    description: "We create interiors that outlast trends — elegant today, iconic tomorrow.",
    icons: Vision
  },
  {
    id: 4,
    title: "Consistency You Can Trust",
    description: "From first sketch to final delivery, we hold ourselves to the highest standards.",
    icons: Consistency
  },
  {
    id: 5,
    title: "Global Excellence, Local Care",
    description: "We bring the world’s best design to your doorstep",
    icons: Global
  },
  {
    id: 6,
    title: "Detail is Everything",
    description: "We obsess over the smallest touches because they define the entire space.",
    icons: Details
  }
]

</script>

<style scoped>
section {
  background-image: url("../../assets/img/about/Values/values.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>