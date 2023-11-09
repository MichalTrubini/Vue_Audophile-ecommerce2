<template>
  <div class="dt:max-w-[1110px] dt:mx-auto">
    <div
      class="bg-brick rounded-lg text-center mb-6 pt-[60px] pb-[55px] relative circles md:pb-[64px] lg:flex lg:pb-0 lg:justify-between dt:mb-12 dt:pt-[100px] dt:px-[95px]"
    >
      <div class="overflow-hidden relative lg:left-[50px] dt:left-[25px]">
        <img
          :src="
            screenWidth < size.tabletBreakpoint
              ? productOne.imageZX9mobile
              : screenWidth >= size.tabletBreakpoint &&
                screenWidth < size.desktopBreakpoint
              ? productOne.imageZX9tablet
              : productOne.imageZX9desktop
          "
          alt="ZX9 SPEAKER"
          class="w-[172px] mx-auto mb-8 relative z-10 md:mb-16 lg:w-[310px] lg:mb-0 lg:bottom-[-15px] dt:w-[410px]"
        />
      </div>
      <div class="lg:w-1/2 dt:w-[350px] dt:pt-[50px]">
        <h3
          class="text-white text-[36px] mb-6 tracking-[1.3px] px-8 leading-10 md:text-[56px] md:w-[260px] md:mx-auto md:px-0 md:leading-[56px] lg:text-left lg:mx-0"
        >
          {{ productOne.title }}
        </h3>
        <p
          class="text-white opacity-75 mb-6 md:w-[350px] md:mx-auto md:mb-10 lg:text-left lg:mx-0"
        >
          {{ productOne.description }}
        </p>
        <div class="dt:text-left">
          <LinkToPage
            :link="productOne.link"
            :text="'see product'"
            :type="'darkFull'"
          />
        </div>
      </div>
    </div>
    <div class="rounded-lg relative mb-6 dt:mb-12">
      <img
        :src="
          screenWidth < size.tabletBreakpoint
            ? productTwo.imageZX7mobile
            : screenWidth >= size.tabletBreakpoint &&
              screenWidth < size.desktopBreakpoint
            ? productTwo.imageZX7tablet
            : productTwo.imageZX7desktop
        "
        :alt="productTwo.title"
        class="rounded-lg lg:max-w-none w-full"
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
    <div class="flex flex-col gap-6 md:flex-row dt:gap-[30px]">
      <div class="md:w-1/2">
        <img
          :src="
            screenWidth < size.tabletBreakpoint
              ? productThree.imageYX1mobile
              : screenWidth >= size.tabletBreakpoint &&
                screenWidth < size.desktopBreakpoint
              ? productThree.imageYX1tablet
              : productThree.imageYX1desktop
          "
          alt="YX1 EARPHONES"
          class="rounded-lg w-full"
        />
      </div>
      <div
        class="bg-gray rounded-lg flex flex-col justify-center py-10 px-6 md:w-1/2 md:px-[40px] dt:px-[96px]"
      >
        <h3 class="tracking-[2px] text-[28px] mb-8">
          {{ productThree.title }}
        </h3>
        <LinkToPage
          :link="'/product/yx1-earphones'"
          :text="'see product'"
          :type="'darkEmpty'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import imageZX9mobile from "../../../assets/home/mobile/image-speaker-zx9.png";
import imageZX9tablet from "../../../assets/home/tablet/image-speaker-zx9.png";
import imageZX9desktop from "../../../assets/home/desktop/image-speaker-zx9.png";
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
        imageZX9mobile: imageZX9mobile,
        imageZX9tablet: imageZX9tablet,
        imageZX9desktop: imageZX9desktop,
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

@media screen and (min-width: 1024px) {
  .circles {
    background: #d87d4a url(../../../assets/home/desktop/pattern-circles.svg)
      -230px -50px/900px no-repeat;
  }
}

@media screen and (min-width: 1440px) {
  .circles {
    background: #d87d4a url(../../../assets/home/desktop/pattern-circles.svg)
      -130px -50px/900px no-repeat;
  }
}
</style>
