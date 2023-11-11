<template>
    <form class="bg-white rouned-lg p-6 md:p-8 dt:p-14">
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
          <InputElement :label="'Name'" :type="'text'" />
          <InputElement :label="'Email Address'" :type="'email'" />
          <InputElement :label="'Phone Number'" :type="'text'" />
        </div>
      </div>
      <div class="mb-8">
        <h2 class="text-brick uppercase text-[13px] tracking-[0.9px] mb-4">
          shipping info
        </h2>
        <div class="flex flex-col gap-6">
          <InputElement :label="'Your Address'" :type="'text'" />
          <div class="md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-6">
            <InputElement :label="'Zip Code'" :type="'text'" />
            <InputElement :label="'City'" :type="'text'" />
            <InputElement :label="'Country'" :type="'text'" />
          </div>
        </div>
      </div>
      <div class="mb-8">
        <h2 class="text-brick uppercase text-[13px] tracking-[0.9px] mb-4">
          payment details
        </h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-4">
          <InputElement :label="'e-Money Number'" :type="'number'" />
          <InputElement :label="'e-Money PIN'" :type="'number'" />
        </div>
      </div>
    </form>
</template>

<script lang="ts">
import InputElement from "./partial/InputElement.vue";
export default {
  name: "Checkout",
  components: { InputElement },
};
</script>
