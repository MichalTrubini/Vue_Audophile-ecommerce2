<template>
  <header class="bg-blackish">

    <TheHeader />

  </header>
  <main></main>
  <footer class="mt-10 bg-blackish">
    <TheFooter />
  </footer>
</template>

<script lang="ts">
import TheHeader from './components/header/TheHeader.vue';
import { ref, onBeforeMount, onBeforeUnmount, provide } from "vue";
import { calculateIsSmallScreen } from "./utils/functions";
import TheFooter from './components/footer/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter
},
  setup() {
    const isSmallScreen = ref(calculateIsSmallScreen());

    const handleResize = () => {
      isSmallScreen.value = calculateIsSmallScreen();
    };

    onBeforeMount(() => {
      window.addEventListener("resize", handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });

    provide("isSmallScreen", isSmallScreen);

    return {
      isSmallScreen
    };
  },
};

</script>

<style>

body {
  font-family: 'Manrope', sans-serif;
}

h1 {
  font-weight: 700;
}

p {
  font-weight: 500;
  font-size: 0.9375rem;
  color: rgba(0, 0, 0, 0.5);
  line-height: 25px;
}

</style>
