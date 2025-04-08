<template>
  <section class="bg-white">
    <div
      class="mx-auto max-w-7xl p-6 lg:p-3 flex flex-col md:flex-row items-center gap-8"
    >
      <!-- Texto -->
      <div class="md:w-1/2">
        <h3 class="text-gray-500 uppercase text-xl">
          {{ subtitle }}
        </h3>
        <h2
          class="text-4xl md:text-5xl font-semibold text-primary mt-2 leading-tight"
        >
          {{ title }}
        </h2>
        <p class="text-gray-500 mt-6 text-base">
          {{ description }}
        </p>
      </div>

      <!-- Imagen -->
      <div class="md:w-1/2">
        <img
          :src="imageSrc"
          :alt="imageAlt"
          class="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  subtitle: {
    type: String,
    default: "Sobre Nosotros",
  },
  title: {
    type: String,
    default: "ProHealth es un equipo de profesionales médicos con experiencia",
  },
  description: {
    type: String,
    default:
      "Dedicados a brindar servicios de salud de alta calidad. Creemos en un enfoque integral que trata la causa raíz de las enfermedades, no solo los síntomas.",
  },
  imageSrc: {
    type: String,
    default: "/images/equipo-medico.jpg",
  },
  imageAlt: {
    type: String,
    default: "Equipo médico en acción",
  },
});
</script>
