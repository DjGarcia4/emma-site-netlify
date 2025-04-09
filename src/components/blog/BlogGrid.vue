<template>
  <section class="px-4 md:px-12 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Grid de tarjetas -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(blog, index) in blogStore.blogs"
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
    </div>
  </section>
</template>

<script setup>
import { useBlogStore } from "@/stores/blog";
const blogStore = useBlogStore();
</script>
