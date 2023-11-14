<template>
  <div class="relative">
    <p
      class="absolute top-0 left-0 h-full flex items-center px-4 text-[16px] font-bold hover:cursor-pointer hover:text-brick"
      @click="decreaseQty"
    >
      -
    </p>
    <input
      type="number"
      class="w-[120px] border-none bg-gray text-center py-[15px] font-bold text-black focus:outline-none"
      :value="quantity"
      readonly
    />
    <p
      class="absolute top-0 right-0 h-full flex items-center px-4 text-[16px] font-bold hover:cursor-pointer hover:text-brick"
      @click="increaseQty"
    >
      +
    </p>
  </div>
</template>

<script lang="ts">

export default {
    name: "QtyController",
    props: {
        quantity: {
            type: Number,
            required: true,
        },
    },
    methods: {
        increaseQty() {
            this.$emit("increaseQty");
        },
        decreaseQty() {
            this.$emit("decreaseQty");
        },
    },
}


</script>
