<template>
  <div class="flex flex-col gap-[68px] max-w-[1110px] mx-auto md:flex-row md:gap-[10px] md:justify-between lg:gap-[30px]">
    <div v-for="(item, index) in data" :key="index" class="bg-gray rounded-lg relative pt-[88px] pb-[22px] md:w-1/3 lg:pt-[116px] lg:pb-[30px]">
        <img :src="item.image" alt="headphones" class="absolute w-[145px] top-[-45px] left-[50%] transform translate-x-[-50%] lg:w-[200px]"/>
        <h3 class="uppercase text-center tracking-[1px] text-[15px] mb-4 lg:text-lg">{{ item.title }}</h3>
        <div class="flex items-center justify-center gap-2">
            <p class="uppercase text-[13px] leading-4 font-bold tracking-[1px]">shop</p>
            <img :src="iconArrow" alt="arrow" />
        </div>
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
  data: () => ({
    data: [
        {
            image: headphonesImage,
            title: "headphones",
        },
        {
            image: speakersImage,
            title: "speakers",
        },
        {
            image: earphonesImage,
            title: "earphones",
        }
    ],
    iconArrow: iconArrow,
  }),
};
</script>
