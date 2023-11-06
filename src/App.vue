<template>
  <header>

    <TheHeader />

  </header>
  <main></main>
  <footer></footer>
</template>

<script lang="ts">
import TheHeader from './components/header/TheHeader.vue';

export default {
  components: {
    TheHeader,
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
}

</style>
