<template>
  <section class="px-4 md:px-12 bg-white">
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
          v-for="(service, index) in serviceStore.services.slice(0, 5)"
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
        </div>
      </div>
      <div class="mt-8 flex justify-end items-center">
        <RouterLink
          to="/services"
          class="text-green-700 font-semibold flex items-center gap-2 hover:text-green-900 transition cursor-pointer"
        >
          Ver más servicios
          <font-awesome-icon icon="fas fa-arrow-right" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useServiceStore } from "@/stores/service";
const serviceStore = useServiceStore();
</script>
