<template>
  <Header />
  <main class="">
    <RouterView />
  </main>
  <Footer />

  <Transition
    enter-active-class="animate__animated animate__backInRight   "
    leave-active-class="animate__animated animate__backOutRight"
  >
    <button
      v-show="showScrollButton"
      @click="scrollToTop"
      type="button"
      class="bg-primary z-50 fixed bottom-5 md:bottom-10 right-5 md:right-10 py-3 px-5 rounded-lg text-white font-bold text-[11px] md:text-xl shadow-xl cursor-pointer"
    >
      <ArrowUpTrayIcon class="size-5" />
    </button>
  </Transition>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import { ArrowUpTrayIcon } from "@heroicons/vue/24/outline";

import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";

import AOS from "aos";

const showScrollButton = ref(false);
const hideHeader = ref(false);
let lastScrollTop = 0;
const handleScroll = () => {
  const scrollTop = window.scrollY;
  showScrollButton.value = scrollTop > 100;

  hideHeader.value = scrollTop > lastScrollTop && scrollTop > 100;
  if (scrollTop === 0) {
    hideHeader.value = false;
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  AOS.init();
});
</script>

<style></style>
