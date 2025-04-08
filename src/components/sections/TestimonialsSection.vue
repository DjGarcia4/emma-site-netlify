<template>
  <section
    class="bg-gradient-to-r from-green-50 to-green-100 py-16 px-6 lg:px-20 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
      <div class="flex flex-col gap-5">
        <!-- Título -->
        <div>
          <p class="text-green-600 font-semibold tracking-wide uppercase mb-2">
            TESTIMONIOS
          </p>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">
            Lo que nuestros pacientes dicen<br class="hidden sm:block" />
            sobre nosotros
          </h2>
        </div>

        <!-- Botones de navegación -->
        <div class="flex gap-3">
          <button
            @click="scrollLeft"
            class="w-9 h-9 rounded-full border border-green-400 text-green-600 hover:bg-green-100 transition"
          >
            <svg
              class="w-4 h-4 mx-auto"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            @click="scrollRight"
            class="w-9 h-9 rounded-full border border-green-400 text-green-600 hover:bg-green-100 transition"
          >
            <svg
              class="w-4 h-4 mx-auto"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Scroll horizontal con testimonios -->
      <div
        ref="scrollContainer"
        class="overflow-x-auto no-scrollbar scroll-smooth"
      >
        <div class="flex gap-6 min-w-max py-10">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="flex-shrink-0 relative bg-white rounded-2xl shadow-lg px-6 pt-14 pb-6 text-center w-72"
          >
            <img
              :src="testimonial.img"
              :alt="testimonial.name"
              class="w-20 h-20 object-cover rounded-full border-4 border-white absolute left-1/2 -top-10 transform -translate-x-1/2 shadow-md"
            />
            <h3 class="text-sm font-bold text-gray-800 uppercase mt-10">
              {{ testimonial.name }}
            </h3>
            <div class="flex justify-center gap-1 my-2">
              <template v-for="i in testimonial.rating" :key="i">
                <svg
                  class="w-4 h-4 text-green-500 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 15l-5.878 3.09L5.5 11.545 1 7.91l6.06-.91L10 2l2.94 5 6.06.91-4.5 3.635 1.378 6.545z"
                  />
                </svg>
              </template>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ testimonial.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const scrollContainer = ref(null);

const scrollLeft = () => {
  scrollContainer.value.scrollLeft -= 300;
};
const scrollRight = () => {
  scrollContainer.value.scrollLeft += 300;
};

const testimonials = ref([
  {
    name: "Laurence Vendetta",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Recientemente tuve que llevar a mi hijo y quedé impresionada con el cuidado recibido. El pediatra fue muy amable y todo el personal fue atento.",
  },
  {
    name: "Paulo Hubert",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    text: "Tuve una gran experiencia. El personal fue amable y profesional, y el médico se tomó el tiempo para responder a todas mis preguntas y preocupaciones.",
  },
  {
    name: "Camila Rivas",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 4,
    text: "Muy buen servicio y atención. El proceso fue rápido y todo el equipo fue cordial y atento desde el inicio hasta el final.",
  },
  {
    name: "Luis Méndez",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 5,
    text: "Los doctores explicaron todo con paciencia. Sentí confianza desde que entré. Volvería sin dudarlo.",
  },
  {
    name: "Isabella Gómez",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    text: "Me encantó la calidad humana del personal. Se nota que les importa el bienestar del paciente. 100% recomendado.",
  },
]);
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
