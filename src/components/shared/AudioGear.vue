<template>
  <div class="max-w-[1110px] m-auto text-center lg:flex lg:flex-row-reverse lg:gap-[125px] lg:items-center">
    <div class="lg:w-1/2">
      <img
        :src="
          screnWidth < size.tabletBreakpoint
            ? imageMobile
            : screnWidth >= size.tabletBreakpoint &&
              screnWidth < size.desktopBreakpoint
            ? imageTablet
            : imageDesktop
        "
        alt="Audio Gear"
      />
    </div>
    <div class="lg:w-1/2">
      <h2 class="tracking-[1px] text-[28px] my-8 md:mt-12 md:text-[40px] lg:tracking-[1.5px] lg:leading-[44px] lg:mt-0 lg:text-left dt:pr-5">
        Bringing you the <span class="text-brick">best</span> audio gear
      </h2>
      <p class="md:px-[60px] lg:px-0 lg:text-left">{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import imageMobile from "../../assets/shared/mobile/image-best-gear.jpg";
import imageTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import imageDesktop from "../../assets/shared/desktop/image-best-gear.jpg";
import { inject, ref, Ref } from "vue";
import { Size } from "../../types/enums";

export default {
  name: "AudioGear",
  data() {
    return {
      imageMobile: imageMobile,
      imageTablet: imageTablet,
      imageDesktop: imageDesktop,
      size: Size,
      screnWidth: inject("screenWidth", ref(0)) as Ref<number>,
      header: "Bringing you the best audio gear",
      text: "Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.",
    };
  },
};
</script>
