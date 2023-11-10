<template>
  <div class="maxLimit mb-[120px] md:flex md:gap-[20px] lg:gap-[30px]">
    <div>
      <img
        :src="
          screenWidth < size.tabletBreakpoint
            ? productData.gallery.first.mobile
            : screenWidth >= size.tabletBreakpoint &&
              screenWidth < size.desktopBreakpoint
            ? productData.gallery.first.tablet
            : productData.gallery.first.desktop
        "
        alt="product image"
        class="rounded-lg mb-5 lg:mb-[30px]"
      />
      <img
        :src="
          screenWidth < size.tabletBreakpoint
            ? productData.gallery.second.mobile
            : screenWidth >= size.tabletBreakpoint &&
              screenWidth < size.desktopBreakpoint
            ? productData.gallery.second.tablet
            : productData.gallery.second.desktop
        "
        alt="product image"
        class="rounded-lg mb-5"
      />
    </div>
    <div>
      <img
        :src="
          screenWidth < size.tabletBreakpoint
            ? productData.gallery.third.mobile
            : screenWidth >= size.tabletBreakpoint &&
              screenWidth < size.desktopBreakpoint
            ? productData.gallery.third.tablet
            : productData.gallery.third.desktop
        "
        alt="product image"
        class="rounded-lg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { inject, ref, Ref } from "vue";
import { Size } from "../../../../types/enums";

export default {
  name: "Gallery",
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
