<template>
  <div class="colorFix">
    <Hero />
  </div>
  <div class="pagePadding mt-[92px] md:mt-[125px] lg:mt-[150px] dt:mt-[200px]">
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

.colorFix {
  background: linear-gradient(178deg, #1c1c1c, #1a1a1a);
}

@media screen and (min-width: 768px) {
  .pagePadding {
    padding: 0 2.5rem;
  }

  .colorFix {
    background: #191919;
  }
}
</style>
