<template>
  <GoBack />
  <TopInfo :productData="productData" />
  <Features :productData="productData" />
</template>

<script lang="ts">
import GoBack from "./partials/GoBack.vue";
import TopInfo from "./partials/TopInfo.vue";
import Features from "./partials/Features.vue";

export default {
  name: "ProductPage",
  components: {
    GoBack,
    TopInfo,
    Features,
  },
  props: {
    productData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.productData);
  },
};
</script>
