<template>
  <section class="relative px-4 py-6">
    <!-- Fondo curvo verde -->
    <div
      class="relative z-0 max-w-7xl mx-auto h-72 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl"
    ></div>

    <!-- Cards flotando encima -->
    <div class="relative z-10 max-w-7xl mx-auto -mt-48">
      <h2 class="text-center text-3xl font-bold text-green-900 mb-12">
        Departamentos
      </h2>

      <!-- Departamento seleccionado -->
      <Transition
        mode="out-in"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <div
          v-if="selected"
          ref="selectedCard"
          key="selected-department"
          class="relative overflow-hidden bg-white rounded-xl p-6 shadow-md max-w-4xl mx-auto mt-4 mb-5 text-center transition-all duration-100 ease-in-out"
        >
          <button
            @click="selected = ''"
            class="absolute top-4 right-4 text-green-500 hover:text-green-700"
            aria-label="Cerrar información del departamento"
          >
            <font-awesome-icon icon="fa-solid fa-xmark" class="text-xl" />
          </button>

          <font-awesome-icon
            :icon="selected.icon"
            class="text-5xl text-green-700 mb-4"
          />
          <h3 class="text-2xl font-semibold text-green-900 mb-2">
            {{ selected.name }}
          </h3>
          <p class="text-gray-700 text-sm line-clamp-4">
            {{
              selected.description ||
              "Descripción no disponible por el momento."
            }}
          </p>
        </div>
      </Transition>

      <!-- Carrusel de departamentos -->
      <div class="relative">
        <!-- Flecha Izquierda -->
        <button
          @click="scrollLeft"
          class="absolute left-0 top-1/2 -translate-y-1/2 bg-green-600 text-white py-3 px-4.5 rounded-full shadow-lg z-20 cursor-pointer"
          aria-label="Ver departamentos anteriores"
        >
          <font-awesome-icon icon="fa-solid fa-chevron-left" />
        </button>

        <!-- Cards Scrollables -->
        <div
          ref="scrollContainer"
          class="overflow-x-auto no-scrollbar scroll-smooth flex gap-6 px-10"
        >
          <div
            v-for="dept in departmentStore.departments"
            :key="dept.name"
            @click="
              selected?.slug === dept.slug ? (selected = '') : (selected = dept)
            "
            class="flex-shrink-0 flex flex-col justify-center items-center text-center p-5 w-40 h-40 rounded-xl transition-all duration-300 cursor-pointer shadow-md hover:scale-105 hover:shadow-lg my-3"
            :class="
              selected?.slug === dept.slug
                ? 'bg-green-600 text-white'
                : 'bg-white text-green-800 hover:bg-green-100'
            "
            :aria-label="`Ver información de ${dept.name}`"
            role="button"
          >
            <font-awesome-icon :icon="dept.icon" class="text-3xl mb-3" />
            <p class="text-sm font-medium leading-tight text-center">
              {{ dept.name }}
            </p>
          </div>
        </div>

        <!-- Flecha Derecha -->
        <button
          @click="scrollRight"
          class="absolute right-0 top-1/2 -translate-y-1/2 bg-green-600 text-white py-3 px-4.5 rounded-full shadow-lg z-20 cursor-pointer"
          aria-label="Ver más departamentos"
        >
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </button>
      </div>

      <!-- Botón Ver mas departamentos -->
      <div class="mt-8 flex justify-end items-center">
        <RouterLink
          to="/departments/all"
          class="text-green-700 font-semibold flex items-center gap-2 hover:text-green-900 transition cursor-pointer"
        >
          Ver departamentos
          <font-awesome-icon icon="fas fa-arrow-right" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useDepartmentStore } from "@/stores/department";

const departmentStore = useDepartmentStore();
const selected = ref("");
const scrollContainer = ref(null);
const selectedCard = ref(null);

const beforeEnter = (el) => {
  el.style.opacity = "0";
  el.style.height = "0";
};

const enter = (el, done) => {
  const rect = el.getBoundingClientRect();
  const height = el.scrollHeight;

  el.style.transition = "height 0.4s ease, opacity 0.4s ease";
  el.style.height = height + "px";
  el.style.opacity = "1";

  el.addEventListener(
    "transitionend",
    () => {
      el.style.height = "auto"; // Reset
      done();
    },
    { once: true }
  );
};

const leave = (el, done) => {
  const height = el.scrollHeight;
  el.style.height = height + "px";
  el.style.opacity = "1";
  el.offsetHeight; // Force reflow

  el.style.transition = " 2s ease, opacity 0.4s ease";
  requestAnimationFrame(() => {
    el.style.height = "0";
    el.style.opacity = "0";
  });

  el.addEventListener(
    "transitionend",
    () => {
      done();
    },
    { once: true }
  );
};

const scrollRight = () => {
  scrollContainer.value.scrollLeft += 280;
};
const scrollLeft = () => {
  scrollContainer.value.scrollLeft -= 280;
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Animaciones para la tarjeta seleccionada */
</style>
