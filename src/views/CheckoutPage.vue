<template>
  <div class="bg-whitish pb-[97px] dt:pb-[141px]">
    <div class="pagePadding maxLimit">
      <GoBack />
      <div class="flex flex-col gap-8 lg:flex-row lg:gap-[30px] lg:justify-between lg:items-start">
        <CheckoutForm />
        <CheckoutSummary />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CheckoutForm from "../components/main/checkout/CheckoutForm.vue";
import CheckoutSummary from "../components/main/checkout/CheckoutSummary.vue";
import GoBack from "../components/shared/GoBack.vue";

export default {
  name: "CheckoutPage",
  components: { CheckoutForm, CheckoutSummary, GoBack },
};
</script>
