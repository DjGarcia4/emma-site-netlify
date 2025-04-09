<template>
  <section class="py-16 px-4 md:px-12 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Grid de tarjetas -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in serviceStore.services"
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
    </div>
  </section>
</template>

<script setup>
import { useServiceStore } from "@/stores/service";
const serviceStore = useServiceStore();
</script>
