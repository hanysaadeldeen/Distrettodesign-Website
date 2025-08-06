<template>
    <div class="form bg-SectionBG rounded-[60px] p-[60px] flex gap-10">
        <Form @submit="onSubmit" v-slot="{ errors }" :validation-schema="schema"
            class="w-full lg:max-w-[672px] mx-auto pb-10  md:pb-20 max-lg:px-8 ">

            <div class="flex flex-col w-full lg:max-w-[320px]">
                <label for="FullName">
                    {{ locale === "ar" ? "الإسم الكامل" : " Full Name" }}
                </label>
                <Field id="FullName" name="FullName" type="text" :placeholder="locale === 'en'
                    ? 'Enter your full name'
                    : 'أدخل اسمك الكامل'
                    " class="Field" :class="{ 'border-red-500': errors.FullName }" />
                <span class="text-red-500 text-sm">{{
                    errors.FullName
                    }}</span>
            </div>

            <div class="flex flex-col w-full lg:max-w-[320px]">
                <label for="phoneNumber">
                    {{ locale === "ar" ? "رقم الهاتف" : "Phone" }}
                </label>
                <Field id="phoneNumber" name="phoneNumber" type="text" :placeholder="locale === 'en'
                    ? 'Enter your phone number'
                    : '+966 5X XXX XXXX'
                    " class="Field" :class="{ 'border-red-500': errors.phoneNumber }" />
                <span class="text-red-500 text-sm">{{
                    errors.phoneNumber
                    }}</span>
            </div>





            <div class="flex flex-col w-full lg:max-w-[320px]">
                <label for="email">
                    {{
                        locale === "ar" ? "عنوان البريد الإلكتروني" : "Email"
                    }}
                </label>
                <Field id="email" name="email" type="email" :placeholder="locale === 'en'
                    ? 'Enter your email address'
                    : 'example@company.com'
                    " class="Field " :class="{ 'border-red-500': errors.email }" />
                <span class="text-red-500 text-sm">{{ errors.email }}</span>
            </div>




            <div class="flex flex-col w-full lg:max-w-[672px]">
                <label for="message">
                    {{ locale === "ar" ? "رسالتك / تفاصيل الحالة" : "Message" }}
                </label>
                <Field id="message" name="message" as="textarea" :placeholder="locale === 'en'
                    ? 'Write your message here'
                    : 'اشرح باختصار ما ترغب باستشارته'
                    "
                    class="text-black p-4 rounded-2xl w-full h-32 md:h-[144px] border  resize-none focus:outline-none focus:ring-2 focus:ring-primary-main"
                    :class="{ 'border-red-500': errors.message }" />
                <span class="text-red-500 text-sm">{{ errors.message }}</span>
            </div>

            <div class="w-fit mr-auto">
                <button type="submit" :disabled="isLoading"
                    class="gradient-buttonTwo mt-4 md:mt-10 md:w-[240px] mx-auto  ">
                    Send Message
                </button>
            </div>
        </Form>

        <img src="~/assets/img/contact/maps.png" alt="maps.png">

    </div>
</template>

<script setup lang="ts">

import { Form, Field } from "vee-validate";
import * as yup from "yup";
const { locale } = useI18n();

const isLoading = ref(false);
// import { useEmail } from "~/composables/useEmail";
const schema = yup.object({
    FullName: yup
        .string()
        .min(
            2,
            locale.value === "en"
                ? "First name must be at least 2 characters"
                : "يجب أن يكون الاسم الأول على الأقل 2 أحرف"
        )
        .required(
            locale.value === "en" ? "First name is required" : "الاسم الأول مطلوب"
        ),
    email: yup
        .string()
        .email(
            locale.value === "en" ? "Invalid email" : "البريد الإلكتروني غير صالح"
        )
        .required(
            locale.value === "en" ? "Email is required" : "البريد الإلكتروني مطلوب"
        ),

    phoneNumber: yup
        .string()
        .matches(
            /^[0-9]{10,}$/,
            locale.value === "en"
                ? "Number must be at least 10 digits"
                : "يجب أن يكون الرقم على الأقل 10 أرقام"
        )
        .required(
            locale.value === "en" ? "Phone number is required" : "رقم الهاتف مطلوب"
        ),

    Company: yup
        .string()
        .min(
            2,
            locale.value === "en"
                ? "First name must be at least 2 characters"
                : "يجب أن يكون اسم الجهة على الأقل حرفين"
        )
        .required(
            locale.value === "en" ? "First name is required" : "اسم الجهة أو الشركة"
        ),
    message: yup
        .string()
        .min(
            10,
            locale.value === "en"
                ? "Message must be at least 10 characters"
                : "يجب أن تحتوي الرسالة على 10 أحرف على الأقل"
        )
        .max(
            500,
            locale.value === "en"
                ? "Message cannot exceed 500 characters"
                : "يجب ألا تتجاوز الرسالة 500 حرف"
        )
        .required(locale.value === "en" ? "Message is required" : "الرسالة مطلوبة"),
});
// const { sendEmail } = useEmail();
const onSubmit = async (values: any) => {
    try {
        isLoading.value = true;
        // await sendEmail(values);
        isLoading.value = false;
    } catch (error) {
        isLoading.value = false;
    }
};

</script>

<style scoped>
.Field {
    @apply text-black py-2 md:py-3 px-2.5 md:px-4 h-[48px] w-full border rounded-2xl focus:outline-none focus:ring-2 focus:bg-white
}


label {
    @apply text-black font-normal text-sm mb-1 md:mb-2 cursor-pointer inline-block
}
</style>