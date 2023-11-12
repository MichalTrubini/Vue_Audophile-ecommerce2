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
          v-model.trim="formData.name"
        />
        <InputElement
          :label="'Email Address'"
          :type="'email'"
          v-model.trim="formData.email"
        />
        <InputElement
          :label="'Phone Number'"
          :type="'text'"
          v-model.trim="formData.phone"
        />
      </div>
    </div>
    <div class="mb-8">
      <h2 class="text-brick uppercase text-[13px] tracking-[0.9px] mb-4">
        shipping info
      </h2>
      <div class="flex flex-col gap-6">
        <InputElement :label="'Your Address'" :type="'text'" v-model.trim="formData.address"/>
        <div class="md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-6">
          <InputElement :label="'Zip Code'" :type="'text'" v-model.trim="formData.zip"/>
          <InputElement :label="'City'" :type="'text'" v-model.trim="formData.city"/>
          <InputElement :label="'Country'" :type="'text'" v-model.trim="formData.country"/>
        </div>
      </div>
    </div>
    <div class="mb-8">
      <h2 class="text-brick uppercase text-[13px] tracking-[0.9px] mb-4">
        payment details
      </h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-4">
        <InputElement :label="'e-Money Number'" :type="'number'" v-model.trim="formData.eMoneyNumber"/>
        <InputElement :label="'e-Money PIN'" :type="'number'" v-model.trim="formData.eMoneyPin"/>
      </div>
    </div>
</div>

</template>

<script lang="ts">

import InputElement from "./InputElement.vue";

export default {
  name: "Form",
  components: { InputElement },
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
        eMoneyNumber: "",
        eMoneyPin: "",
      },
    };
  },
  watch: {
    formData: {
      handler(newValue) {
        console.log("formData changed:", newValue);
      },
      deep: true,
    },
  },
};
</script>