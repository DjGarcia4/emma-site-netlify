<template>
  <div class="mt-[75px] md:mt-[105px] space-y-10">
    <InfoBlock
      subtitle="Nuestra Historia"
      title="Más de 30 años de lucha y esperanza"
      description="Desde 1990, el Centro de Cáncer Emma Romero de Callejas ha crecido paso a paso con el compromiso de servir a Honduras. Conocé cómo inició todo y descubre los hitos más importantes que han marcado nuestro camino."
      imageSrc="/imgs/timeline/collage.png"
      imageAlt="Doctores trabajando"
    />
    <TimelineSection />
  </div>
</template>

<script setup>
import InfoBlock from "@/components/common/InfoBlock.vue";
import TimelineSection from "@/components/sections/TimelineSection.vue";
</script>

<style scoped></style>
