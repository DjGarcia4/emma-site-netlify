<template>
  <div
    class="fixed z-[9999] top-0 w-full p-3 transition-all duration-300"
    :class="{
      'bg-white shadow-md border-b border-primary/20': scrolled,
      'bg-transparent': !scrolled,
      hidden: hideHeader,
    }"
  >
    <div class="mx-10">
      <div class="flex gap-20 items-center">
        <!-- Logo dinámico -->
        <RouterLink to="/">
          <img
            :src="
              scrolled
                ? '/src/assets/imgs/logos/Logo.png'
                : '/src/assets/imgs/logos/LogoWhite.png'
            "
            alt="Logo"
            class="w-[70px] transition-all duration-300"
          />
        </RouterLink>

        <!-- Links dinámicos -->
        <div class="space-x-8">
          <RouterLink
            v-for="(route, index) in routes"
            :to="route.href"
            :key="index"
            class="text-base font-medium transition-all duration-300"
            :class="
              scrolled
                ? 'text-primary hover:text-secondary'
                : 'text-white hover:text-white/80'
            "
            active-class="underline underline-offset-4"
          >
            {{ route.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const hideHeader = ref(false);
const scrolled = ref(false);
let lastScrollTop = 0;

const routes = [
  { name: "Inicio", href: "/" },
  { name: "Sobre nosotros", href: "/about-us" },
  { name: "Servicios Medicos", href: "/services" },
  { name: "Voluntarios", href: "#" },
  { name: "Contactenos", href: "/#contactForm" },
];

const handleScroll = () => {
  const scrollTop = window.scrollY;

  hideHeader.value = scrollTop > lastScrollTop && scrollTop > 100;
  scrolled.value = scrollTop > 10;

  if (scrollTop === 0) {
    hideHeader.value = false;
    scrolled.value = false;
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
