<template>
  <div>
    <PageTitle :title="pageTitle" />
    <div
      v-if="categoryData"
      class="pagePadding mt-[64px] mb-[172px] md:mt-[120px] dt:mt-[160px] flex flex-col gap-[120px] md:mb-[120px] dt:mb-[240px]"
    >
      <div v-for="item in categoryData" :key="item.id" class="text-center">
        <CategoryProduct
          :id="item.id"
          :title="item.title"
          :description="item.description"
          :new="item.new"
          :imageMobile="item.categoryImage.mobile"
          :imageTablet="item.categoryImage.tablet"
          :imageDesktop="item.categoryImage.desktop"
        />
      </div>
    </div>
    <div
      class="pagePadding mt-[92px] md:mt-[125px] lg:mt-[150px] dt:mt-[200px]"
    >
      <BlockCategories />
    </div>
    <div class="pagePadding my-[120px] md:my-[96px] dt:my-[200px]">
      <BlockAudioGear />
    </div>
  </div>
</template>

<script lang="ts">
import BlockAudioGear from "../../shared/BlockAudioGear.vue";
import BlockCategories from "../../shared/BlockCategories.vue";
import { ProductCategory } from "../../../types/types";
import CategoryProduct from "./CategoryProduct.vue";
import PageTitle from "./PageTitle.vue";

export default {
  name: "CategoryContent",
  components: {
    BlockAudioGear,
    BlockCategories,
    CategoryProduct,
    PageTitle,
  },
  props: {
    categoryData: {
      type: Object as () => ProductCategory[] | undefined,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
  }
};
</script>
