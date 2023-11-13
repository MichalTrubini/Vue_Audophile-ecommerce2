<template>
  <div class="relative">
    <label
      :for="name"
      class="text-[12px] font-bold tracking-[-0.2px] inline-block mb-2"
      >{{ label }}</label
    >
    <input
      :type="type"
      :id="name"
      @input="userInput"
      @blur="validateInput"
      class="w-full border border-formInputBorder py-[18px] px-[24px] rounded-xl"
      :class="{ isError: isEmpty || isInvalidEmail || (isEmptyOnSubmit && notBlurred) }"
    />
    <p
      v-if="isEmpty || (isEmptyOnSubmit && notBlurred)"
      class="absolute top-[7px] right-0 text-error font-bold text-xs"
    >
      Can't be empty!
    </p>
    <p
      v-if="isInvalidEmail && !isEmpty "
      class="absolute top-[7px] right-0 text-error font-bold text-xs"
    >
      Wrong email format!
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const regex =
  /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;

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
  },
  data() {
    return {
      isEmpty: false,
      isInvalidEmail: false,
      notBlurred: true,
    };
  },
  emits: ["update:modelValue"],
  methods: {
    userInput(event: Event) {
      this.$emit("update:modelValue", (event.target as HTMLInputElement).value);
    },
    validateInput(event: Event) {
      const inputValue = (event.target as HTMLInputElement).value.trim();
      if (inputValue === "") {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
        this.notBlurred = false;
      }
      if (
        this.type === "email" &&
        inputValue !== "" &&
        regex.test(inputValue) === false
      ) {
        this.isInvalidEmail = true;
      } else {
        this.isInvalidEmail = false;
      }
    },
  },
});
</script>

<style scoped>
.isError {
  border-color: #cd2c2c;
}
</style>
