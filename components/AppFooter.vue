<template>
    <footer class="mt-6 relative bg-black rounded-tl-[80px] md:rounded-tl-[100px] text-white">
        <section class="relative mx-auto max-w-[1520px]">
            <div class="container mx-auto  px-5 relative">
                <div class="absolute -top-6 right-0 hidden lg:block">
                    <img src="~/assets/img/Utils/footer.svg" alt="footer">
                </div>
                <div class=" lg:py-20">
                    <div class=" lg:hidden flex justify-center  ">
                        <img src="~/assets/img/Utils/footer.svg" alt="footer" class="visability" loading="lazy">
                        <img src="~/assets/img/Utils/footer.svg" alt="footer" class="absolute -top-6" loading="lazy">
                    </div>
                    <div class="max-md:py-10 md:pb-14  border-b border-white max-lg:text-center">
                        <h1
                            class="max-lg:text-center text-2xl sm:text-3xl md:text-4xl lg:text-[52px] lg:!leading-[52px] font-medium mb-4 md:mb-6  lg:max-w-[529px]">
                            SHAPING VISION INTO SPACES</h1>
                        <button class="gradient-button  mt-6 ">Get Our Service</button>
                        <div class="mt-6 ">
                            <nav>
                                <ul
                                    class="flex flex-wrap max-lg:justify-center max-lg:items-center gap-6 text-xl font-medium *:text-white *:cursor-pointer hover:*:text-primary">
                                    <li>Work</li>
                                    <li>About </li>
                                    <li>Careers</li>
                                    <li>Contact Us</li>
                                </ul>
                            </nav>
                        </div>
                        <div
                            class="flex  max-lg:justify-center max-lg:items-center gap-6 mt-5 items-center *:text-white *:cursor-pointer hover:*:text-primary *:text-xl">
                            <i class="fa-brands fa-facebook "></i>
                            <i class="fa-brands fa-instagram"></i>
                            <div class="group">
                                <div class="block group-hover:hidden">
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.1761 0.242676H16.9362L10.9061 7.02008L18 16.2427H12.4456L8.0951 10.6493L3.11723 16.2427H0.35544L6.80517 8.99348L0 0.242676H5.69545L9.6279 5.3553L14.1761 0.242676ZM13.2073 14.6181H14.7368L4.86441 1.78196H3.2232L13.2073 14.6181Z"
                                            fill=" white " />
                                    </svg>
                                </div>
                                <div class="hidden group-hover:block">
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.1761 0.242676H16.9362L10.9061 7.02008L18 16.2427H12.4456L8.0951 10.6493L3.11723 16.2427H0.35544L6.80517 8.99348L0 0.242676H5.69545L9.6279 5.3553L14.1761 0.242676ZM13.2073 14.6181H14.7368L4.86441 1.78196H3.2232L13.2073 14.6181Z"
                                            fill="#A36316" />
                                    </svg>
                                </div>
                            </div>
                            <i class="fa-brands fa-linkedin"></i>

                        </div>

                    </div>
                    <div
                        class="max-lg:pb-8 pt-8 flex max-lg:flex-col max-lg:justify-center gap-2 justify-between items-center text-white text-sm ">
                        <div class="flex gap-6 items-center *:underline *:cursor-pointer ">
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>
                        <p class="text-center">© 2025 Distretto Design. All rights reserved. Made by
                            <a href="https://do.com.sa/" class=" font-bold text-lg mx-1 underline"
                                target="_blank">DO</a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
.gradient-button {
    padding: 16px 24px;
    border-radius: 16px;
    font-size: 24px;
    font-weight: 500;
    transition: all .3s ease-in-out;
}

.gradient-button {
    border: 2px solid white;
    color: white;
}

.gradient-button:hover {
    border: 2px solid #A36316;
    background-color: #A36316;
}

@media (max-width:768px) {

    .gradient-button {
        padding: 8px 16px;
        font-size: 18px;
    }
}

.visability {
    visibility: hidden;
}
</style>