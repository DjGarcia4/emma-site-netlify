<template>
  <section class="bg-white px-4">
    <div
      class="mx-auto max-w-7xl p-6 lg:p-3 flex flex-col md:flex-row items-center gap-8"
    >
      <!-- Imagen -->
      <img
        src="/imgs/doctors/5.png"
        alt="Doctor hablando con paciente"
        class="hidden lg:block w-[400px] rounded-xl shadow-lg object-cover"
      />

      <!-- Contenido -->
      <div class="w-full">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center lg:text-left"
        >
          ¿Por qué elegirnos?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="flex flex-col gap-3"
          >
            <div
              class="w-12 h-12 bg-green-100 text-primary rounded-full flex items-center justify-center text-xl"
            >
              <font-awesome-icon :icon="item.icon" />
            </div>
            <h3 class="font-semibold text-lg text-gray-800">
              {{ item.title }}
            </h3>
            <p class="text-sm text-gray-600">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    icon: "fas fa-user-md",
    title: "Profesionales Médicos Experimentados",
    description:
      "Nuestro equipo incluye médicos, enfermeros y otros profesionales de la salud con experiencia, dedicados a brindar la mejor atención posible a nuestros pacientes.",
  },
  {
    icon: "fas fa-notes-medical",
    title: "Servicios Integrales",
    description:
      "Ofrecemos una amplia gama de servicios de salud, desde atención preventiva hasta tratamientos especializados para condiciones complejas.",
  },
  {
    icon: "fas fa-hand-holding-heart",
    title: "Enfoque Centrado en el Paciente",
    description:
      "Creemos en tratar a cada paciente como un individuo y tomamos el tiempo necesario para comprender sus necesidades y objetivos de salud.",
  },
  {
    icon: "fas fa-hospital",
    title: "Instalaciones de Última Generación",
    description:
      "Nuestro centro de salud está equipado con la tecnología y los equipos más avanzados para ofrecer a nuestros pacientes la mejor atención posible.",
  },
];
</script>
