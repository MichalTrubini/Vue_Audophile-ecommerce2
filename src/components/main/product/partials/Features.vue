<template>
  <div class="maxLimit mb-[88px] lg:flex lg:gap-[125px] lg:justify-start">
    <div class="mb-[88px] lg:max-w-[635px]">
      <h3 class="mb-6 text-2xl tracking-[0.875px]">Features</h3>
      <div class="flex flex-col gap-4">
        <p
          v-for="(paragraph, index) in productData.features.split('\n\n')"
          :key="index"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
    <div>
      <h3 class="mb-6 text-2xl tracking-[0.875px]">in the box</h3>
      <ul>
        <li v-for="item in productData.includes" class="flex">
          <p class="text-brick font-bold w-[30px]">{{
            item.quantity + "x"
          }}</p
          ><p>{{ item.item }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Features",
  props: {
    productData: {
      type: Object,
      required: true,
    },
  },
};
</script>
