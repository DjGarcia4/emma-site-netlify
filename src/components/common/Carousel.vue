<template>
  <div
    class="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden transition-opacity duration-1000"
    :style="{
      backgroundImage: `url(${currentComponent.bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div
      class="absolute w-[70%] h-full bg-gradient-to-r from-[#10820c] to-[#]/80 z-0 sm:to-[#]/20"
    ></div>
    <div
      :key="currentComponent.id"
      class="w-full h-full flex flex-col justify-center items-start p-10 text-white duration-1000"
    >
      <h2 class="text-5xl md:text-6xl font-bold mb-4" data-aos="zoom-in">
        {{ currentComponent.title }}
      </h2>
      <p class="text-lg max-w-xl" data-aos="zoom-in" data-aos-delay="200">
        {{ currentComponent.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const carouselComponents = ref([
  {
    id: 1,
    title: "Atención compasiva, resultados excepcionales.",
    description:
      "Nuestro equipo de médicos y profesionales de la salud está comprometido con brindar una medicina de calidad, compasiva y personalizada para los pacientes.",
    bgImage: "/src/assets/imgs/carousel/3.avif",
  },
  {
    id: 2,
    title: "Impulsando tu camino hacia la salud",
    description:
      "Ofrecemos planes de atención personalizados adaptados a tus necesidades únicas, ayudándote a vivir una vida más plena y saludable.",
    bgImage: "/src/assets/imgs/carousel/2.avif",
  },
  {
    id: 3,
    title: "Tecnología médica de vanguardia",
    description:
      "Accedé a lo último en innovación médica y opciones de tratamiento con nuestras instalaciones de última generación.",
    bgImage: "/src/assets/imgs/carousel/1.avif",
  },
]);

const currentIndex = ref(0);
const currentComponent = computed(
  () => carouselComponents.value[currentIndex.value]
);

let interval = null;

onMounted(() => {
  AOS.init();
  interval = setInterval(() => {
    currentIndex.value =
      (currentIndex.value + 1) % carouselComponents.value.length;
  }, 6000); // Cambia cada 6 segundos
});

onUnmounted(() => {
  clearInterval(interval);
});

watch(currentIndex, () => {
  setTimeout(() => {
    AOS.refresh();
  }, 200); // Espera a que el DOM actualice
});
</script>

<style scoped>
/* Puedes añadir animaciones extra si querés */
</style>
