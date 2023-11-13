<template>
  <div class="bg-white rounded-lg p-6 md:p-8 dt:p-14">
    <h1
      class="text-[28px] tracking-[1px] mb-8 md:text-[32px] md:tracking-[1.14px] md:mb-10"
    >
      Checkout
    </h1>
    <div class="mb-8 md:mb-[53px]">
      <h2 class="text-brick uppercase text-[13px] tracking-[0.9px] mb-4">
        billing details
      </h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-4">
        <InputElement
          :label="'Name'"
          :type="'text'"
          :name="'name'"
          v-model.trim="formData.name"
          :isEmptyOnSubmit="formDataValidation.name"
        />
        <InputElement
          :label="'Email Address'"
          :type="'email'"
          :name="'email'"
          v-model.trim="formData.email"
          :isEmptyOnSubmit="formDataValidation.email"
        />
        <InputElement
          :label="'Phone Number'"
          :type="'text'"
          :name="'phone'"
          v-model.trim="formData.phone"
          :isEmptyOnSubmit="formDataValidation.phone"
        />
      </div>
    </div>
    <div class="mb-8">
      <h2 class="text-brick uppercase text-[13px] tracking-[0.9px] mb-4">
        shipping info
      </h2>
      <div class="flex flex-col gap-6">
        <InputElement
          :label="'Your Address'"
          :type="'text'"
          :name="'address'"
          v-model.trim="formData.address"
          :isEmptyOnSubmit="formDataValidation.address"
        />
        <div class="md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-6">
          <InputElement
            :label="'Zip Code'"
            :type="'text'"
            :name="'zip'"
            v-model.trim="formData.zip"
            :isEmptyOnSubmit="formDataValidation.zip"
          />
          <InputElement
            :label="'City'"
            :type="'text'"
            :name="'city'"
            v-model.trim="formData.city"
            :isEmptyOnSubmit="formDataValidation.city"
          />
          <InputElement
            :label="'Country'"
            :type="'text'"
            :name="'country'"
            v-model.trim="formData.country"
            :isEmptyOnSubmit="formDataValidation.country"
          />
        </div>
      </div>
    </div>
    <div class="mb-8">
      <h2 class="text-brick uppercase text-[13px] tracking-[0.9px] mb-4">
        payment details
      </h2>
      <div class="mb-8 md:flex md:justify-between md:items-start md:gap-4">
        <div class="relative md:w-1/2">
          <p
            class="text-[12px] font-bold tracking-[-0.2px] inline-block mb-2 text-blackish "
          >
            Payment Method
          </p>
          <p v-if="formDataValidation.paymentMethod && isNotSelected" class="absolute top-[6px] right-0 text-error font-bold text-xs">Must select one!</p>
        </div>
        <div class="flex flex-col gap-4 md:w-1/2">
          <SelectionElement
            :name="'payment'"
            :type="'radio'"
            :label="'eMoney'"
            :forID="'eMoney'"
            :value="'emoney'"
            v-model="formData.paymentMethod"
            :isEmptyOnSubmit="formDataValidation.paymentMethod"
            :isNotSelected="isNotSelected"
            @isError="isError"
          />
          <SelectionElement
            :name="'payment'"
            :type="'radio'"
            :label="'Cash on Delivery'"
            :forID="'COD'"
            :value="'cod'"
            v-model="formData.paymentMethod"
            :isEmptyOnSubmit="formDataValidation.paymentMethod"
            :isNotSelected="isNotSelected"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-4">
        <InputElement
          :label="'e-Money Number'"
          :type="'number'"
          :name="'eMoneyNumber'"
          v-model.trim="formData.eMoneyNumber"
          :isEmptyOnSubmit="formDataValidation.eMoneyNumber"
        />
        <InputElement
          :label="'e-Money PIN'"
          :type="'number'"
          :name="'eMoneyPin'"
          v-model.trim="formData.eMoneyPin"
          :isEmptyOnSubmit="formDataValidation.eMoneyPin"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import InputElement from "./InputElement.vue";
import SelectionElement from "./SelectionElement.vue";

export default {
  name: "Form",
  components: { InputElement, SelectionElement },
  props: {
    formDataValidation: {
      type: Object,
      required: true,
    },
  },
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
        eMoneyNumber: "",
        eMoneyPin: "",
      },
      isNotSelected: true
    };
  },
  watch: {
    formData: {
      handler(newValue) {
        this.$emit("updateFormData", newValue);
      },
      deep: true,
    },
  },
  methods: {
    isError(value: boolean) {
      this.isNotSelected = value;
    }
  },
};
</script>
