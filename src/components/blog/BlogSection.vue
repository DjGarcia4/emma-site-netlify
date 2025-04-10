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
        <BlogCard
          v-for="(blog, index) in blogStore.blogs.slice(0, 3)"
          :key="index"
          :blog="blog"
        />
      </div>

      <!-- Botón Ver más noticias -->
      <div class="mt-8 flex justify-end items-center">
        <RouterLink
          to="/blogs"
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
import BlogCard from "@/components/blog/BlogCard.vue";
import { useBlogStore } from "@/stores/blog";
const blogStore = useBlogStore();
</script>

<style scoped>
/* Si Tailwind no tiene activado line-clamp, puedes importarlo como plugin */
</style>
