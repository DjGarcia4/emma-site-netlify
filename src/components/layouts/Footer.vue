<template>
  <footer
    class="relative bg-gradient-to-b from-white to-green-300 text-gray-700 pt-32 pb-10 px-6 md:px-16 overflow-hidden"
  >
    <!-- Curva decorativa -->
    <!-- Fondo decorativo en la parte superior del footer -->
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-0 z-0">
      <svg
        class="block w-full h-24 md:h-32 lg:h-40"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,224L80,192C160,160,320,96,480,106.7C640,117,800,203,960,229.3C1120,256,1280,224,1360,208L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>

    <!-- Contenido principal -->
    <div
      class="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm mt-10"
    >
      <!-- Columna 1 -->
      <div>
        <h2 class="text-base font-semibold mb-4 text-green-800">
          Centro de Cáncer Emma Romero de Callejas
        </h2>
        <ul class="space-y-2">
          <li class="flex items-center gap-2">
            <i class="fas fa-map-marker-alt text-green-600"></i> Blvd. Fuerzas
            Armadas, Tegucigalpa
          </li>
          <li class="flex items-center gap-2">
            <i class="fas fa-phone text-green-600"></i> +504 2234-5678
          </li>
          <li class="flex items-center gap-2">
            <i class="fas fa-envelope text-green-600"></i> contacto@ccerc.org
          </li>
        </ul>
      </div>

      <!-- Columna 2 -->
      <div class="grid grid-cols-2 gap-4">
        <ul class="space-y-2">
          <li>
            <RouterLink to="/nosotros" class="hover:text-green-700"
              >Nosotros</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/servicios" class="hover:text-green-700"
              >Servicios Médicos</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/voluntariado" class="hover:text-green-700"
              >Voluntariado</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/apoya" class="hover:text-green-700"
              >¡Apoya Ahora!</RouterLink
            >
          </li>
        </ul>
        <ul class="space-y-2">
          <li>
            <RouterLink to="/blog" class="hover:text-green-700"
              >Blog</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/contacto" class="hover:text-green-700"
              >Contacto</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/faq" class="hover:text-green-700"
              >Preguntas Frecuentes</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/terminos" class="hover:text-green-700"
              >Términos y Condiciones</RouterLink
            >
          </li>
        </ul>
      </div>

      <!-- Columna 3 -->
      <div>
        <h3 class="text-lg font-bold text-green-800 mb-2">Suscríbete</h3>
        <p class="text-sm mb-4 text-gray-600">
          Recibe novedades de salud y noticias del centro directamente a tu
          correo.
        </p>
        <form
          class="flex items-center rounded-full bg-white shadow overflow-hidden"
        >
          <input
            type="email"
            placeholder="tucorreo@ejemplo.com"
            class="px-4 py-2 w-full text-sm focus:outline-none"
          />
          <button
            type="submit"
            class="bg-primary hover:bg-green-700 text-white px-4 py-2 text-sm font-medium"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>

    <!-- Logo institucional -->
  </footer>
</template>
