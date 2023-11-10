<template>
  <div class="pagePadding">
    <div v-if="productData">
      <ProductSingle :productData="productData" />
    </div>
  </div>
  <div class="pagePadding mb-[120px] dt:mb-[160px]">
    <BlockCategories />
  </div>
  <div class="pagePadding mb-[120px] dt:mb-[160px]">
    <BlockAudioGearVue />
  </div>
</template>

<script lang="ts">
import BlockAudioGearVue from "../../shared/BlockAudioGear.vue";
import BlockCategories from "../../shared/BlockCategories.vue";
import ProductSingle from "./ProductSingle.vue";
import { Product } from "../../../types/types";
export default {
  name: "ProductPage",
  components: {
    BlockAudioGearVue,
    BlockCategories,
    ProductSingle,
  },
  props: {
    productData: {
      type: Object as () => Product | undefined,
      required: true,
    },
  },
};
</script>
