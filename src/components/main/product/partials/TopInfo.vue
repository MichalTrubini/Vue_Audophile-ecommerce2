<template>
  <div class="maxLimit md:flex md:items-center md:gap-[69px] md:mb-[120px] dt:gap-[125px]">
    <div class="md:w-[37%] lg:w-[40%] dt:w-[49%]">
      <img
        :src="
          screenWidth < size.tabletBreakpoint
            ? productData.image.mobile
            : screenWidth >= size.tabletBreakpoint &&
              screenWidth < size.desktopBreakpoint
            ? productData.image.tablet
            : productData.image.desktop
        "
        :alt="productData.title"
        class="mb-10 rounded-lg md:mb-0"
      />
    </div>
    <div class="md:w-1/2 dt:w-[40%]">
      <p
        v-if="productData.isNew"
        class="mb-6 text-brick uppercase tracking-[10px] text-[14px]"
      >
        new product
      </p>
      <h2
        class="text-[28px] tracking-[1px] leading-[32px] mb-6 md:mb-8 lg:text-[40px] lg:leading-[44px]"
      >
        {{ productData.name }}
      </h2>
      <p class="mb-6 md:mb-8">
        {{ productData.description }}
      </p>
      <p class="font-bold text-black mb-8 text-lg lg:mb-[47px]">
        {{ "$" + " " + productData.price.toLocaleString() }}
      </p>
      <div class="mb-[88px] flex gap-4 md:mb-0">
        <div class="relative">
          <p class="absolute top-0 left-0 h-full flex items-center px-4">-</p>
          <input
            type="number"
            class="w-[120px] border-none bg-gray text-center py-[15px] font-bold text-black"
            v-model="productData.quantity"
            min="1"
            placeholder="1"
          />
          <p class="absolute top-0 right-0 h-full flex items-center px-4">+</p>
        </div>
        <button
          class="w-[160px] border-none bg-brick text-white uppercase tracking-[1px] text-[13px] font-bold hover:bg-lightBrick"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, ref, Ref } from "vue";
import { Size } from "../../../../types/enums";
export default {
  name: "TopInfo",
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
