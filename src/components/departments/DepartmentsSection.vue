<template>
  <section class="bg-white">
    <div class="mx-auto max-w-7xl p-6 lg:p-3 gap-5 flex flex-col">
      <div class="w-full text-center">
        <h3 class="text-gray-500 uppercase text-xl">Para tu salud</h3>
        <h2
          class="text-4xl md:text-5xl font-semibold text-primary mt-2 leading-tight"
        >
          Nuestros Departamentos
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(dept, index) in departments"
          :key="index"
          class="flex gap-5 items-center justify-center border border-primary p-5 rounded-xl text-primary h-[130px] hover:bg-primary hover:text-white transition-all cursor-pointer"
        >
          <span class="text-5xl">
            <font-awesome-icon :icon="['fas', dept.icon]" />
          </span>
          <p class="text-2xl md:text-2xl text-left">{{ dept.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
