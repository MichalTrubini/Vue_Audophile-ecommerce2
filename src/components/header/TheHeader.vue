<template>
  <div class="bg-blackish flex justify-between items-center px-6 py-8">
    <img :src="hamburger" alt="hamburger" />
    <img :src="logo" alt="logo" />
    <img :src="cart" alt="cart" />
  </div>
</template>

<script lang="ts">
import logo from "../../assets/shared/desktop/logo.svg";
import cart from "../../assets/shared/desktop/icon-cart.svg";
import hamburger from "../../assets/shared/tablet/icon-hamburger.svg";

export default {
  name: "TheHeader",
  data() {
    return {
      logo: logo,
      cart: cart,
      hamburger: hamburger,
    };
  },
};
</script>
