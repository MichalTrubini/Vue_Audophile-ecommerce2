<template>
  <ProductContent :productData="productData"/>
</template>

<script lang="ts">
import ProductContent from "../components/main/product/ProductContent.vue";
import productsData from "../products.json";
import { Product } from "../types/types";

export default {
  name: "ProductPage",
  components: {
    ProductContent,
  },
  computed: {
    productData(): Product | undefined {
      return productsData.find((item: Product) => String(item.id) === this.$route.params.id);
    },
  }
};
</script>
