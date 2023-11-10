<template>
  <ProductContent :productData="productData"/>
</template>

<script lang="ts">
import ProductContent from "../components/main/product/ProductContent.vue";
import productsData from "../products.json";

export default {
  name: "ProductPage",
  components: {
    ProductContent,
  },
  computed: {
    productData() {
      return productsData.find((item) => String(item.id) === this.$route.params.id);
    },
  }
};
</script>
