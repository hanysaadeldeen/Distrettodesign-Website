<template>
  <section>
    <div class="container mx-auto max-w-[1520px] px-5 ">
      <div
        class="p-8 md:p-10 xl:p-[60px] bg-SectionBG2 flex justify-between items-center gap-10 max-xl:flex-col  rounded-[40px]">
        <div class="">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-medium mb-4 max-xl:text-center">OUR STATS</h1>
          <p class="text-[#333333] text-xl md:text-2xl font-medium max-xl:text-center">The numbers behind our legacy</p>
        </div>
        <div class="flex gap-10 justify-between max-md:justify-center  flex-grow max-xl:w-full flex-wrap
        ">
          <div class="space-y-4">
            <h1 class=" number ">40+</h1>
            <p class="numberTitle ">projects </p>
          </div>
          <div class="space-y-4">
            <h1 class=" number ">30+</h1>
            <p class="numberTitle ">Employees </p>
          </div>
          <div class="space-y-4">
            <h1 class=" number ">20+</h1>
            <p class="numberTitle ">Partner </p>
          </div>
          <div class="space-y-4">
            <h1 class="number">100+</h1>
            <p class="numberTitle ">Products </p>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.number {
  @apply text-5xl lg:text-6xl xl:text-[80px] font-semibold text-primary text-center
}

.numberTitle {
  @apply text-xl md:text-2xl lg:text-3xl font-normal text-center
}
</style>