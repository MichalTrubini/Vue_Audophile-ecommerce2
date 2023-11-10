<template>
  <img
    :src="
      screenWidth < size.tabletBreakpoint
        ? imageMobile
        : screenWidth >= size.tabletBreakpoint &&
          screenWidth < size.desktopBreakpoint
        ? imageTablet
        : imageDesktop
    "
    :alt="title"
    class="mb-6 md:hidden"
  />
  <h2
    class="text-[28px] tracking-[1px] px-8 leading-[32px] mb-6 md:text-[40px] md:tracking-[1.4px] md:leading-[44px] md:w-[570px] md:mx-auto md:px-[100px] md:mb-8"
  >
    {{ title }}
  </h2>
  <p class="mb-6 md:w-[570px] md:mx-auto">{{ description }}</p>
  <LinkToPage
    :link="'/product/' + id"
    :text="'see product'"
    :type="'lightFull'"
  />
</template>

<script lang="ts">
import LinkToPage from "../../shared/LinkToPage.vue";
import { inject, ref, Ref } from "vue";
import { Size } from "../../../types/enums";

export default {
  name: "CategoryProduct",
  components: {
    LinkToPage,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    new: {
      type: Boolean,
      required: true,
    },
    imageMobile: {
      type: String,
      required: true,
    },
    imageTablet: {
      type: String,
      required: true,
    },
    imageDesktop: {
      type: String,
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
