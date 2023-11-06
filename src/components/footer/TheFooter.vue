<template>
  <div
    class="bg-blackish px-6 pt-[52px] pb-[38px] text-center max-w-[1110px] mx-auto md:px-10 md:pt-[60px] md:pb-[46px]"
  >
    <div class="mdd:flex justify-between items-center mdd:mb-9">
      <div class="mb-[50px] mdd:mb-0">
        <img :src="logo" alt="audiophile logo" class="mx-auto md:mx-0" />
      </div>
      <div class="mb-[48px] md:mb-8 mdd:mb-0">
        <Navigation />
      </div>
    </div>
    <p class="text-white opacity-50 mb-[48px] md:text-left">{{ text }}</p>
    <div class="md:flex justify-between items-center">
      <div class="mb-12 md:mb-0">
        <TheCopyright />
      </div>
      <div>
        <TheSocialBlock />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import logo from "../../assets/shared/desktop/logo.svg";
import Navigation from "../header/Navigation.vue";
import TheCopyright from "./TheCopyright.vue";
import TheSocialBlock from "./TheSocialBlock.vue";

export default {
  name: "TheFooter",
  data() {
    return {
      logo: logo,
      text: "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.",
    };
  },
  components: { Navigation, TheCopyright, TheSocialBlock },
};
</script>
