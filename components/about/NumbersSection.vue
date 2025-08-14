<template>
  <section>
    <div class="container mx-auto max-w-[1328px] max-xl:px-5 ">
      <div
        class="p-8 md:p-10 xl:p-[60px] bg-SectionBG2 flex justify-between items-center gap-10 max-xl:flex-col  rounded-[40px]">
        <div class="">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-medium mb-4 max-xl:text-center">OUR STATS</h1>
          <p class="text-[#333333] text-xl md:text-2xl font-medium max-xl:text-center">The numbers behind our legacy</p>
        </div>
        <div class="flex gap-10 justify-between max-md:justify-center  flex-grow max-xl:w-full flex-wrap
        ">
          <div v-for="(stat, index) in stats" :key="index" ref="counterElements">
            <div class="space-y-4">
              <h1 class=" number ">{{ stat.value }}+</h1>
              <p class="numberTitle ">{{ stat.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const stats = reactive([
  {
    text: "Projects",
    value: 0,
    targetValue: 40
  },
  {
    text: "Employees",
    value: 0,
    targetValue: 30

  },
  {
    text: "Partner",
    value: 0,
    targetValue: 20

  },
  {
    text: "Products",
    value: 0,
    targetValue: 100
  },
]);
const counterElements = ref([]);

const interval = 1000;

const updateCounter = (stat: any) => {
  let startValue = 0;
  const endValue = stat.targetValue;
  const duration = Math.floor(interval / endValue);
  const counter = setInterval(() => {
    startValue += 1;
    stat.value = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
};

const startCounters = () => {
  stats.forEach(updateCounter);
};

onMounted(() => {
  const options = {
    root: null,
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounters();
        observer.unobserve(entry.target);
      }
    });
  }, options);

  counterElements.value.forEach((element) => {
    observer.observe(element);
  });
});
</script>

<style scoped>
.number {
  @apply text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary text-center
}

.numberTitle {
  @apply text-xl md:text-2xl lg:text-3xl font-normal text-center
}
</style>