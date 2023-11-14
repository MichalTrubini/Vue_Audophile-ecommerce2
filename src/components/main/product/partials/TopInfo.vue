<template>
  <div class="maxLimit md:flex md:items-center md:gap-[69px] md:mb-[120px] dt:gap-[125px]">
    <div class="md:w-[37%] lg:w-[40%] dt:w-[49%]">
      <img
        :src="
          screenWidth < size.tabletBreakpoint
            ? productData.image.mobile
            : screenWidth >= size.tabletBreakpoint &&
              screenWidth < size.desktopBreakpoint
            ? productData.image.tablet
            : productData.image.desktop
        "
        :alt="productData.title"
        class="mb-10 rounded-lg md:mb-0"
      />
    </div>
    <div class="md:w-1/2 dt:w-[40%]">
      <p
        v-if="productData.isNew"
        class="mb-6 text-brick uppercase tracking-[10px] text-[14px]"
      >
        new product
      </p>
      <h2
        class="text-[28px] tracking-[1px] leading-[32px] mb-6 md:mb-8 lg:text-[40px] lg:leading-[44px]"
      >
        {{ productData.name }}
      </h2>
      <p class="mb-6 md:mb-8">
        {{ productData.description }}
      </p>
      <p class="font-bold text-black mb-8 text-lg lg:mb-[47px]">
        {{ "$" + " " + productData.price.toLocaleString() }}
      </p>
      <div class="mb-[88px] flex gap-4 md:mb-0">
        <div class="relative">
          <p class="absolute top-0 left-0 h-full flex items-center px-4 text-[16px] font-bold hover:cursor-pointer hover:text-brick" @click="decreaseQty">-</p>
          <input
            type="number"
            class="w-[120px] border-none bg-gray text-center py-[15px] font-bold text-black focus:outline-none"
            :value="quantity"
            readonly
          />
          <p class="absolute top-0 right-0 h-full flex items-center px-4 text-[16px] font-bold hover:cursor-pointer hover:text-brick" @click="increaseQty">+</p>
        </div>
        <button
          class="w-[160px] border-none bg-brick text-white uppercase tracking-[1px] text-[13px] font-bold hover:bg-lightBrick"
          @click="addToCart"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, ref, Ref } from "vue";
import { Size } from "../../../../types/enums";
import { useStore } from 'vuex';

export default {
  name: "TopInfo",
  props: {
    productData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const screenWidth = inject("screenWidth", ref(0)) as Ref<number>;
    const size = Size;
    let quantity = ref(1);

    const increaseQty = () => {
      quantity.value++;
    };

    const decreaseQty = () => {
      if (quantity.value > 1) {
        quantity.value--;
      }
    };

    const addToCart = () => {
      const cartPayload = {
        id: props.productData.id,
        productTitle: props.productData.name,
        productPrice: props.productData.price,
        cartImage: props.productData.cartImage,
        quantity: quantity.value,
      };

      store.commit("addToCart", cartPayload);
      quantity.value = 1;
      console.log('Cart State:', store.state.cart);
    };

    return {
      screenWidth,
      size,
      quantity,
      increaseQty,
      decreaseQty,
      addToCart
    };
  },
};
</script>
