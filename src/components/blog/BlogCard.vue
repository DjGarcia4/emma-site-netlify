<template>
  <RouterLink
    :to="{ name: 'blog', params: { id: blog.id } }"
    class="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl flex flex-col justify-between"
  >
    <div>
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
    </div>
    <div class="flex justify-end p-3">
      <RouterLink
        :to="{ name: 'blog', params: { id: blog.id } }"
        class="bg-green-200 rounded-full py-2 px-3 text-primary"
      >
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </RouterLink>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  blog: {
    type: Object,
  },
});
</script>

<style scoped></style>
