<template>
  <section class="px-4 md:px-12 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Grid de tarjetas -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard
          v-for="(blog, index) in blogStore.blogs"
          :key="index"
          :blog="blog"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useBlogStore } from "@/stores/blog";
import BlogCard from "@/components/blog/BlogCard.vue";
const blogStore = useBlogStore();
</script>
