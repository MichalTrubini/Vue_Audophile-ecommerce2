<template>
    <div class="bg-blackish">
        <h1 class="text-white text-center text-[28px] tracking-[2px] py-8 md:py-[56px] md:text-[40px]">{{title}}</h1>
    </div>
</template>

<script lang="ts">

export default {
  name: "PageTitle",
  components: {},
props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>