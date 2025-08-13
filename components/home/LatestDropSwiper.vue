<template>
    <div class="pl-5">
        <swiper :modules="[Pagination]" class="mySwiper rounded-l-[40px]" :slides-per-view="'auto'"
            @swiper="onSwiperInit">
            <swiper-slide v-for="(insight, index) in Insights" :key="index" class="w-fit max-w-[582px] rounded-[40px]">
                <div class="h-[250px] md:h-[366px] max-h-[366px] rounded-[40px] sm:px-3 relative ">
                    <img :src="insight.img" :alt="insight.title" class="w-full  h-full object-cover rounded-[40px]"
                        loading="lazy" />
                </div>
            </swiper-slide>
        </swiper>
        <div class="mt-6 md:mt-10 flex gap-4 md:gap-6 ">
            <div class="rounded-full border-[1.8px] cursor-pointer group w-[52px] h-[52px] flex justify-center items-center p-4 md:p-5"
                :class="[
                    'border-primary hover:border-black transition-all duration-300 ease-in-out',
                    isBeginning ? 'opacity-70 border-[#a36416b6] cursor-not-allowed' : ''
                ]" @click="!isBeginning && swiperInstance?.slidePrev()">

                <i
                    class="fa-solid fa-arrow-left text-primary group-hover:text-black transition-all duration-300 ease-in-out"></i>
            </div>
            <div class="rounded-full border-[1.8px] cursor-pointer group w-[52px] h-[52px] flex justify-center items-center  p-4 md:p-5"
                :class="[
                    'border-primary hover:border-black transition-all duration-300 ease-in-out',
                    isEnd ? 'opacity-70 border-[#a36416b6] cursor-not-allowed' : ''
                ]" @click="!isEnd && swiperInstance?.slideNext()">

                <i
                    class="fa-solid fa-arrow-right text-primary group-hover:text-black transition-all duration-300 ease-in-out"></i>
            </div>
        </div>
    </div>
    <!-- <div>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.46223 7.04657H15.1844C15.3842 7.04657 15.5482 7.11065 15.6764 7.23883C15.8046 7.36701 15.8687 7.53099 15.8687 7.73078C15.8687 7.93057 15.8046 8.09455 15.6764 8.22272C15.5482 8.3509 15.3842 8.41499 15.1844 8.41499H2.46223L7.46586 13.3967C7.59404 13.5395 7.65813 13.7035 7.65813 13.8887C7.65813 14.0739 7.59039 14.2342 7.45491 14.3697C7.31944 14.5051 7.15911 14.5729 6.97392 14.5729C6.78872 14.5729 6.62474 14.5088 6.48197 14.3806L0.324073 8.22272C0.195898 8.07995 0.13181 7.91597 0.13181 7.73078C0.13181 7.54558 0.195898 7.3816 0.324073 7.23883L6.48197 1.08094C6.62474 0.95276 6.78872 0.888672 6.97392 0.888672C7.15911 0.888672 7.31944 0.956409 7.45491 1.09188C7.59039 1.22736 7.65813 1.38769 7.65813 1.57288C7.65813 1.75808 7.59404 1.92206 7.46586 2.06483L2.46223 7.04657Z"
                fill="#A36316" />
        </svg>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.5378 7.04657H0.815558C0.615769 7.04657 0.451786 7.11065 0.323611 7.23883C0.195435 7.36701 0.131348 7.53099 0.131348 7.73078C0.131348 7.93057 0.195435 8.09455 0.323611 8.22272C0.451786 8.3509 0.615769 8.41499 0.815558 8.41499H13.5378L8.53414 13.3967C8.40596 13.5395 8.34187 13.7035 8.34187 13.8887C8.34187 14.0739 8.40961 14.2342 8.54509 14.3697C8.68056 14.5051 8.84089 14.5729 9.02608 14.5729C9.21128 14.5729 9.37526 14.5088 9.51803 14.3806L15.6759 8.22272C15.8041 8.07995 15.8682 7.91597 15.8682 7.73078C15.8682 7.54558 15.8041 7.3816 15.6759 7.23883L9.51803 1.08094C9.37526 0.95276 9.21128 0.888672 9.02608 0.888672C8.84089 0.888672 8.68056 0.956409 8.54509 1.09188C8.40961 1.22736 8.34187 1.38769 8.34187 1.57288C8.34187 1.75808 8.40596 1.92206 8.53414 2.06483L13.5378 7.04657Z"
                fill="#A36316" />
        </svg>

    </div> -->

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'


const swiperInstance = ref<any>(null)
const isBeginning = ref(true)
const isEnd = ref(false)
const onSwiperInit = (swiper: any) => {
    swiperInstance.value = swiper

    // أول تحديث
    isBeginning.value = swiper.isBeginning
    isEnd.value = swiper.isEnd

    // كل ما يتحرك السلايدر
    swiper.on('slideChange', () => {
        isBeginning.value = swiper.isBeginning
        isEnd.value = swiper.isEnd
    })
}
import latestOne from '../../assets/img/home/latestDrop/latestOne.svg'
import latestTwo from '../../assets/img/home/latestDrop/latestTwo.svg'
import latestThree from '../../assets/img/home/latestDrop/latestThree.svg'

const Insights = [
    {
        id: 1,
        img: latestOne,
        title: "latestOne"
    },
    {
        id: 2,
        img: latestTwo,
        title: "latestTwo"
    },
    {
        id: 3,
        img: latestThree,
        title: "latestThree"
    },
    {
        id: 4,
        img: latestTwo,
        title: "latestTwo"
    },
]

</script>

<style scoped></style>