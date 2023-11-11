<template>
  <div class="bg-whitish">
    <CheckoutForm />
    <CheckoutSummary />
  </div>
</template>

<script lang="ts">
import CheckoutForm from "../components/main/checkout/CheckoutForm.vue";
import CheckoutSummary from "../components/main/checkout/CheckoutSummary.vue";
export default {
  name: "CheckoutPage",
  components: { CheckoutForm, CheckoutSummary },
};
</script>
