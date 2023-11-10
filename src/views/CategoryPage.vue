<template>
  <CategoryContent :categoryData="categoryData" :pageTitle="category"/>
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
    categoryData(): ProductCategory[] | undefined {
      return this.data.filter(
        (item: ProductCategory) => item.category === this.$route.params.id
      );
    },
  },
  data() {
    return {
      data: categoryJSONData,
      category: this.$route.params.id as string,
    };
  },
};
</script>
