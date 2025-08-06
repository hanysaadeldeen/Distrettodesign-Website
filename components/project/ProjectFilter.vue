<template>
    <div class="ProjectFilter container mx-auto max-w-[1520px] px-5 mb-16 relative mt-24 lg:mt-40">
        <Swiper slidesPerView="auto" :spaceBetween="15" :breakpoints="{

            640: {
                spaceBetween: 20
            },
            1024: {
                spaceBetween: 35
            }
        }" :modules="modules" class="mySwiper">
            <SwiperSlide v-for="project in Projects" :class="FaqsFilter === project.title && 'active'" :key="project.id"
                @click="FaqsFilter = project.title">
                {{ project.title }}
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const modules = [Pagination];
const FaqsFilter = ref("Interior Design");


const Projects = [
    {
        id: 1,
        title: "All",
    },
    {
        id: 2,
        title: "Interior Design",
    },
    {
        id: 3,
        title: "Fabrics, Materials & Finishes",
    },
    {
        id: 4,
        title: "Kitchen Planning",
    },
    {
        id: 5,
        title: "Installation",
    },
    {
        id: 6,
        title: "Home Automation",
    },
]

</script>

<style scoped>
.swiper-slide {

    display: block;
    font-size: 28px;
    font-weight: 400;
    cursor: pointer;
    color: #737373;
    transition: all 0.3s ease;
    white-space: nowrap;
    width: fit-content;
}

@media (max-width: 768px) {
    .swiper-slide {
        font-size: 14px;
    }
}

.swiper-slide.active {
    color: black;
}

.swiper-slide:hover {
    color: black;
}
</style>