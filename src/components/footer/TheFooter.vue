<template>
  <div
    class="maxLimit pagePadding bg-blackish pt-[52px] pb-[38px] text-center md:pt-[60px] md:pb-[46px] dt:pt-[75px] lg:px-0 relative customLine"
  >
    <div class="mdd:flex justify-between items-center mdd:mb-9">
      <div class="mb-[50px] mdd:mb-0">
        <img :src="logo" alt="audiophile logo" class="mx-auto md:mx-0" />
      </div>
      <div class="mb-[48px] md:mb-8 mdd:mb-0">
        <SiteNavigation />
      </div>
    </div>
    <div class="gridFooter grid">
      <p
        class="gridText text-white opacity-50 mb-[48px] md:text-left md:mb-[80px] mdd:mb-[56px]"
      >
        {{ text }}
      </p>
      <div class="gridCopyright mb-12 md:mb-0 md:text-left">
        <TheCopyright />
      </div>
      <div class="gridSocial mdd:flex mdd:justify-end">
        <TheSocialBlock />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import logo from "../../assets/shared/desktop/logo.svg";
import SiteNavigation from "../shared/SiteNavigation.vue";
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
  components: { SiteNavigation, TheCopyright, TheSocialBlock },
};
</script>

<style scoped>
.customLine::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background-color: #d87d4a;
}

@media screen and (min-width: 768px) {
  .customLine::before {
    left: 2.5rem;
    transform: none;
  }
  .gridFooter {
    grid-template-columns: 1fr;
    grid-template-areas:
      "text text"
      "copy social";
  }

  .gridText {
    grid-area: text;
  }

  .gridSocial {
    grid-area: social;
  }

  .gridCopy {
    grid-area: copy;
  }
}

@media screen and (min-width: 821px) {
  .gridFooter {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "text social"
      "copy social";
  }

  .gridText {
    grid-area: text;
  }

  .gridSocial {
    grid-area: social;
  }

  .gridCopy {
    grid-area: copy;
  }
}
</style>
