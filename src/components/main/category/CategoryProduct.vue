<template>
  <div class="lg:w-1/2">
    <img
      :src="
        screenWidth < size.tabletBreakpoint
          ? categoryData?.categoryImage.mobile
          : screenWidth >= size.tabletBreakpoint &&
            screenWidth < size.desktopBreakpoint
          ? categoryData?.categoryImage.tablet
          : categoryData?.categoryImage.desktop
      "
      :alt="categoryData?.title"
      class="mb-6 rounded-lg md:mb-[52px] lg:mb-0"
    />
  </div>
  <div class="lg:w-1/2">
    <p
      v-if="categoryData?.new"
      class="mb-6 text-brick uppercase tracking-[10px] text-[14px]"
    >
      new product
    </p>
    <h2
      class="text-[28px] tracking-[1px] px-8 leading-[32px] mb-6 md:text-[40px] md:tracking-[1.4px] md:leading-[44px] md:w-[570px] md:mx-auto md:px-[100px] md:mb-8 lg:w-auto lg:px-0"
    >
      {{ categoryData?.title }}
    </h2>
    <p class="mb-6 md:w-[570px] md:mx-auto lg:w-auto">{{ categoryData?.description }}</p>
    <LinkToPage
      :link="'/product/' + categoryData?.slug"
      :text="'see product'"
      :type="'lightFull'"
    />
  </div>
</template>

<script lang="ts">
import LinkToPage from "../../shared/LinkToPage.vue";
import { inject, ref, Ref } from "vue";
import { Size } from "../../../types/enums";
import { ProductCategory } from "../../../types/types";
export default {
  name: "CategoryProduct",
  components: {
    LinkToPage,
  },
  props: {
    categoryData: {
      type: Object as () => ProductCategory | undefined,
      required: true,
    },
  },
  data() {
    return {
      size: Size,
      screenWidth: inject("screenWidth", ref(0)) as Ref<number>,
    };
  },
};
</script>
