<template>
  <div>
    <Hero />
  </div>
  <div class="pagePadding mt-[92px] lg:mt-[150px] dt:mt-[200px]">
    <BlockCategories />
  </div>
  <div class="pagePadding mt-[120px] md:mt-[96px] dt:mt-[168px]">
    <BlockHotProducts/>
  </div>
  <div class="pagePadding my-[120px] md:my-[96px] dt:my-[200px]">
    <BlockAudioGear />
  </div>
</template>

<script lang="ts">
import BlockAudioGear from "../../shared/BlockAudioGear.vue";
import BlockCategories from "../../shared/BlockCategories.vue";
import BlockHotProducts from "./BlockHotProducts.vue";
import Hero from "./Hero.vue";

export default {
  name: "HomeContent",
  components: {
    BlockAudioGear,
    BlockCategories,
    BlockHotProducts,
    Hero,
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
