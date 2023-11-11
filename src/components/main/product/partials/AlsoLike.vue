<template>
  <div class="maxLimit mb-[172px] lg:mb-[200px] dt:mb-[240px]">
    <h2 class="text-2xl mb-10 text-center tracking-[0.875px] md:text-[32px] md:mb-[56px] ">
      You may also like
    </h2>
    <div class="flex flex-col gap-[56px] md:flex-row md:gap-[11px] lg:gap-[30px]">
      <div
        v-for="product in productData.others"
        :key="product.id"
        class="text-center"
      >
        <img
          :src="
            screenWidth < size.tabletBreakpoint
              ? product.image.mobile
              : screenWidth >= size.tabletBreakpoint &&
                screenWidth < size.desktopBreakpoint
              ? product.image.tablet
              : product.image.desktop
          "
          :alt="product.name"
          class="mb-8 rounded-lg md:mb-10"
        />
        <h3 class="mb-8 text-2xl tracking-[1.7px]">{{ product.name }}</h3>
        <LinkToPage
          :link="'/product/' + product.slug"
          :text="'see product'"
          :type="'lightFull'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LinkToPage from "../../../shared/LinkToPage.vue";
import { inject, ref, Ref } from "vue";
import { Size } from "../../../../types/enums";
export default {
  name: "AlsoLike",
  components: {
    LinkToPage,
  },
  props: {
    productData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      screenWidth: inject("screenWidth", ref(0)) as Ref<number>,
        size: Size,
    };
  },
};
</script>
