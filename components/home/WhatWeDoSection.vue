<template>
  <section class="relative ">
    <div class="relative mx-auto max-w-[1520px] px-5">

      <div class="md:hidden">
        <div class="mb-8 md:mb-14">
          <h1 class="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium">
            WHAT WE DO
          </h1>
        </div>
      </div>


      <div class="hidden md:block">
        <WhatWeDoCard v-for="(project, i) in projects" :key="`p_${i}`" :i="i" v-bind="project"
          :targetScale="1 - ((projects.length - i) * 0.05)" />
      </div>

      <div class="md:hidden flex flex-col gap-6">
        <div v-for="(project, i) in projects" :key="`p_${i}`" :i="i" v-bind="project"
          :targetScale="1 - ((projects.length - i) * 0.05)">
          <div class="">
            <div class="flex flex-col relative">
              <div class="shadow-xl rounded-l-[60px] md:rounded-l-[100px] flex flex-col bg-white min-h-[555px] ">
                <div class="w-full md:w-1/2">
                  <img :src="project.src" :alt="project.title"
                    class="object-cover w-full h-full  rounded-tl-[60px] md:rounded-l-[100px]">
                </div>
                <div class="p-11 flex flex-col justify-between items-start w-full md:w-1/2 gap-6 ">
                  <h1 class="font-medium text-primary text-2xl sm:text-3xl md:text-4xl lg:text-6xl">{{ project.number }}
                  </h1>
                  <div>
                    <p class="font-medium text-xl md:text-2xl lg:text-3xl mb-2">{{ project.title }}</p>
                    <p class="font-normal text-lg md:text-xl lg:text-2xl">
                      {{ project.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import INTERIORDESIGN from "../../assets/img/home/whatWeDo/INTERIORDESIGN.png"
import FABRICSMATERIALS from "../../assets/img/home/whatWeDo/FABRICSMATERIALS.png"
import INSTALLATION from "../../assets/img/home/whatWeDo/INSTALLATION.png"
import KITCHENPLANNING from "../../assets/img/home/whatWeDo/KITCHENPLANNING.png"
import HOMEAUTOMATION from "../../assets/img/home/whatWeDo/HOMEAUTOMATION.png"

const projects = [
  {
    number: "1.",
    title: "INTERIOR DESIGN",
    description: "There is a great collection of products for the interior designers of Distretto Design to select from. Together with experience, creativity and original ideas. They visit your space, take measurements and advise you on the choice of materials, suggest solutions according to your budget and come up with those impeccable design details that will highlight the best of your space.",
    src: INTERIORDESIGN,
  },
  {
    number: "2.",
    title: "FABRICS, MATERIALS & FINISHES",
    description: "Regardless of the design you choose, Distretto Design gives you the option of selecting the materials, fabrics and finishes. Pick out that particular color shade you prefer, the best matching material for your space or make up your mind on straight or curved lines, all at the price that suits you.",
    src: FABRICSMATERIALS,
  },
  {
    number: "3.",
    title: "INSTALLATION",
    description: "Distretto Design arranges the transfer and installation of the products to your space, focusing on the details that will accentuate their excellence.",
    src: INSTALLATION,
  },
  {
    number: "4.",
    title: "KITCHEN PLANNING",
    description: "The kitchen today must be a perfect combination of functionality, design and personal taste. At Distretto Design we offer a wide range of the latest kitchens from the leading Italian brands, together with our own expertise and creativity. Our people are always willing to assist you decide on design, materials and finishes at the best possible price.",
    src: KITCHENPLANNING,
  },
  {
    number: "5.",
    title: "HOME AUTOMATION",
    description: "Distretto Design offers a fully integrated home automation system that allows seamless control of lighting, shading, music, climate, and security — all from a single platform, whether through touch panels, a mobile app, or smart scheduling — creating a comfortable, intelligent living experience tailored to every moment. ",
    src: HOMEAUTOMATION,
  },
]

</script>

<style scoped></style>