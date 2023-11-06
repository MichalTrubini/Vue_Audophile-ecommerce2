<template>
  <div :style="{ width: screenWidth + 'px' }">Hello</div>
</template>

<script lang="ts">
import { inject } from "vue";

export default {
  name: "AudioGear",
  data() {
    return {
      screenWidth: inject("screenWidth"),
    };
  },
};
</script>
