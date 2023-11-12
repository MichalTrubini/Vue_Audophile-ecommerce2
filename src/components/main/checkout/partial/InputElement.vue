<template>
  <div>
    <label
      for="name"
      class="text-[12px] font-bold tracking-[-0.2px] inline-block mb-2"
      >{{label}}</label
    >
    <input
      :type="type"
      id="name"
      @input="userInput"
      class="w-full border border-formInputBorder py-[18px] px-[24px] rounded-xl"
    />
  </div>
</template>

<script lang="ts">
export default {
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
    value: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    }
  },
  emits: ['update:modelValue'],
  methods: {
    userInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>
