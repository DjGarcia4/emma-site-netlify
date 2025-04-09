<template>
  <div class="mt-[75px] md:mt-[120px] space-y-7">
    <div
      class="mx-auto max-w-7xl p-6 lg:p-3 flex flex-col md:flex-row items-center gap-5"
    >
      <section class="px-4 sm:px-6 bg-white w-full">
        <div class="text-center">
          <p class="text-green-600 uppercase font-semibold">Blog de Noticias</p>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">
            Últimas Publicaciones
          </h2>
        </div>
      </section>
    </div>
    <BlogGrid />
  </div>
</template>

<script setup>
import BlogGrid from "@/components/blog/BlogGrid.vue";
</script>

<style scoped></style>
