<template>
  <div class="mx-auto max-w-7xl p-6 lg:p-3">
    <section class="flex flex-col md:flex-row items-center px-4 py-12 bg-white">
      <!-- Grilla -->
      <div class="grid grid-cols-3 gap-4 relative">
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="getPositionClass(index)"
          class="flex flex-col items-center justify-center w-[180px] h-[180px] rounded-xl bg-gradient-to-br from-green-100 to-green-200 shadow hover:scale-105 transition-transform duration-200 text-center"
        >
          <div class="text-4xl text-green-800 mb-2">
            <font-awesome-icon :icon="item.icon" class="text-5xl mb-3" />
          </div>
          <p class="text-xl text-green-800 px-2">{{ item.title }}</p>
        </div>
      </div>

      <!-- Texto lateral -->
      <div class="mt-10 md:mt-0 md:ml-12 text-center md:text-left">
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
    "col-start-1",
    "col-start-2",
    "col-start-2",
    "col-start-3",
    "col-start-3",
    "col-start-4",
  ];
  return positions[index] || "col-start-1";
};
</script>

<style scoped>
@media (max-width: 768px) {
  .grid {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
