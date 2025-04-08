<template>
  <div
    class="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row items-center gap-10"
  >
    <div>
      <!-- Título de sección -->
      <div class="w-full">
        <p class="text-green-600 font-semibold uppercase tracking-wide">
          Contacto
        </p>
        <h2 class="text-4xl font-extrabold text-gray-800">
          Hablemos, estamos aquí para ayudarte
        </h2>
      </div>

      <!-- Imagen -->
      <div class="w-full lg:w-1/2 flex justify-center">
        <img
          src="/src/assets/imgs/doctors/4.png"
          alt="Doctor"
          class="max-w-xs lg:max-w-md"
        />
      </div>
    </div>

    <!-- Formulario -->
    <div class="w-full lg:w-1/2 max-w-2xl">
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
          <label class="text-sm text-gray-600 block mb-1">Teléfono</label>
          <input
            v-model="form.phone"
            type="tel"
            placeholder="(504) 9999-9999"
            class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div class="md:col-span-2">
          <label class="text-sm text-gray-600 block mb-1">Asunto</label>
          <input
            v-model="form.subject"
            type="text"
            placeholder="Consulta, duda, comentario..."
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
            Enviar mensaje
            <span class="text-xl">→</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});
</script>
