<template>
  <div class="space-y-20">
    <Carousel />
    <InfoBlock
      subtitle="Acerca de Nosotros"
      title="Somos un equipo dedicado a tu bienestar"
      description="Nuestro equipo multidisciplinario está comprometido con ofrecer atención médica de calidad y personalizada."
      imageSrc="/src/assets/imgs/doctors/1.png"
      imageAlt="Doctores trabajando"
    />
    <!-- <DepartmentsSection /> -->
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import Carousel from "@/components/common/Carousel.vue";
import InfoBlock from "@/components/common/InfoBlock.vue";
// import DepartmentsSection from "@/components/departments/DepartmentsSection.vue";

onMounted(() => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 10);
});
</script>

<style scoped></style>
