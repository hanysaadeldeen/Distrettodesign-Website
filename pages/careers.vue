<template>
  <main class="overflow-hidden">
    <div class="container mx-auto max-w-[1410px] max-xl:px-5">
      <div class="mt-24 lg:my-40">
        <h1 class=" text-2xl sm:text-3xl md:text-4xl lg:text-[80px] lg:!leading-[80px] font-semibold text-center  ">
          Want to join us ?</h1>
        <p class="text-2xl font-normal max-w-[624px] mx-auto mt-4  text-center ">
          Your talent deserves a space to grow
        </p>
        <div @click="scrollToSection('ourRoles')">
          <button type="submit" class="gradient-buttonTwo mt-4 lg:mt-10 mx-auto !w-fit block">
            Our Roles
          </button>
        </div>
      </div>
    </div>
    <WorkWithUs />
    <OpenPositions />
    <CareerCTA />
  </main>

</template>

<script setup>
const scrollToSection = (sectionId) => {
  console.log(`${sectionId}`);
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<style scoped>
#ourRoles {
  scroll-margin-top: 40px;
}
</style>