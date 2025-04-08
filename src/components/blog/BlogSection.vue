<template>
  <div
    class="mx-auto max-w-7xl p-6 lg:p-3 flex flex-col md:flex-row items-center gap-5"
  >
    <section class="py-12 px-4 sm:px-6 lg:px-16 bg-white w-full">
      <div class="text-center mb-10">
        <p class="text-green-600 uppercase font-semibold">Blog de Noticias</p>
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">
          Últimas Publicaciones
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="(post, index) in posts"
          :key="index"
          class="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl"
        >
          <img :src="post.image" alt="" class="w-full h-48 object-cover" />
          <div class="p-5">
            <p class="text-sm text-gray-500 mb-2">{{ post.date }}</p>
            <h3
              class="text-lg font-semibold text-green-700 hover:text-green-900 cursor-pointer"
            >
              {{ post.title }}
            </h3>
            <p class="text-gray-600 mt-2 text-sm line-clamp-3">
              {{ post.description }}
            </p>
          </div>
        </article>
      </div>

      <!-- Botón Ver más noticias -->
      <div class="mt-8 flex justify-end items-center">
        <button
          @click="verMasNoticias"
          class="text-green-700 font-semibold flex items-center gap-2 hover:text-green-900 transition cursor-pointer"
        >
          Ver más noticias
          <font-awesome-icon icon="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
const posts = [
  {
    image: "/src/assets/imgs/blog/1.avif",
    date: "Agosto 5, 2025",
    title: "Los beneficios de la meditación para el estrés y la ansiedad",
    description:
      "Explora cómo la práctica diaria de mindfulness puede ayudarte a reducir los niveles de estrés, mejorar la concentración y promover una mejor calidad de vida emocional y física.",
  },
  {
    image: "/src/assets/imgs/blog/2.avif",
    date: "Agosto 6, 2025",
    title: "Comer saludable con bajo presupuesto: Tips y estrategias",
    description:
      "Descubre estrategias inteligentes para mantener una dieta balanceada sin gastar demasiado. Incluye ejemplos de comidas asequibles, listas de compras y consejos para el día a día.",
  },
  {
    image: "/src/assets/imgs/blog/3.avif",
    date: "Agosto 6, 2025",
    title: "La importancia de realizar chequeos oncológicos regularmente",
    description:
      "Realizar exámenes de detección de cáncer de forma periódica es clave para identificar enfermedades a tiempo. Aprende cuáles son los más recomendados y cuándo hacerlos.",
  },
];

const verMasNoticias = () => {
  console.log("Redirigiendo a más noticias...");
};
</script>

<style scoped>
/* Si Tailwind no tiene activado line-clamp, puedes importarlo como plugin */
</style>
