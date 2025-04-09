<template>
  <div class="mx-auto max-w-7xl p-6 lg:p-3">
    <section
      class="w-full h-[40vh] md:h-[300px] lg:h-[400px] rounded-2xl overflow-hidden relative grid grid-cols-1 lg:grid-cols-2 shadow"
      :style="{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <!-- Capa de gradiente -->
      <div
        class="col-span-1 lg:col-span-2 absolute inset-0 z-10"
        :class="`bg-gradient-to-l ${gradientFrom} to-transparent`"
      ></div>

      <!-- Espacio izquierdo -->
      <div class="z-20"></div>

      <!-- Contenido -->
      <div class="z-20 flex items-center justify-center p-8 text-white">
        <div>
          <h2 class="text-2xl md:text-4xl font-bold mb-4">{{ title }}</h2>
          <p class="text-sm md:text-base mb-4">{{ description }}</p>
          <RouterLink
            v-if="buttonText && buttonTo"
            :to="buttonTo"
            class="inline-block bg-white text-green-800 font-semibold px-5 py-2 rounded-full hover:bg-green-100 transition"
          >
            {{ buttonText }}
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gradientFrom: {
    type: String,
    default: "from-[#10820c]/90",
  },
  buttonText: {
    type: String,
    default: "",
  },
  buttonTo: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
