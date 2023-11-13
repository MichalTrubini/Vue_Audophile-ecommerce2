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
</template>

<script lang="ts">
import FormFields from "./partial/FormFields.vue";
import Summary from "./partial/Summary.vue";
import { FormData } from "../../../types/types";

export default {
  name: "Checkout",
  components: { FormFields, Summary },
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
    };
  },
  methods: {
    handleUpdateFormData(formData: FormData) {
      this.formData = formData;
    },
    handleSubmitForm() {
      for (let key in this.formData) {
        if (this.formData[key as keyof typeof this.formData] === "" || this.formData[key as keyof typeof this.formData] === null) {
          this.formDataValidation[key as keyof typeof this.formDataValidation] =
            true;
        } else {
          this.formDataValidation[key as keyof typeof this.formDataValidation] =
            false;
        }
      }
      console.log(this.formData);
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