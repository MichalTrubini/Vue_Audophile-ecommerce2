<template>
    <div v-for="item in categoryData" :key="item.id">
        <h1>{{ item.category }}</h1>
        <p>{{ item.description }}</p>
    </div>
  <div class="pagePadding mt-[92px] md:mt-[125px] lg:mt-[150px] dt:mt-[200px]">
    <BlockCategories />
  </div>
  <div class="pagePadding my-[120px] md:my-[96px] dt:my-[200px]">
    <BlockAudioGear />
  </div>
</template>

<script lang="ts">
import BlockAudioGear from "../../shared/BlockAudioGear.vue";
import BlockCategories from "../../shared/BlockCategories.vue";
import { ProductCategory } from "../../../types/types";
export default {
  name: "CategoryContent",
    components: {
        BlockAudioGear,
        BlockCategories,
    },
  props: {
    categoryData: {
      type: Object as () => ProductCategory,
      required: true,
    },
  },
};
</script>
