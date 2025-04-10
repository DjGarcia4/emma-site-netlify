<template>
  <section
    v-if="blog"
    class="mt-[90px] md:mt-[120px] max-w-4xl mx-auto px-4 space-y-8"
  >
    <!-- Imagen destacada -->
    <img
      v-if="blog.image"
      :src="blog.image"
      alt="Imagen del blog"
      class="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
    />

    <!-- Fecha y título -->
    <div class="space-y-2">
      <p class="text-sm text-gray-500">{{ blog.date }}</p>
      <h1 class="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
        {{ blog.title }}
      </h1>
    </div>

    <!-- Contenido -->
    <div class="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
      {{ blog.description }}
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useBlogStore } from "@/stores/blog";

const blogStore = useBlogStore();
const route = useRoute();

const blog = ref(null);

onMounted(() => {
  blog.value = blogStore.blogs.find((i) => i.id == route.params.id);
});
</script>
