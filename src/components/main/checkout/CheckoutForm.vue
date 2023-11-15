<template>
  <div v-if="cartItems.length === 0" class="mb-8">
    <h2 class="mb-6 mt-8 text-xl">Checkout is not available.</h2>
    <p class="mb-6">There are no items in your cart.</p>
    <LinkToPage :type="'lightFull'" :text="'Back to Home page'" :link="'/'"/>
  </div>
  <form
    class="form grid grid-cols-1 gap-8 lg:gap-x-[30px] lg:items-start"
    @submit.prevent="handleSubmitForm"
    novalidate
    v-if="cartItems.length > 0"
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
import { mapGetters } from "vuex";
import LinkToPage from "../../shared/LinkToPage.vue";

export default {
  name: "Checkout",
  components: { FormFields, Summary, OrderConfirmation, LinkToPage },
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
  computed: {
    ...mapGetters(["cartItems"]),
  },
  methods: {
    handleUpdateFormData(formData: FormData) {
      this.formData = formData;
    },
    handleSubmitForm() {
      this.formDataValidation = validateForm(this.formData);
      if (Object.values(this.formDataValidation).includes(true)) return;
      console.log(this.formDataValidation);
      this.showConfimation = true;
    },
    toggleConfimation() {
      this.showConfimation = !this.showConfimation;
    },
  },
  mounted() {
    console.log(this.cartItems.length === 0)
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
