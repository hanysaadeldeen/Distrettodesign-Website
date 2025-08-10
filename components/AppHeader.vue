<template>
    <header class="relative  max-2xl:px-6 py-4 md:py-6 text-black bg-white " :dir="locale === 'ar' ? 'rtl' : 'ltr'"
        :class="[{ 'overflow-hidden': isSideBar }]">
        <div class="mx-auto max-w-[1510px] ">
            <div class="relative z-40">
                <div class="flex items-center justify-between ">
                    <nuxt-link :to="localePath('index')" class="block relative ">
                        <img src="~/assets/img/Logo.svg" class="w-[112px] h-[48px] lg:w-[189px] lg:h-[64px] relative "
                            alt="DigitalOGO" width="189px" height="64px" loading="eager" fetchpriority="high" />
                    </nuxt-link>
                    <nav class="relative hidden lg:block">
                        <div class="blob bg-primary" aria-hidden="true"></div>
                        <ul class="flex gap-10">
                            <li :class="adjustedPath === '/projects' ? 'active' : ''">
                                <nuxt-link :to="localePath('projects')">
                                    Projects
                                </nuxt-link>
                            </li>
                            <li :class="adjustedPath === '/about' ? 'active' : ''">
                                <nuxt-link :to="localePath('about')">
                                    About
                                </nuxt-link>
                            </li>

                            <li :class="adjustedPath === '/careers' ? 'active' : ''">
                                <nuxt-link :to="localePath('careers')">
                                    Careers
                                </nuxt-link>
                            </li>
                            <li :class="adjustedPath === '/contact' ? 'active' : ''">
                                <nuxt-link :to="localePath('contact')">
                                    Contact
                                </nuxt-link>
                            </li>


                        </ul>
                    </nav>
                    <div class="hidden justify-between gap-10 lg:flex">
                        <!-- <button @click="setLocale(locale === 'en' ? 'ar' : 'en')" class="text-base font-medium">
                            {{ locale === "en" ? "العربية" : "English" }}
                        </button> -->
                        <nuxt-link :to="localePath('contact')">
                            <button class="gradient-button">
                                Get our service
                            </button>
                        </nuxt-link>
                    </div>
                    <div class="lg:hidden text-2xl cursor-pointer sm:text-3xl">
                        <i class="fa-solid fa-bars-staggered " :class="{ hidden: isSideBar }" @click="toggleSidebar" />
                        <i class="fa-solid fa-xmark text-white" :class="{ hidden: !isSideBar }"
                            @click="toggleSidebar" />
                    </div>

                </div>
            </div>
            <transition :name="transitionName">
                <div v-if="isSideBar"
                    class="sideBar fixed inset-x-0 top-0 z-20 flex h-[calc(100dvh)] w-full flex-col items-start px-11 transition-all sm:px-7 lg:hidden"
                    :class="[
                        {
                            'right-0': locale === 'ar',
                            'left-0': locale !== 'ar',
                        },
                    ]">
                    <div class="pt-[136px]">
                        <nav class="mt-4 inline-block w-full">
                            <ul class="flex flex-col gap-5">
                                <li :class="[
                                    adjustedPath === '/projects' ? 'active' : '',
                                    'text-white hover:text-primary',
                                ]">
                                    <nuxt-link :to="localePath('projects')" @click="isSideBar = !isSideBar"
                                        class="w-full">
                                        Projects
                                    </nuxt-link>
                                </li>
                                <li :class="[
                                    adjustedPath === '/about' ? 'active' : '',
                                    'text-white ',
                                ]">
                                    <nuxt-link :to="localePath('about')" @click="isSideBar = !isSideBar" class="w-full">
                                        About
                                    </nuxt-link>
                                </li>

                                <li :class="[
                                    adjustedPath === '/careers' ? 'active' : '',
                                    'text-white ',
                                ]">
                                    <nuxt-link :to="localePath('careers')" @click="isSideBar = !isSideBar"
                                        class="w-full">
                                        Careers
                                    </nuxt-link>
                                </li>
                                <li :class="[
                                    adjustedPath === '/contact' ? 'active' : '',
                                    'text-white ',
                                ]">
                                    <nuxt-link :to="localePath('contact')" @click="isSideBar = !isSideBar"
                                        class="w-full">
                                        Contact
                                    </nuxt-link>
                                </li>

                            </ul>
                        </nav>
                        <!-- <div class="mt-5 flex flex-col items-start justify-between gap-10">
                            <button @click="setLocale(locale === 'en' ? 'ar' : 'en')"
                                class="text-base font-normal text-white hover:text-[#fff422]">
                                {{ locale === "en" ? "العربية" : "English" }}
                            </button>
                        </div> -->
                        <div class="mt-5 justify-between gap-10">
                            <nuxt-link :to="localePath('contact')">
                                <button class="gradient-button mobile">
                                    Get our service
                                </button>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </header>
</template>

<script setup lang="ts">

// import AOS from "aos";
// import "aos/dist/aos.css";
// onMounted(() => {
//     AOS.init({
//         duration: 600,
//         once: true,
//     })
// })
import { useDebounceFn } from "@vueuse/core";
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
const isSideBar = ref<boolean>(false);
const transitionName = computed(() =>
    locale.value === "ar" ? "sidebar-ar" : "sidebar-en",
);
const route = useRoute();

// Optimize sidebar toggle function
const toggleSidebar = () => {
    isSideBar.value = !isSideBar.value;
};

// Add scroll lock functionality with debounce
const debouncedScrollLock = useDebounceFn((value: boolean) => {
    document.body.style.overflow = value ? "hidden" : "";
}, 100);

watch(isSideBar, (newValue) => {
    debouncedScrollLock(newValue);
});

// Close sidebar on scroll with debounce
const debouncedScrollHandler = useDebounceFn(() => {
    if (isSideBar.value) {
        isSideBar.value = false;
    }
}, 100);

onMounted(() => {
    window.addEventListener("scroll", debouncedScrollHandler);
});


const getPathWithoutLocale = (path: string) => {
    const segments = path.split("/");
    if (segments[1] && segments[1].length === 2) {
        return `/${segments.slice(2).join("/")}`;
    }
    return path;
};

const adjustedPath = computed(() => getPathWithoutLocale(route.path));
</script>

<style scoped>
a {
    text-decoration: none;
}

ul li {
    font-weight: 400;
    font-size: 24px;
    display: inline-block;
    position: relative;
    list-style: none;
    width: fit-content;
    cursor: pointer;
    transition: color 0.3s ease;
    will-change: color;
    line-height: 33.6px;
}

ul li a,
ul li {
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
}

ul li:hover {
    color: #A36316;
}

ul li.active {
    color: #A36316;
}

.sideBar {
    background: linear-gradient(to right, #0a0911, #0a0911f5);
    opacity: 0.8;
    will-change: transform;
}

.sideBar nav ul li:hover {
    color: #A36316;
}

.sidebar-en-enter-active,
.sidebar-en-leave-active,
.sidebar-ar-enter-active,
.sidebar-ar-leave-active {
    transition: all 0.3s ease;
    will-change: transform, opacity;
}

.sidebar-en-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}

.sidebar-en-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.sidebar-ar-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.sidebar-ar-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
</style>
