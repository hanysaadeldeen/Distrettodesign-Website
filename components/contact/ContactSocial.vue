<template>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-11 ">
        <div class="flex flex-col py-8 md:py-14 px-2 cursor-pointer rounded-3xl md:rounded-[40px] "
            v-for="value in Contact" :key="value.id">
            <div class="rounded-3xl bg-secondary flex items-center justify-center w-fit mx-auto p-4 md:p-5">
                <img :src="value.icons" :alt="value.title" class="max-md:max-w-[32px]">
            </div>
            <div class="max-w-[408px] mx-auto mt-8 md:mt-12">
                <h1 class="mb-2 md:mb-4 font-medium text-xl md:text-2xl lg:text-3xl text-center">{{ value.title }}</h1>

                <a :href="value.link">
                    <p class="text-lg md:text-xl lg:text-2xl font-normal text-center">
                        {{ value.description }}
                    </p>
                </a>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">

import email from "../../assets/img/contact/email.svg"
import Fax from "../../assets/img/contact/Fax.svg"
import location from "../../assets/img/contact/location.svg"
import phone from "../../assets/img/contact/phone.svg"

const Contact = [
    {
        id: 1,
        title: "Address:",
        description: "Kingdom of Saudi Arabia - Jeddah - Prince Sultan Street P.O Box: 7629, Jeddah 23433-2056",
        icons: location,
        link: ""
    },
    {
        id: 2,
        title: "Phone:",
        description: "(+966) 126829184",
        icons: phone,
        link: "tel:966126829184"
    },
    {
        id: 3,
        title: "Fax:",
        description: "(+966) 126826824",
        icons: Fax,
        link: ""

    },
    {
        id: 4,
        title: "Email:",
        description: "info@distrettodesign.com",
        icons: email,
        link: "https://mail.google.com/mail/?view=cm&to=info@distrettodesign.com"


    }]
</script>

<style scoped></style>