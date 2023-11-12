<template>
  <div class="bg-whitish pb-[97px] dt:pb-[141px]">
    <div class="pagePadding maxLimit">
      <GoBack />
      <div >
        <CheckoutForm />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CheckoutForm from "../components/main/checkout/CheckoutForm.vue";
import GoBack from "../components/shared/GoBack.vue";

export default {
  name: "CheckoutPage",
  components: { CheckoutForm, GoBack },
};
</script>
