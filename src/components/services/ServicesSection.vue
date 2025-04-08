<template>
  <section class="py-16 px-4 md:px-12 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Título -->

      <!-- Grid de tarjetas -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="text-center md:text-left mb-12">
          <h2 class="text-base font-semibold text-green-600 uppercase mb-2">
            Servicios
          </h2>
          <h3 class="text-4xl font-extrabold text-gray-900 leading-tight">
            Ofrecemos nuestros <br />
            mejores servicios
          </h3>
        </div>
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:scale-105 relative transition-all duration-300"
        >
          <!-- Icono Font Awesome -->
          <div
            class="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm mb-4"
          >
            <font-awesome-icon :icon="service.icon" />
          </div>

          <!-- Título y descripción -->
          <h4 class="text-base font-semibold text-gray-800">
            {{ service.title }}
          </h4>
          <p class="text-sm text-gray-600 mt-2">{{ service.description }}</p>

          <!-- Flecha -->
          <div
            class="w-9 h-9 bg-green-100 text-green-700 rounded-full flex items-center justify-center absolute bottom-2 right-2 hover:bg-green-200 transition cursor-pointer"
          >
            <span>&rarr;</span>
          </div>
        </div>
      </div>
      <div class="mt-8 flex justify-end items-center">
        <button
          @click="verMasNoticias"
          class="text-green-700 font-semibold flex items-center gap-2 hover:text-green-900 transition cursor-pointer"
        >
          Ver más servicios
          <font-awesome-icon icon="fas fa-arrow-right" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: "Diagnóstico médico",
    description:
      "Análisis de laboratorio, estudios por imágenes y otros exámenes para detectar condiciones de salud.",
    icon: ["fas", "vials"], // fa-vials
  },

  {
    title: "Cuidado preventivo",
    description:
      "Chequeos anuales, vacunación y exámenes de rutina para mantener una buena salud.",
    icon: ["fas", "syringe"], // fa-syringe
  },
  {
    title: "Tratamiento de condiciones agudas y crónicas",
    description:
      "Manejo colaborativo de enfermedades, investigaciones médicas y asistencia continua.",
    icon: ["fas", "pills"], // fa-pills
  },
  {
    title: "Salud mental",
    description:
      "Apoyo psicológico, terapias y orientación para el bienestar emocional de los pacientes.",
    icon: ["fas", "brain"], // fa-brain
  },
  {
    title: "Atención primaria integral",
    description:
      "Cuidado completo para enfermedades comunes y seguimiento constante de la salud.",
    icon: ["fas", "user-md"], // fa-user-md
  },
];
</script>
