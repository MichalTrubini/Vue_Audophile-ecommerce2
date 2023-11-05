<template>
  <div>
    <img :src="logo" alt="logo" />
  </div>
</template>

<script lang="ts">
import logo from "../../assets/shared/desktop/logo.svg";

export default {
  name: "TheHeader",
  data() {
    return {
      logo: logo,
    };
  },
};
</script>
