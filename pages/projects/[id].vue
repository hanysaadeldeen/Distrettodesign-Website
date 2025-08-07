<template>
    <main class="relative">
        <!-- هذا هو السكشن اللي هيحتوي العناصر والمحتوى -->
        <div class="relative flex ">
            <!-- عنصر السوشيال sticky -->
            <div class="sticky top-[210px] left-3 2xl:left-[78px] bottom-0  w-fit h-fit z-20 ">
                <div class="flex flex-col gap-6  rounded items-center ">
                    <div>
                        <img src="~/assets/img/projects/ProjectDetails/social/share.svg" alt="share.svg">
                    </div>
                    <div
                        class="rounded-full border  border-black p-2 flex justify-center items-center size-12 cursor-pointer group ">
                        <img src="~/assets/img/projects/ProjectDetails/social/whats.svg"
                            class="group-hover:scale-110 transition-all duration-300 ease-in-out" alt="share.svg">
                    </div>
                    <div
                        class="rounded-full border  border-black p-2 flex justify-center items-center size-12 cursor-pointer group ">
                        <img src="~/assets/img/projects/ProjectDetails/social/faceBook.svg"
                            class="group-hover:scale-110 transition-all duration-300 ease-in-out" alt="share.svg">
                    </div>
                    <div
                        class="rounded-full border  border-black p-2 flex justify-center items-center size-12 cursor-pointer group ">
                        <img src="~/assets/img/projects/ProjectDetails/social/instagram.svg"
                            class="group-hover:scale-110 transition-all duration-300 ease-in-out" alt="share.svg">
                    </div>
                    <div
                        class="rounded-full border  border-black p-2 flex justify-center items-center size-12 cursor-pointer group ">
                        <img src="~/assets/img/projects/ProjectDetails/social/telegram.svg"
                            class="group-hover:scale-110 transition-all duration-300 ease-in-out" alt="share.svg">
                    </div>
                </div>
            </div>

            <!-- المحتوى الرئيسي -->
            <div class="overflow-hidden">
                <ProjectDHero />
                <PDetailsSection />
                <MoreProjectsSection />
            </div>
        </div>
    </main>
    <PDetailsCtaSection />
</template>

<script setup lang="ts">

const route = useRoute()

</script>

<style scoped></style>