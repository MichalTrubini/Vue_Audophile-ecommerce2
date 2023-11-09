<template>
  <div>
    <div
      class="bg-brick rounded-lg text-center mb-6 px-6 pt-[60px] pb-[55px] relative circles md:pb-[64px]"
    >
      <img
        :src="productOne.imageZX9"
        alt="ZX9 SPEAKER"
        class="w-[172px] mx-auto mb-8 relative z-10 md:mb-16"
      />
      <h3
        class="text-white text-[36px] mb-6 tracking-[1.3px] px-8 leading-10 md:text-[56px] md:w-[260px] md:mx-auto md:px-0 md:leading-[56px]"
      >
        {{ productOne.title }}
      </h3>
      <p class="text-white opacity-75 mb-6 md:w-[350px] md:mx-auto md:mb-10">
        {{ productOne.description }}
      </p>
      <LinkToPage
        :link="productOne.link"
        :text="'see product'"
        :type="'darkFull'"
      />
    </div>
    <div class="rounded-lg relative mb-6">
      <img
        :src="
          screenWidth < size.tabletBreakpoint
            ? productTwo.imageZX7mobile
            : productTwo.imageZX7tablet
        "
        :alt="productTwo.title"
        class="rounded-lg"
      />
      <div
        class="absolute top-0 w-full h-full flex flex-col justify-center items-start px-6 md:px-[62px]"
      >
        <h3 class="text-[28px] tracking-[2px] mb-8">{{ productTwo.title }}</h3>
        <LinkToPage
          :link="'/product/zx7-speaker'"
          :text="'see product'"
          :type="'darkEmpty'"
        />
      </div>
    </div>
    <div class="flex flex-col gap-6 md:flex-row">
      <div class="md:w-1/2">
        <img :src="screenWidth < size.tabletBreakpoint ? productThree.imageYX1mobile : productThree.imageYX1tablet" alt="YX1 EARPHONES" class="rounded-lg"/>
      </div>
      <div class="bg-gray rounded-lg flex flex-col justify-center py-10 px-6 md:w-1/2 md:px-[40px]">
        <h3 class="tracking-[2px] text-[28px] mb-8">{{productThree.title}}</h3>
        <LinkToPage :link="'/product/yx1-earphones'" :text="'see product'" :type="'darkEmpty'"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import imageZX9 from "../../../assets/home/mobile/image-speaker-zx9.png";
import imageZX7mobile from "../../../assets/home/mobile/image-speaker-zx7.jpg";
import imageZX7tablet from "../../../assets/home/tablet/image-speaker-zx7.jpg";
import imageZX7desktop from "../../../assets/home/desktop/image-speaker-zx7.jpg";
import imageYX1mobile from "../../../assets/home/mobile/image-earphones-yx1.jpg";
import imageYX1tablet from "../../../assets/home/tablet/image-earphones-yx1.jpg";
import imageYX1desktop from "../../../assets/home/desktop/image-earphones-yx1.jpg";
import circles from "../../../assets/home/desktop/pattern-circles.svg";
import LinkToPage from "../../shared/LinkToPage.vue";
import { inject, ref, Ref } from "vue";
import { Size } from "../../../types/enums";

export default {
  name: "BlockHotProducts",
  components: {
    LinkToPage,
  },
  data() {
    return {
      productOne: {
        title: "ZX9 SPEAKER",
        description:
          "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
        imageZX9: imageZX9,
        circles: circles,
        link: "/product/zx9-speaker",
      },
      productTwo: {
        title: "ZX7 SPEAKER",
        imageZX7mobile: imageZX7mobile,
        imageZX7tablet: imageZX7tablet,
        imageZX7desktop: imageZX7desktop,
      },
      productThree: {
        title: "YX1 EARPHONES",
        imageYX1mobile: imageYX1mobile,
        imageYX1tablet: imageYX1tablet,
        imageYX1desktop: imageYX1desktop,
      },
      screenWidth: inject("screenWidth", ref(0)) as Ref<number>,
      size: Size,
    };
  },
};
</script>

<style scoped>
.circles {
  background: #d87d4a url(../../../assets/home/desktop/pattern-circles.svg)
    center -120px/550px no-repeat;
}

@media screen and (min-width: 768px) {
  .circles {
    background: #d87d4a url(../../../assets/home/desktop/pattern-circles.svg)
      center -250px/900px no-repeat;
  }
}
</style>
