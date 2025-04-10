<template>
  <div class="">
    <div
      id="contactForm"
      class="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row items-center gap-10"
    >
      <div>
        <!-- Título de sección -->
        <div class="w-full">
          <p class="text-green-600 font-semibold uppercase tracking-wide">
            ¡No pongas tu salud en segundo plano!
          </p>
          <h2 class="text-3xl lg:text-4xl font-extrabold text-gray-800">
            Agenda una cita con uno de nuestros especialistas y toma el control
            de tu salud hoy mismo.
          </h2>
        </div>

        <!-- Imagen -->
        <div class="w-full flex justify-center">
          <img src="/imgs/doctors/7.png" alt="Doctor" class="w-[700px]" />
        </div>
      </div>
      <!-- Formulario para agendar cita -->
      <div class="w-full max-w-2xl mx-auto mt-10">
        <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="md:col-span-2">
            <label class="text-sm text-gray-600 block mb-1"
              >Nombre completo</label
            >
            <input
              v-model="form.name"
              type="text"
              placeholder="Tu nombre completo"
              class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div>
            <label class="text-sm text-gray-600 block mb-1"
              >Correo electrónico</label
            >
            <input
              v-model="form.email"
              type="email"
              placeholder="correo@ejemplo.com"
              class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div>
            <label class="text-sm text-gray-600 block mb-1">Asunto</label>
            <input
              v-model="form.asunto"
              type="text"
              placeholder="Asunto"
              class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div>
            <label class="text-sm text-gray-600 block mb-1"
              >Fecha de la cita</label
            >
            <input
              v-model="form.date"
              type="date"
              class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div>
            <label class="text-sm text-gray-600 block mb-1">Hora</label>
            <input
              v-model="form.time"
              type="time"
              class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div class="md:col-span-2">
            <label class="text-sm text-gray-600 block mb-1">Departamento</label>
            <input
              v-model="form.department"
              type="text"
              placeholder="Ej. Oncología, Diagnóstico, etc."
              class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div class="md:col-span-2">
            <label class="text-sm text-gray-600 block mb-1">Mensaje</label>
            <textarea
              v-model="form.message"
              rows="4"
              placeholder="Escribe tu mensaje aquí..."
              class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 shadow-inner resize-none focus:outline-none focus:ring-2 focus:ring-green-300"
            ></textarea>
          </div>

          <div class="md:col-span-2">
            <button
              type="submit"
              class="w-full bg-primary hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              Agendar cita
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  asunto: "",
  date: "",
  time: "",
  department: "",
  message: "",
});
</script>
