<template>
  <div>
    <div class="bg-brick rounded-lg text-center px-6 pt-[60px] pb-[55px]">
        <img :src="productOne.imageOne" alt="ZX9 SPEAKER" class="w-[172px] mx-auto mb-8" />
      <h3 class="text-white text-[36px] mb-6 tracking-[1.3px] px-8 leading-10">
        {{ productOne.title }}
      </h3>
      <p class="text-white opacity-75 mb-6">{{ productOne.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import imageOne from "../../../assets/home/mobile/image-speaker-zx9.png";

export default {
  name: "BlockHotProducts",
  data() {
    return {
      productOne: {
        title: "ZX9 SPEAKER",
        description:
          "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
        imageOne: imageOne,
      },
      productTwo: {
        title: "ZX7 SPEAKER",
      },
      productThree: {
        title: "YX1 EARPHONES",
      },
    };
  },
};
</script>
