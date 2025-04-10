<template>
  <div class="mt-[75px] md:mt-[105px] space-y-10">
    <WhyChooseUs />
    <OurValues />
    <WhatWeDoSection />
    <!-- <ServicesSection /> -->
    <CallToAction
      image="/imgs/timeline/1990-1.jpg"
      title="Conocé cómo comenzó todo"
      description="Descubrí la historia del Centro de Cáncer Emma Romero de Callejas, desde sus inicios humildes hasta convertirse en un referente nacional en la lucha contra el cáncer. Cada año, un paso más cerca de la esperanza."
      buttonText="Ver nuestra historia"
      buttonTo="/history"
    />
  </div>
</template>

<script setup>
import WhyChooseUs from "@/components/sections/WhyChooseUs.vue";
// import ServicesSection from "@/components/services/ServicesSection.vue";
import CallToAction from "@/components/sections/CallToAction.vue";
import OurValues from "@/components/sections/OurValues.vue";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection.vue";
</script>

<style scoped></style>
