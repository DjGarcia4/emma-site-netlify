<template>
  <div class="mt-[75px] md:mt-[105px] space-y-10">
    <InfoBlock
      subtitle="Nuestros Servicios"
      title="Cuidamos tu salud con compromiso y calidad"
      description="Ofrecemos una variedad de servicios médicos diseñados para atender con calidez y profesionalismo a quienes nos visitan. Desde consultas especializadas hasta procedimientos diagnósticos y tratamientos, estamos aquí para acompañarte en cada paso de tu bienestar."
      imageSrc="/imgs/services/collageServices.png"
      imageAlt="Equipo médico brindando atención"
    />
    <ServicesGrid />
  </div>
</template>

<script setup>
import InfoBlock from "@/components/common/InfoBlock.vue";
import ServicesGrid from "@/components/services/ServicesGrid.vue";
</script>

<style scoped></style>
