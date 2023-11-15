<template>
  <GoBack />
  <TopInfo :productData="productData" />
  <Features :productData="productData" />
  <Gallery :productData="productData" />
  <AlsoLike :productData="productData"/>
</template>

<script lang="ts">
import GoBack from "../../shared/GoBack.vue";
import TopInfo from "./partials/TopInfo.vue";
import Features from "./partials/Features.vue";
import Gallery from "./partials/Gallery.vue";
import AlsoLike from "./partials/AlsoLike.vue";
export default {
  name: "ProductPage",
  components: {
    GoBack,
    TopInfo,
    Features,
    Gallery,
    AlsoLike,
  },
  props: {
    productData: {
      type: Object,
      required: true,
    },
  }
};
</script>
