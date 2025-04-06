<template>
  <div>
    <Carousel />
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import Carousel from "@/components/common/Carousel.vue";

onMounted(() => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 10);
});
</script>

<style scoped></style>
