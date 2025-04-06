import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";

export const useAppStore = defineStore("app", () => {
  const router = useRouter();

  const isModalOpen = computed(() => isShowProductModalOpen.value);

  const isShowProductModalOpen = ref(false);

  const handleModal = (modalName) => {
    if (modalName === "ShowProductModal") {
      isShowProductModalOpen.value = !isShowProductModalOpen.value;
    }
  };

  const goTo = (path) => {
    console.log(path);

    router.push({ path });
  };

  // Detect Device
  const deviceType = ref("unknown");

  const detectDevice = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android|iPhone|iPad|iPod/i.test(userAgent.toLowerCase())) {
      deviceType.value = "mobile";
    } else if (/tablet|iPad/i.test(userAgent.toLowerCase())) {
      deviceType.value = "tablet";
    } else {
      deviceType.value = "laptop";
    }
  };

  // Check Internet Connection
  const isOnline = ref(navigator.onLine);
  let firstCheck = true;

  const checkInternetConnection = () => {
    const updateOnlineStatus = () => {
      const wasOffline = !isOnline.value;
      isOnline.value = navigator.onLine;
      if (!firstCheck) {
        if (navigator.onLine) {
          toast.add({
            severity: "success",
            summary: "Conexión",
            detail: "Conexión a Internet establecida",
            life: 3000,
          });
          if (wasOffline) {
            screenStore.getAllScreens();
          }
        } else {
          toast.add({
            severity: "error",
            summary: "Conexión",
            detail: "Conexión a Internet perdida",
            life: 3000,
          });
        }
      }
      firstCheck = false;
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Check initial status
    updateOnlineStatus();
  };

  const isInternetConnected = computed(() => isOnline.value);

  onMounted(() => {
    detectDevice();
    checkInternetConnection();
  });

  return {
    deviceType,
    isModalOpen,
    isShowProductModalOpen,
    handleModal,
    goTo,
  };
});
