<template>
  <section class="relative px-4 py-6">
    <!-- Fondo curvo verde -->
    <div
      class="relative z-0 max-w-7xl mx-auto h-72 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl"
    ></div>

    <!-- Cards flotando encima -->
    <div class="relative z-10 max-w-7xl mx-auto -mt-58">
      <h2 class="text-center text-3xl font-bold text-green-900 mb-12">
        Nuestro Valores
      </h2>

      <!-- Grid responsiva sin scroll -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-8">
        <div
          v-for="value in values"
          :key="value.name"
          class="flex flex-col justify-center items-center text-center p-5 rounded-2xl transition-all duration-300 shadow-md"
          :class="
            selected === value.name
              ? 'bg-green-600 text-white'
              : 'bg-white text-green-800'
          "
        >
          <font-awesome-icon
            :icon="value.icon"
            class="text-4xl sm:text-5xl mb-3"
          />
          <div>
            <p class="text-xl sm:text-2xl font-medium leading-tight">
              {{ value.name }}
            </p>
            <p class="text-sm sm:text-base">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const values = [
  {
    icon: "fa-hand-holding-heart",
    name: "Misión",
    description:
      "Reducir la incidencia y mortalidad del cáncer a través de la educación, detección temprana, diagnóstico rápido y preciso; con tratamientos de calidad y cuidado paliativo.",
  },
  {
    icon: "fa-eye",
    name: "Visión",
    description:
      "Ser la institución líder en servicios oncológicos en Honduras, por medio de equipo de última tecnología y personal altamente calificado.",
  },
  {
    icon: "fa-scale-balanced",
    name: "Valores",
    description:
      "Creemos en la acción urgente, la innovación y la necesidad de transformación, dentro del mundo y nuestra propia organización.",
  },
];
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
