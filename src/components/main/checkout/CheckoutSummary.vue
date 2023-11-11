<template>
  <div class="pagePadding maxLimit">
    <div class="p-6 bg-white rounded-lg">
      <h2 class="text-lg tracking-[1.3px] mb-8">summary</h2>
      <div></div>
      <div >
        <div class="flex justify-between items-center mb-2">
            <p class="uppercase text-[15px]">total</p>
            <p class="font-bold text-blackish">$ 5,396</p>
        </div>
        <div class="flex justify-between items-center mb-2">
            <p class="uppercase text-[15px]">shipping</p>
            <p class="font-bold text-blackish">$ 0</p>
        </div>
        <div class="flex justify-between items-center mb-6">
            <p class="uppercase text-[15px]">var (included)</p>
            <p class="font-bold text-blackish">$ 1,079</p>
        </div>
        <div class="flex justify-between items-center mb-8">
            <p class="uppercase text-[15px]">grand total</p>
            <p class="font-bold text-brick">$ 5,446</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Checkout",
};
</script>
