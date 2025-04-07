<template>
  <section class="relative px-4 py-6">
    <!-- Fondo curvo verde -->
    <div
      class="relative z-0 max-w-7xl mx-auto h-72 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl"
    ></div>

    <!-- Cards flotando encima -->
    <div class="relative z-10 max-w-7xl mx-auto -mt-48">
      <h2 class="text-center text-3xl font-bold text-green-900 mb-12">
        Departamentos
      </h2>

      <div class="relative">
        <!-- Flecha Izquierda -->
        <button
          @click="scrollLeft"
          class="absolute left-0 top-1/2 -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-lg z-20 cursor-pointer"
        >
          <font-awesome-icon icon="fa-solid fa-chevron-left" />
        </button>

        <!-- Cards Scrollables -->
        <div
          ref="scrollContainer"
          class="overflow-x-auto no-scrollbar scroll-smooth flex gap-6 px-10"
        >
          <div
            v-for="dept in departments"
            :key="dept.name"
            @click="selected = dept.name"
            class="flex-shrink-0 flex flex-col justify-center items-center text-center p-5 w-40 h-40 rounded-xl transition-all duration-300 cursor-pointer shadow-md hover:scale-105 hover:shadow-lg my-3"
            :class="
              selected === dept.name
                ? 'bg-green-600 text-white'
                : 'bg-white text-green-800 hover:bg-green-100'
            "
          >
            <font-awesome-icon :icon="dept.icon" class="text-3xl mb-3" />
            <p class="text-sm font-medium leading-tight text-center">
              {{ dept.name }}
            </p>
          </div>
        </div>

        <!-- Flecha Derecha -->
        <button
          @click="scrollRight"
          class="absolute right-0 top-1/2 -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-lg z-20 cursor-pointer"
        >
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const selected = ref("Informática");
const scrollContainer = ref(null);

const scrollRight = () => {
  scrollContainer.value.scrollLeft += 280;
};
const scrollLeft = () => {
  scrollContainer.value.scrollLeft -= 280;
};

const departments = [
  { icon: "fa-atom", name: "Medicina nuclear" },
  { icon: "fa-stethoscope", name: "Gastroenterología" },
  { icon: "fa-x-ray", name: "Radiología" },
  { icon: "fa-magnifying-glass-chart", name: "Tomografía" },
  { icon: "fa-vial", name: "Laboratorio clínico" },
  { icon: "fa-radiation", name: "Radioterapia" },
  { icon: "fa-user-doctor", name: "Citometría" },
  { icon: "fa-prescription-bottle-medical", name: "Farmacia" },
  { icon: "fa-dna", name: "Braquiterapia" },
  { icon: "fa-desktop", name: "Informática" },
  { icon: "fa-brain", name: "Psicología" },
  { icon: "fa-people-group", name: "Trabajo social" },
  { icon: "fa-syringe", name: "Sala de Quimioterapia" },
  { icon: "fa-bed", name: "Sala de cuidados paliativos" },
  { icon: "fa-microscope", name: "Acelerador lineal ELEKTA SYNERGY" },
  { icon: "fa-venus", name: "Estudios Ginecológicos" },
  { icon: "fa-chart-line", name: "Registro y estadísticas de cáncer" },
  { icon: "fa-wave-square", name: "Física médica" },
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
