<template>
  <div class="fixed top-[114px] z-40 px-6 mx-auto w-full">
    <div
      class="bg-white px-7 py-8 flex flex-col items-center justify-center rounded-lg"
    >
      <div class="flex justify-between w-full items-center mb-8">
        <p class="uppercase font-bold tracking-[1.3px] text-lg">
          cart <span>({{ cartProductsQty }})</span>
        </p>
        <p
          class="text-[15px] underline decoration-1 underline-offset-2"
          @click="emptyCart"
        >
          Remove all
        </p>
      </div>
      <div v-if="cartProductsQty === 0"><p>No products in the cart.</p></div>
      <div v-if="cartProductsQty > 0" class="flex flex-col gap-6 w-full">
        <div
          v-for="(item, index) in cartItems"
          :key="index"
          class="flex justify-between items-center gap-4 w-full"
        >
          <img
            :src="item.cartImage"
            :alt="item.productTitle"
            class="rounded-lg w-[64px]"
          />
          <div>
            <p class="font-bold text-blackish">{{ item.abbrev }}</p>
            <p class="font-bold text-sm">
              {{ "$" + " " + item.productPrice.toLocaleString() }}
            </p>
          </div>
          <div class="relative">
            <p
              class="absolute top-0 left-0 h-full flex items-center px-4 text-[16px] font-bold hover:cursor-pointer hover:text-brick"
              @click="decreaseProductQuantity(item.id)"
            >
              -
            </p>
            <input
              type="number"
              class="w-[96px] border-none bg-gray text-center py-[7px] font-bold text-black focus:outline-none text-[13px]"
              :value="item.quantity"
              readonly
            />
            <p
              class="absolute top-0 right-0 h-full flex items-center px-4 text-[16px] font-bold hover:cursor-pointer hover:text-brick"
              @click="increaseProductQuantity(item.id)"
            >
              +
            </p>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="uppercase">total</p>
          <p class="text-blackish font-bold text-lg">
            {{ "$" + " " + itemsTotalPrice.toLocaleString() }}
          </p>
        </div>
        <div @click="toggleCart">
          <LinkToPage
            :link="'/checkout'"
            :type="'lightFull'"
            :text="'checkout'"
            :fullWidth="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, useStore } from "vuex";
import LinkToPage from "../../shared/LinkToPage.vue";
export default defineComponent({
  name: "Cart",
  components: {
    LinkToPage,
  },
  computed: {
    ...mapGetters(["cartItems", "getCartProductsQty", "getItemsTotalPrice"]),
    cartProductsQty() {
      return this.getCartProductsQty;
    },
    itemsTotalPrice() {
      return this.getItemsTotalPrice;
    },
  },
  methods: {
    toggleCart() {
      this.$emit("toggleCart");
    },
  },
  setup() {
    const store = useStore();

    const emptyCart = () => {
      store.commit("emptyCart");
    };

    const increaseProductQuantity = (id: number) => {
      store.commit("increaseProductQuantity", id);
    };

    const decreaseProductQuantity = (id: number) => {
      store.commit("decreaseProductQuantity", id);
    };

    return {
      emptyCart,
      increaseProductQuantity,
      decreaseProductQuantity,
    };
  },
});
</script>
