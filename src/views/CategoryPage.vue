<template>
  <CategoryContent :categoryData="categoryData" />
</template>

<script lang="ts">
import CategoryContent from "../components/main/category/CategoryContent.vue";
import categoryJSONData from "../categories.json";
import {ProductCategory} from "../types/types";

export default {
  name: "CategoryPage",
  components: {
    CategoryContent,
  },
  computed: {
    categoryData(): ProductCategory | undefined {
      return this.data.find(
        (category: ProductCategory) => category.category === this.$route.params.id
      );
    },
  },
  data() {
    return {
      data: categoryJSONData,
    };
  },
};
</script>
