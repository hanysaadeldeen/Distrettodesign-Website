<template>
  <main class="terms relative mt-16 md:mt-24">

    <div class="relative  max-w-[1520px] mx-auto">
      <div class="relative container max-sm:px-4 mx-auto px-2">

        <div class="terms-page flex" :key="locale">

          <main class="content lg:mr-32 lg:p-4 flex-1">
            <div class="flex flex-col ">
              <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-[80px] lg:!leading-[80px] font-semibold mb-4">Terms of
                Service
              </h1>
              <p class="text-xl font-normal mb-5">Last updated: June 2025</p>
              <p class="text-xl md:text-2xl font-normal mb-14 ">Welcome to Distretto Design. By using our website, you
                agree to the
                following terms. Please read them carefully.</p>
            </div>

            <div v-for="(section, index) in sections" :id="section.id" :key="index" class="mb-8 lg:mb-14">
              <h2 class="text-xl md:text-2xl lg:text-3xl font-medium mb-4">
                {{ $t(section.title) }}:
              </h2>
              <div class="flex items-center">
                <p class=" font-normal text-base md:text-lg">
                  {{ $t(section.description) }}
                </p>
                <!-- <nuxt-link to="contact">
                  <span v-if="section.id === 'contact-us'" class="font-bold mx-1"> Contact Us</span>
                </nuxt-link> -->
              </div>

            </div>
          </main>
          <nav class="hidden lg:block table-of-contents sticky top-0 bottom-0">
            <h3>Terms of Service</h3>
            <ul>
              <li v-for="(section, index) in sections" :key="index">
                <p class="block py-2 px-4" :class="locale === 'en' ? 'text-left' : 'text-right'"
                  @click="scrollToSection(section.id)">
                  {{ $t(section.title) }}
                </p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

  </main>

</template>

<script setup>
const { locale } = useI18n();
const sections = [
  {
    id: "Information-We-Collect",
    title: "Website Use  ",
    description: "This website is intended for informational and commercial purposes related to our products and services. You agree to use it only for lawful purposes and in accordance with these terms.",

  },
  {
    id: "how-we-use-the-data",
    title: "Intellectual Property  ",
    description: "All content on this site — including images, text, logos, product names, and layouts — is the property of Distretto Design or its content partners and is protected by copyright and trademark laws. You may not copy, reproduce, or use any part of the website without written permission.",

  },
  {
    id: "data-protection",
    title: "Product Information ",
    description: "We strive to ensure all product descriptions, specifications, and visuals are accurate. However, actual materials, colors, or finishes may vary slightly due to screen settings or supplier updates.",

  },
  {
    id: "data-sharing",
    title: "Orders and Pricing  ",
    description: "If you request a quote or place an order, we will provide a detailed agreement outlining pricing, delivery terms, and any additional conditions. All orders are subject to availability and confirmation.",

  },
  {
    id: "cookies",
    title: "Third-Party Links  ",
    description: "This website may include links to third-party sites. Distretto Design is not responsible for the content, accuracy, or practices of these external websites.",

  },
  {
    id: "user-rights",
    title: "Disclaimer  ",
    description: "We aim to keep all website content accurate and up to date, but we do not guarantee completeness or error-free operation. Your use of the website is at your own risk.",

  },
  {
    id: "policy-updates",
    title: "Changes to These Terms  ",
    description: "Distretto Design reserves the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date.",

  },
  {
    id: "contact-us",
    title: "Contact   ",
    description: "For any questions or concerns regarding your privacy, please  Contact Us ",

  },
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>
<style scoped>
.startSection2 {
  height: calc(75vh - 112px);
}

@media (max-width: 1024px) {
  .startSection2 {
    height: calc(75vh - 72px);
  }
}

@media (max-width: 768px) {
  section {
    margin-bottom: 80px;
  }
}

.table-of-contents {
  width: 424px;
  padding: 1rem;
  height: fit-content;
}

.table-of-contents h3 {
  margin-bottom: 1rem;
  color: #121212;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.5;
}

.table-of-contents p {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: none;
  background-color: transparent;
  color: #666666;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  transition: all 0.1s ease-in-out;
}

.table-of-contents p:hover {
  color: #121212;
}

.content {
  flex-grow: 1;
}


.lista::before {
  content: "•";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #666666;
  font-size: 2rem;
  font-weight: bold;
}
</style>