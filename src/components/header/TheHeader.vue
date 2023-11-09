<template>
  <div
    class="bg-blackish flex justify-between items-center px-6  w-full dt:max-w-[1110px] dt:mx-auto md:px-10 dt:px-0"
    :style="{height: headerHeight + 'px'}"
  >
    <div v-if="isSmallScreen" class="md:w-1/12">
      <img :src="hamburger" alt="hamburger" />
    </div>
    <div class="md:w-10/12 mdd:w-auto">
      <img :src="logo" alt="logo" class="" />
    </div>
    <div v-if="!isSmallScreen">
      <SiteNavigation />
    </div>
    <div class="md:w-1/12 mdd:w-auto">
      <img :src="cart" alt="cart" class="" />
    </div>
  </div>
</template>

<script lang="ts">
import logo from "../../assets/shared/desktop/logo.svg";
import cart from "../../assets/shared/desktop/icon-cart.svg";
import hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import { inject } from "vue";
import SiteNavigation from "../shared/SiteNavigation.vue";
import { Header } from "../../types/enums";

export default {
  name: "TheHeader",
  data() {
    return {
      logo: logo,
      cart: cart,
      hamburger: hamburger,
      isSmallScreen: inject("isSmallScreen"),
      headerHeight: Header.height,
    };
  },
  components: { SiteNavigation },
  
};
</script>
