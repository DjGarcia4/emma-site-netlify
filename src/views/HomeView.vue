<template>
  <div class="lg:space-y-7">
    <Carousel />
    <InfoBlock
      subtitle="Acerca de Nosotros"
      title="Somos un equipo dedicado a tu bienestar"
      description="Nuestro equipo multidisciplinario está comprometido con ofrecer atención médica de calidad y personalizada."
      imageSrc="/src/assets/imgs/doctors/1.png"
      imageAlt="Doctores trabajando"
      buttonText="Más sobre nosotros"
      buttonTo="/about-us"
    />
    <DepartmentsSection />
    <CallToAction
      image="/src/assets/imgs/doctors/2.avif"
      title="¡No pongas tu salud en segundo plano!"
      description="Agenda una cita con uno de nuestros especialistas y toma el control de tu salud hoy mismo."
      buttonText="Agendar cita"
      buttonTo="/contacto"
    />
    <WhatWeDoSection />
    <TestimonialsSection />
    <BlogSection />
  </div>
</template>

<script setup>
import Carousel from "@/components/common/Carousel.vue";
import InfoBlock from "@/components/common/InfoBlock.vue";
import CallToAction from "@/components/sections/CallToAction.vue";
import DepartmentsSection from "@/components/departments/DepartmentsSection.vue";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection.vue";
import TestimonialsSection from "@/components/sections/TestimonialsSection.vue";
import BlogSection from "@/components/blog/BlogSection.vue";
</script>

<style scoped></style>
