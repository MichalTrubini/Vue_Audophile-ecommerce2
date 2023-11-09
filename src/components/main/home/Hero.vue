<template>

    <div
      class="px-6 text-center pb-[112px] pt-[108px] relative md:pt-[150px] hero dt:max-w-[1110px] dt:mx-auto dt:px-0 dt:pt-[128px] dt:pb-[158px]"
      :style="{
        height: isSmallScreen ? screenHeight - headerHeight + 'px' : 'auto',
      }"
    >
      <p
        class="text-white opacity-50 mb-4 uppercase tracking-[10px] text-sm dt:text-left"
      >
        {{ subtitle }}
      </p>
      <h1
        class="text-white text-[36px] tracking-[1.3px] mb-6 w-[328px] mx-auto md:w-[396px] md:text-[56px] leading-[58px] dt:text-left dt:mx-0"
      >
        {{ title }}
      </h1>
      <p
        class="text-white mb-7 opacity-75 w-[328px] mx-auto md:w-[349px] dt:text-left dt:mx-0"
      >
        {{ description }}
      </p>
      <div class="dt:text-left">
        <LinkToPage :link="link" :type="'lightFull'" :text="'see product'" />
      </div>
    </div>
</template>

<script lang="ts">
import LinkToPage from "../../shared/LinkToPage.vue";
import headerMobile from "../../../assets/home/mobile/image-header.jpg";
import { inject, Ref, ref } from "vue";
import { Header } from "../../../types/enums";

export default {
  name: "Hero",
  components: {
    LinkToPage,
  },
  data() {
    return {
      subtitle: "New Product",
      title: "XX99 Mark II Headphones",
      description:
        "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
      link: "/product/yx1-earphones",
      headerMobile,
      isSmallScreen: inject("isSmallScreen", ref(false)) as Ref<boolean>,
      screenHeight: inject("screenHeight", ref(0)) as Ref<number>,
      headerHeight: Header.height,
    };
  },
};
</script>

<style scoped>
.hero {
  background-image: url("../../../assets/home/mobile/image-header.jpg");
  background-size: 375px;
  background-position-x: center;
  background-repeat: no-repeat;
}
@media screen and (min-width: 768px) {
  .hero {
    background-image: url("../../../assets/home/tablet/image-header.jpg");
    background-size: contain;
  }
}
@media screen and (min-width: 1440px) {
  .hero {
    background-image: url("../../../assets/home/desktop/image-hero.jpg");
    background-size: 1300px;
    background-position-x: 0px;
    background-position-y: -70px;
  }
}
</style>
