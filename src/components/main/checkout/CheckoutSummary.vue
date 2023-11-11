<template>
  <div class="p-6 bg-white rounded-lg md:p-8 lg:w-[350px]">
    <h2 class="text-lg tracking-[1.3px] mb-8">summary</h2>
    <div class="flex flex-col gap-6 mb-8">
      <div
        v-for="(item, index) in cartData"
        :key="index"
        class="flex gap-4 items-center justify-start"
      >
        <img
          :src="item.image"
          alt="product image"
          class="w-[64px] rounded-lg"
        />
        <div class="flex justify-between items-start w-full">
          <div>
            <p class="font-bold text-black">{{ item.name }}</p>
            <p class="font-bold">
              {{ "$" + " " + item.price.toLocaleString() }}
            </p>
          </div>
          <p class="font-bold">{{ "x" + item.quantity }}</p>
        </div>
      </div>
    </div>
    <div>
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
      <div class="bg-brick py-[15px]">
        <p
          class="text-white uppercase text-center text-[13px] tracking-[1px] font-bold"
        >
          continue & pay
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Checkout",
  data() {
    return {
      cartData: [
        {
          image: "/assets/cart/image-yx1-earphones.jpg",
          name: "YX1 Wireless Earphones",
          price: 599,
          quantity: 1,
        },
        {
          image: "/assets/cart/image-yx1-earphones.jpg",
          name: "YX1 Wireless Earphones",
          price: 599,
          quantity: 1,
        },
        {
          image: "/assets/cart/image-yx1-earphones.jpg",
          name: "YX1 Wireless Earphones",
          price: 599,
          quantity: 1,
        },
      ],
    };
  },
};
</script>
