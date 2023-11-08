<template>
  <div class="pagePadding mt-[92px] lg:mt-[200px]">
    <BlockCategories />
  </div>
  <div>
    <BlockHotProducts class="pagePadding my-[120px] md:my-[96px]"/>
  </div>
  <div class="pagePadding my-[120px] md:my-[96px]">
    <BlockAudioGear />
  </div>
</template>

<script lang="ts">
import BlockAudioGear from "../../shared/BlockAudioGear.vue";
import BlockCategories from "../../shared/BlockCategories.vue";
import BlockHotProducts from "./BlockHotProducts.vue";

export default {
  name: "HomeContent",
  components: {
    BlockAudioGear,
    BlockCategories,
    BlockHotProducts,
  },
};
</script>

<style>
.pagePadding {
  padding: 0 1.5rem;
}

@media screen and (min-width: 768px) {
  .pagePadding {
    padding: 0 2.5rem;
  }
}
</style>
