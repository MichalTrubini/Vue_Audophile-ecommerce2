<template>
<router-link to="#" @click.native="goBack">
  <p
    class="maxLimit py-4 md:py-8 dt:pt-[80px] dt:pb-[56px] hover:cursor-pointer hover:text-brick hover:font-bold"
  >
    Go Back
  </p>
</router-link>
</template>

<script lang="ts">
export default {
  name: "GoBack",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
