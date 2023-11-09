<template>
  <div class="px-6 text-center bg-blackish pb-[112px] pt-[108px]">
    <p class="text-white opacity-50 mb-4 uppercase tracking-[10px]">{{subtitle}}</p>
    <h1 class="text-white text-[36px] tracking-[1.3px] mb-6">{{title}}</h1>
    <p class="text-white mb-7 opacity-75">{{description}}</p>
    <LinkToPage :link="link" :type="'lightFull'" :text="'see product'"/>
  </div>
</template>

<script lang="ts">

import LinkToPage from '../../shared/LinkToPage.vue';

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

    };
  },
};
</script>
