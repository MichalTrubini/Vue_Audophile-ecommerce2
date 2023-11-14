<template>
  <div
    class="maxLimit pagePadding bg-blackish flex justify-between items-center w-full border-b-[1px] border-borderHeader lg:px-0"
    :style="{ height: headerHeight + 'px' }"
  >
    <div v-if="isSmallScreen" class="md:w-1/12">
      <img :src="hamburger" alt="hamburger" />
    </div>
    <div class="md:w-10/12 mdd:w-auto">
      <router-link to="/">
        <img :src="logo" alt="logo" class="hover:cursor-pointer" />
      </router-link>
    </div>
    <div v-if="!isSmallScreen">
      <SiteNavigation />
    </div>
    <div class="md:w-1/12 mdd:w-auto relative">
      <img :src="cart" alt="cart" class="hover:cursor-pointer" />
      <div class="absolute top-[10px] right-[-10px] z-10 bg-brick rounded-full flex justify-center items-center px-[7px] py-[3px]">
      <p class=" text-white text-xs">{{cartItemsQty}}</p>
    </div>
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
import { mapGetters } from "vuex";

export default {
  name: "TheHeader",
  computed: {
    ...mapGetters(["getCartItemsQty"]),
    cartItemsQty() {
      return this.getCartItemsQty;
    },
  },
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
