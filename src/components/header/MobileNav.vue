<template>
  <div class="fixed top-0 z-40 bg-white w-full px-6 pb-9 pt-[164px] rounded-lg">
    <BlockCategories :isMobileNav="true" @navTrigger="navTrigger" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BlockCategories from "../shared/BlockCategories.vue";
export default defineComponent({
  components: {
    BlockCategories,
  },
  methods: {
    navTrigger() {
      this.$emit("navTrigger");
    },
  },
});
</script>
