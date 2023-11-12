<template>
  <form class="flex flex-col gap-8 lg:flex-row lg:gap-[30px] lg:justify-between lg:items-start" >
    <FormFields />
    <Summary />
  </form>
</template>

<script lang="ts">

import FormFields from "./partial/FormFields.vue";
import Summary from "./partial/Summary.vue";

export default {
  name: "Checkout",
  components: { FormFields, Summary },

};
</script>
