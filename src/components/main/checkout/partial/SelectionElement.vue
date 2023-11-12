<template>
  <div
    class="relative flex flex-row-reverse items-center justify-end gap-4 w-full border border-formInputBorder py-[18px] px-4 rounded-xl"
    :class="{
      isError: isEmptyOnSubmit && isNotSelected,
    }"
  >
    <label :for="forID" class="text-[14px] font-bold tracking-[-0.2px]">{{
      label
    }}</label>
    <input
      :type="type"
      :name="name"
      :id="forID"
      :value="value"
      @input="userInput"
      @click="validateInput"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputElement",
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    isEmptyOnSubmit: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    forID: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    isNotSelected: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      notBlurred: true,
    };
  },
  emits: ["update:modelValue"],
  methods: {
    userInput(event: Event) {
      this.$emit("update:modelValue", (event.target as HTMLInputElement).value);
    },
    validateInput() {
      //this.isNotSelected = false;
    },
  },
});
</script>

<style scoped>
.isError {
  border-color: #cd2c2c;
}
</style>
