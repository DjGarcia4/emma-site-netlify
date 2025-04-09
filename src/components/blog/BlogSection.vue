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
          v-for="(blog, index) in blogStore.blogs.slice(0, 3)"
          :key="index"
          class="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl"
        >
          <img :src="blog.image" alt="" class="w-full h-48 object-cover" />
          <div class="p-5">
            <p class="text-sm text-gray-500 mb-2">{{ blog.date }}</p>
            <h3
              class="text-lg font-semibold text-green-700 hover:text-green-900 cursor-pointer"
            >
              {{ blog.title }}
            </h3>
            <p class="text-gray-600 mt-2 text-sm line-clamp-3">
              {{ blog.description }}
            </p>
          </div>
        </article>
      </div>

      <!-- Botón Ver más noticias -->
      <div class="mt-8 flex justify-end items-center">
        <RouterLink
          to="/blog"
          class="text-green-700 font-semibold flex items-center gap-2 hover:text-green-900 transition cursor-pointer"
        >
          Ver más noticias
          <font-awesome-icon icon="fas fa-arrow-right" />
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useBlogStore } from "@/stores/blog";
const blogStore = useBlogStore();
</script>

<style scoped>
/* Si Tailwind no tiene activado line-clamp, puedes importarlo como plugin */
</style>
