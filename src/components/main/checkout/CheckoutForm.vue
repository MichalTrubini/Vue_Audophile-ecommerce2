<template>
  <form
    class="form grid grid-cols-1 gap-8 lg:gap-x-[30px] lg:items-start"
    @submit.prevent="handleSubmitForm"
  >
    <FormFields
      @updateFormData="handleUpdateFormData"
      :formDataValidation="formDataValidation"
    />
    <Summary />
  </form>
  <teleport to="body">
    <div v-if="showConfimation">
      <OrderConfirmation />
      <div
        class="fixed z-30 top-0 left-0 right-0 bottom-0 bg-overlay"
        @click="toggleConfimation"
      ></div>
    </div>
  </teleport>
</template>

<script lang="ts">
import FormFields from "./partial/FormFields.vue";
import Summary from "./partial/Summary.vue";
import { FormData } from "../../../types/types";
import validateForm from "../product/partials/formValidation";
import OrderConfirmation from "./partial/OrderConfirmation.vue";

export default {
  name: "Checkout",
  components: { FormFields, Summary, OrderConfirmation },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        address: "",
        zip: "",
        city: "",
        country: "",
        paymentMethod: "",
        eMoneyNumber: null as number | null,
        eMoneyPin: null as number | null,
      },
      formDataValidation: {
        name: false,
        email: false,
        phone: false,
        address: false,
        zip: false,
        city: false,
        country: false,
        paymentMethod: false,
        eMoneyNumber: false,
        eMoneyPin: false,
      },
      showConfimation: false,
    };
  },
  methods: {
    handleUpdateFormData(formData: FormData) {
      this.formData = formData;
    },
    handleSubmitForm() {
      this.formDataValidation = validateForm(this.formData);
      this.showConfimation = true;
      console.log(this.formData);
    },
    toggleConfimation() {
      this.showConfimation = !this.showConfimation;
    },
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .form {
    grid-template-columns: 1fr 350px;
  }
}
</style>
