<template>
  <div class="mx-auto max-w-7xl p-6 lg:p-3">
    <section
      class="w-full h-[250px] md:h-[300px] lg:h-[400px] rounded-2xl overflow-hidden relative grid grid-cols-1 lg:grid-cols-2 shadow"
      :style="{
        backgroundImage: `url(${doctorBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <!-- Capa de gradiente -->
      <div
        class="col-span-1 lg:col-span-2 absolute inset-0 bg-gradient-to-l from-[#10820c]/90 to-transparent z-10"
      ></div>

      <!-- Espacio vacío a la izquierda (imagen visible) -->
      <div class="z-20"></div>

      <!-- Contenido a la derecha -->
      <div class="z-20 flex items-center justify-center p-8 text-white">
        <div>
          <h2 class="text-2xl md:text-4xl font-bold mb-4">
            ¡No pongas tu salud en segundo plano!
          </h2>
          <p class="text-sm md:text-base">
            Agenda una cita con uno de nuestros especialistas y toma el control
            de tu salud hoy mismo.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import doctorBg from "@/assets/imgs/doctors/2.avif";
</script>

<style scoped></style>
