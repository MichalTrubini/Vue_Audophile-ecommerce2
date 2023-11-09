<template>
  <header class="bg-blackish fixed w-full top-0 z-20">
    <TheHeader />
  </header>
  <main class="relative z-10 mt-[89px]">
    <router-view></router-view>
  </main>
  <footer class="bg-blackish">
    <TheFooter />
  </footer>
</template>

<script lang="ts">
import TheHeader from "./components/header/TheHeader.vue";
import { ref, onBeforeMount, onBeforeUnmount, provide } from "vue";
import { calculateIsSmallScreen } from "./utils/functions";
import TheFooter from "./components/footer/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  setup() {
    const isSmallScreen = ref(calculateIsSmallScreen());
    const screenWidth = ref(window.innerWidth);
    const screenHeight = ref(window.innerHeight);
    const handleResize = () => {
      isSmallScreen.value = calculateIsSmallScreen();
      screenWidth.value = window.innerWidth;
      screenHeight.value = window.innerHeight;
    };

    onBeforeMount(() => {
      window.addEventListener("resize", handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });

    provide("isSmallScreen", isSmallScreen);
    provide("screenWidth", screenWidth);
    provide("screenHeight", screenHeight);
    return {
      isSmallScreen,
      screenWidth
    };
  },
};
</script>

<style>
body {
  font-family: "Manrope", sans-serif;
}

h1, h2, h3 {
  font-weight: 700;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
}

p {
  font-weight: 500;
  font-size: 0.9375rem;
  color: rgba(0, 0, 0, 0.5);
  line-height: 25px;
}
</style>
