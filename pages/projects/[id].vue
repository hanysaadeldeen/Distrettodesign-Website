<template>
    <main class="relative">
        <!-- هذا هو السكشن اللي هيحتوي العناصر والمحتوى -->
        <div class="2xl:hidden sticky top-0 left-0 w-full py-5 px-8 z-[15] bg-white  ">
            <div class="flex  gap-6  rounded items-center ">
                <div class="max-w-[32px] max-h-[32px] md:max-w-[32px] md:max-h-[32px]">
                    <img src="~/assets/img/projects/ProjectDetails/social/share.svg" alt="share.svg">
                </div>
                <div
                    class=" max-w-[32px] max-h-[32px] rounded-full border  border-black p-2 flex justify-center items-center cursor-pointer group ">
                    <img src="~/assets/img/projects/ProjectDetails/social/whats.svg"
                        class="group-hover:scale-110 transition-all duration-300 ease-in-out" alt="share.svg">
                </div>
                <div
                    class=" max-w-[32px] max-h-[32px] rounded-full border  border-black p-2 flex justify-center items-center cursor-pointer group ">
                    <img src="~/assets/img/projects/ProjectDetails/social/faceBook.svg"
                        class="group-hover:scale-110 transition-all duration-300 ease-in-out max-w-[32px] max-h-[32px]"
                        alt="share.svg">
                </div>
                <div
                    class=" max-w-[32px] max-h-[32px] rounded-full border  border-black p-2 flex justify-center items-center  cursor-pointer group ">
                    <img src="~/assets/img/projects/ProjectDetails/social/instagram.svg"
                        class="group-hover:scale-110 transition-all duration-300 ease-in-out" alt="share.svg">
                </div>
                <div
                    class=" max-w-[32px] max-h-[32px] rounded-full border  border-black p-2 flex justify-center items-center  cursor-pointer group ">
                    <img src="~/assets/img/projects/ProjectDetails/social/telegram.svg"
                        class="group-hover:scale-110 transition-all duration-300 ease-in-out" alt="share.svg">
                </div>
            </div>
        </div>
        <div class="relative flex ">
            <!-- عنصر السوشيال sticky -->

            <div class="hidden 2xl:block sticky top-[210px] left-3 2xl:left-[78px] bottom-0  w-fit h-fit  ">
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