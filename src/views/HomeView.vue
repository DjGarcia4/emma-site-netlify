<template>
  <div>Home</div>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 10);
});
</script>

<style scoped></style>
