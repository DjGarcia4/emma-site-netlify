<template>
  <div class="lg:space-y-7">
    <Carousel />
    <InfoBlock
      subtitle="Acerca de Nosotros"
      title="Somos un equipo dedicado a tu bienestar"
      description="Nuestro equipo multidisciplinario está comprometido con ofrecer atención médica de calidad y personalizada."
      imageSrc="/src/assets/imgs/doctors/1.png"
      imageAlt="Doctores trabajando"
    />
    <DepartmentsSection />
    <HealthCallToAction />
    <WhatWeDoSection />
    <TestimonialsSection />
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import Carousel from "@/components/common/Carousel.vue";
import InfoBlock from "@/components/common/InfoBlock.vue";
import HealthCallToAction from "@/components/sections/HealthCallToAction.vue";
import DepartmentsSection from "@/components/departments/DepartmentsSection.vue";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection.vue";
import TestimonialsSection from "@/components/sections/TestimonialsSection.vue";

onMounted(() => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 10);
});
</script>

<style scoped></style>
