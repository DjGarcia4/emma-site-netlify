<template>
  <div class="mx-10">
    <div class="flex gap-20 items-center">
      <RouterLink>
        <img
          src="/src/assets/imgs/logos/LogoWhite.png"
          alt="Logo"
          class="w-[80px]"
        />
      </RouterLink>
      <div class="space-x-8">
        <RouterLink
          v-for="(route, index) in routes"
          :to="route.href"
          :key="index"
          class="text-white text-base hover:text-primary transition-all"
          active-class="text-primary"
        >
          {{ route.name }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const routes = [
  { name: "Inicio", href: "/" },
  { name: "Sobre nosotros", href: "/about-us" },
  { name: "Servicios Medicos", href: "/services" },
  { name: "Voluntarios", href: "#" },
  { name: "Contactenos", href: "/#contactForm" },
];
</script>

<style scoped></style>
