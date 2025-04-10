<template>
  <section class="relative">
    <!-- <h2
      data-aos="zoom-in"
      class="text-2xl md:text-3xl font-bold text-center text-primary mb-16"
    >
      Nuestra Historia
    </h2> -->
    <div class="relative w-full max-w-5xl mx-auto">
      <div
        class="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-primary z-0"
      ></div>

      <div
        v-for="(event, index) in events"
        :key="index"
        class="mb-24 relative z-10 h-auto flex"
      >
        <!-- Texto sticky -->
        <div
          class="w-1/2 px-2 md:px-4 sticky top-20 md:top-28 self-start"
          :class="index % 2 === 0 ? 'order-2 text-left' : 'order-1 text-right'"
          data-aos="zoom-in-up"
        >
          <div class="bg-white rounded-xl shadow-lg p-4 md:p-6 relative">
            <h3 class="text-lg md:text-xl font-semibold">{{ event.title }}</h3>
            <p class="text-xs md:text-sm text-gray-500 mb-1 md:mb-2">
              {{ event.date }}
            </p>
            <p class="text-sm md:text-base text-gray-700">
              {{ event.description }}
            </p>
          </div>
        </div>

        <!-- Imágenes -->
        <div
          class="w-1/2 px-2 md:px-4 space-y-2 md:space-y-4 overflow-hidden"
          :class="index % 2 === 0 ? 'order-1' : 'order-2'"
        >
          <img
            v-for="(img, i) in event.images"
            :key="i"
            :src="img"
            :alt="`${event.title} imagen ${i + 1}`"
            class="rounded-xl shadow-md object-cover w-full h-32 md:h-64 cursor-pointer"
            @click="openLightbox(event.images, i)"
            data-aos="zoom-in-up"
          />
        </div>

        <!-- Línea y punto -->
        <div
          class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <span
            class="w-4 md:w-5 h-4 md:h-5 bg-primary rounded-full border-4 border-white block"
          />
        </div>
      </div>
    </div>
    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="currentImages"
      :index="indexRef"
      @hide="visibleRef = false"
    />
  </section>
</template>

<script setup>
import VueEasyLightbox from "vue-easy-lightbox";
import { ref } from "vue";

const visibleRef = ref(false);
const indexRef = ref(0);
const currentImages = ref([]);

function openLightbox(images, index) {
  currentImages.value = images;
  indexRef.value = index;
  visibleRef.value = true;
}

const events = ref([
  {
    date: "Octubre 1990",
    title: "Inauguración del centro",
    description:
      "Se inaugura la primera obra del Centro de Cáncer Emma Romero de Callejas.",
    images: ["/imgs/timeline/1990-1.jpg", "/imgs/timeline/1990-2.jpg"],
  },
  {
    date: "1991",
    title: "Primer Módulo: Radioterapia",
    description:
      "Búnker para Radioterapia con Unidad de Cobalto 60 Theratron 80 donada por World Opportunity International.",
    images: ["/imgs/timeline/1991-1.jpg", "/imgs/timeline/1991-2.jpg"],
  },
  {
    date: "1993",
    title: "Segundo Módulo",
    description:
      "Radiología, Radiofluoroscopía, Mamografía, Ultrasonido y Administración.",
    images: ["/imgs/timeline/1993-1.jpg", "/imgs/timeline/1993-2.jpg"],
  },
  {
    date: "1994",
    title: "Tercer Módulo",
    description:
      "Laboratorio, Quimioterapia, Clínicas, Auditorio, Farmacia y Trabajo Social.",
    images: [
      "/imgs/timeline/1994-1.png",
      "/imgs/timeline/1994-2.jpg",
      "/imgs/timeline/1994-3.jpg",
      "/imgs/timeline/1994-4.jpg",
      "/imgs/timeline/1994-5.jpg",
      "/imgs/timeline/1994-6.jpg",
    ],
  },
  {
    date: "1995",
    title: "Primer Grupo de Apoyo",
    description:
      "Organización del primer grupo de apoyo de sobrevivientes de cáncer de mama.",
    images: ["/imgs/timeline/1995-1.png"],
  },
  {
    date: "1999",
    title: "Cuarto Módulo",
    description: "Medicina nuclear y cómputo.",
    images: ["/imgs/timeline/1999-1.jpg"],
  },
  {
    date: "2000",
    title: "Quinto y Sexto Módulo",
    description: "Registro de cáncer, quirófano de braquiterapia y endoscopia.",
    images: [
      "/imgs/timeline/2000-1.jpg",
      "/imgs/timeline/2000-2.jpg",
      "/imgs/timeline/2000-3.jpg",
      "/imgs/timeline/2000-4.jpg",
      "/imgs/timeline/2000-5.jpg",
      "/imgs/timeline/2000-6.jpg",
    ],
  },
  {
    date: "2000s",
    title: "Brigadas y Casos Especiales",
    description:
      "Primera paciente de Leucemia Linfocítica Aguda, brigadas en 298 municipios, detección de cáncer de próstata, cérvix y mama en población universitaria.",
    images: [
      "/imgs/timeline/2000-7.jpg",
      "/imgs/timeline/2000-8.jpg",
      "/imgs/timeline/2000-9.jpg",
      "/imgs/timeline/2000-10.jpg",
      "/imgs/timeline/2000-11.jpg",
      "/imgs/timeline/2000-12.jpg",
      "/imgs/timeline/2000-13.jpg",
      "/imgs/timeline/2000-14.jpg",
      "/imgs/timeline/2000-15.jpg",
      "/imgs/timeline/2000-16.jpg",
      "/imgs/timeline/2000-17.jpg",
      "/imgs/timeline/2000-18.jpg",
      "/imgs/timeline/2000-19.jpg",
      "/imgs/timeline/2000-20.jpg",
    ],
  },
  {
    date: "Años 2000s",
    title: "Convenios y Reconocimientos",
    description:
      "Convenios con la UNAH y reconocimiento al Dr. Antonio Barrios por la Universidad de Tulane.",
    images: ["/imgs/timeline/2000-21.png", "/imgs/timeline/2000-22.png"],
  },
  {
    date: "15 noviembre 2013",
    title: "Centro de Teleterapia",
    description:
      "Inauguración del centro de Teleterapia con Acelerador Lineal y Braquiterapia de alta tasa de dosis.",
    images: [
      "/imgs/timeline/2013-1.jpg",
      "/imgs/timeline/2013-2.jpg",
      "/imgs/timeline/2013-3.jpg",
      "/imgs/timeline/2013-4.jpg",
      "/imgs/timeline/2013-5.jpg",
      "/imgs/timeline/2013-6.jpg",
      "/imgs/timeline/2013-7.jpg",
    ],
  },
]);

defineExpose({ VueEasyLightbox });
</script>

<style scoped></style>
