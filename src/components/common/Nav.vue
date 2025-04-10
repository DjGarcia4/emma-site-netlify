<template>
  <div
    class="fixed z-[9999] top-0 w-full p-3 transition-all duration-300"
    :class="{
      'bg-white shadow-md border-b border-primary/20':
        scrolledOrForced || isMenuOpen,
      'bg-transparent': !scrolledOrForced && !isMenuOpen,
      hidden: hideHeader,
    }"
  >
    <div class="mx-10">
      <div class="flex items-center justify-between md:justify-start md:gap-10">
        <!-- Logo -->
        <RouterLink to="/">
          <img
            :src="
              scrolledOrForced || isMenuOpen
                ? '/src/assets/imgs/logos/Logo.png'
                : '/src/assets/imgs/logos/LogoWhite.png'
            "
            alt="Logo"
            class="w-[50px] md:w-[70px] transition-all duration-300"
          />
        </RouterLink>

        <!-- Botón Hamburguesa Mobile -->
        <button
          class="md:hidden focus:outline-none"
          @click="isMenuOpen = !isMenuOpen"
        >
          <!-- Icono dinámico -->
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            :class="
              scrolledOrForced || isMenuOpen ? 'text-primary' : 'text-white'
            "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Links Desktop -->
        <div class="space-x-8 hidden md:flex">
          <template v-for="(route, index) in routes" :key="index">
            <a
              v-if="route.name === 'Contactenos'"
              href="#"
              @click.prevent="scrollToContact"
              class="text-base font-medium transition-all duration-300"
              :class="
                scrolledOrForced || isMenuOpen
                  ? 'text-primary hover:text-secondary'
                  : 'text-white hover:text-white/80'
              "
            >
              {{ route.name }}
            </a>
            <RouterLink
              v-else
              :to="route.href"
              class="text-base font-medium transition-all duration-300"
              :class="
                scrolledOrForced || isMenuOpen
                  ? 'text-primary hover:text-secondary'
                  : 'text-white hover:text-white/80'
              "
              exact-active-class="underline underline-offset-4"
            >
              {{ route.name }}
            </RouterLink>
          </template>
        </div>
      </div>

      <!-- Menú Mobile desplegable -->
      <transition name="fade">
        <div v-if="isMenuOpen" class="md:hidden mt-4 space-y-4 flex flex-col">
          <template v-for="(route, index) in routes" :key="index">
            <a
              v-if="route.name === 'Contactenos'"
              href="#"
              @click.prevent="scrollToContact"
              class="text-base font-medium transition-all duration-300 text-primary hover:text-secondary"
            >
              {{ route.name }}
            </a>
            <RouterLink
              v-else
              :to="route.href"
              class="text-base font-medium transition-all duration-300 text-primary hover:text-secondary"
              exact-active-class="underline underline-offset-4"
            >
              {{ route.name }}
            </RouterLink>
          </template>
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { useRoute } from "vue-router";

const isMenuOpen = ref(false);
const route = useRoute();
const isNotHome = ref(false);

watch(
  () => route.path,
  (newPath) => {
    isNotHome.value = newPath !== "/";
    isMenuOpen.value = false; // cierra menú al cambiar de ruta
  },
  { immediate: true }
);

const hideHeader = ref(false);
const scrolled = ref(false);
let lastScrollTop = 0;

const scrolledOrForced = computed(() => {
  return scrolled.value || isNotHome.value;
});

const routes = [
  { name: "Inicio", href: "/" },
  { name: "Sobre nosotros", href: "/about-us" },
  { name: "Servicios", href: "/services" },
  // { name: "Departamentos", href: "/departments" },
  { name: "Contactenos", href: "#" },
];

const handleScroll = () => {
  const scrollTop = window.scrollY;

  if (scrollTop !== lastScrollTop) {
    isMenuOpen.value = false; // 👈 cierra menú si se hace scroll
  }

  hideHeader.value = scrollTop > lastScrollTop && scrollTop > 100;
  scrolled.value = scrollTop > 10;

  if (scrollTop === 0) {
    hideHeader.value = false;
    scrolled.value = false;
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
};

const scrollToContact = () => {
  const el = document.getElementById("contactForm");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
