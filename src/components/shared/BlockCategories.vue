<template>
  <div
    class="maxLimit flex flex-col gap-[68px] md:flex-row md:gap-[10px] md:justify-between md:items-center lg:gap-[30px]"
  >
    <div
      v-for="(item, index) in data"
      :key="index"
      class="bg-gray rounded-lg relative pt-[88px] pb-[22px] md:w-1/3 lg:pt-[116px] lg:pb-[30px]"
      :class="{mobilePadding: isMobileNav}"
    >
      <img
        :src="item.image"
        alt="headphones"
        class="absolute w-[145px] top-[-45px] left-[50%] transform translate-x-[-50%] lg:w-[200px]"
        :class="{mobileSize: isMobileNav}"
      />
      <h3
        class="uppercase text-center tracking-[1px] text-[15px] mb-4 lg:text-lg"
        :class="{marginFix: isMobileNav}"
      >
        {{ item.title }}
      </h3>
      <router-link :to="item.path">
        <div class="flex items-center justify-center gap-2" @click="navTrigger">
          <p class="uppercase text-[13px] leading-4 font-bold tracking-[1px]">
            shop
          </p>
          <img :src="iconArrow" alt="arrow" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import headphonesImage from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImage from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImage from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import iconArrow from "../../assets/shared/desktop/icon-arrow-right.svg";
export default {
  name: "BlockCategories",
  props: {
    isMobileNav: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    data: [
      {
        image: headphonesImage,
        title: "headphones",
        path: "/category/headphones",
      },
      {
        image: speakersImage,
        title: "speakers",
        path: "/category/speakers",
      },
      {
        image: earphonesImage,
        title: "earphones",
        path: "/category/earphones",
      },
    ],
    iconArrow: iconArrow,
  }),
  methods: {
    navTrigger() {
      this.$emit("navTrigger");
    },
  },
};
</script>

<style scoped>

.mobilePadding {
  padding-top: 48px;
}

.mobileSize {
  width: 100px;
  top: -35px;
}

.marginFix {
  margin-bottom: 6px;
}
</style>