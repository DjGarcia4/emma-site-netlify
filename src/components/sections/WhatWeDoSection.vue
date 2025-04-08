<template>
  <div class="mx-auto max-w-7xl p-6 lg:p-3">
    <section
      class="flex flex-col-reverse lg:flex-row items-center gap-5 px-4 py-12 bg-white"
    >
      <!-- Grilla -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 relative">
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="[
            'flex flex-col items-center justify-center w-[160px] h-[160px] rounded-xl bg-gradient-to-br from-green-100 to-green-200 shadow hover:scale-105 transition-transform duration-200 text-center',
            getPositionClass(index),
          ]"
        >
          <div class="text-3xl md:text-4xl text-green-800 mb-2">
            <font-awesome-icon :icon="item.icon" class="text-5xl mb-3" />
          </div>
          <p class="text-xl text-green-800 px-2">{{ item.title }}</p>
        </div>
      </div>

      <!-- Texto lateral -->
      <div class="lg:mt-0 lg:ml-12 text-center lg:text-left">
        <h3 class="text-xl font-semibold text-green-600 uppercase">
          Lo que hacemos
        </h3>
        <h2 class="text-4xl font-bold text-gray-800 mt-1">
          Al servicio de tu salud
        </h2>
      </div>
    </section>
  </div>
</template>

<script setup>
const items = [
  { title: "Diagnóstico", icon: "fa-briefcase-medical" },
  { title: "Terapia", icon: "fa-user-md" },
  { title: "Investigación e Innovación", icon: "fa-dna" },
  { title: "Cuidado Paliativo", icon: "fa-hand-holding-heart" },
  { title: "Educar y Prevenir", icon: "fa-chalkboard-teacher" },
  { title: "Apoyo Integral", icon: "fa-hands-helping" },
];

const getPositionClass = (index) => {
  const positions = [
    "lg:col-start-1",
    "lg:col-start-2",
    "lg:col-start-2",
    "lg:col-start-3",
    "lg:col-start-3",
    "lg:col-start-4",
  ];
  return positions[index] || "lg:col-start-1";
};
</script>

<style scoped>
/* Eliminamos la manipulación del grid en mobile porque ya usamos grid-cols-2 */
</style>
