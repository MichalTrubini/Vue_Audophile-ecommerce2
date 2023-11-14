<template>
  <div
    class="fixed top-[50%] z-40 left-[50%] transform translate-x-[-50%] translate-y-[-50%] px-6 w-full max-w-[540px] md:px-0"
  >
    <div class="bg-white rounded-lg p-8 w-full md:p-12">
      <img
        :src="iconConfirmation"
        alt="order confirmed"
        class="mb-6 w-[64px] md:mb-8"
      />
      <h2
        class="text-2xl tracking-[0.85px] mb-4 md:text-[32px] md:tracking-[1.14px] md:leading-[36px] md:mb-6"
      >
        Thank you<br />
        for your order
      </h2>
      <p class="mb-6 md:mb-8">
        You will receive an email confirmation shortly.
      </p>
      <div
        class="flex flex-col rounded-lg overflow-hidden mb-6 md:flex-row md:justify-between md:mb-12"
      >
        <div class="bg-gray p-6 md:w-[246px]">
          <div class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <img
                :src="cartItems[0].cartImage"
                :alt="cartItems[0].productTitle"
                class="rounded-lg w-[48px]"
              />
              <div>
                <p class="font-bold text-blackish">{{ cartItems[0].abbrev }}</p>
                <p class="font-bold text-sm">
                  {{ "$" + " " + cartItems[0].productPrice.toLocaleString() }}
                </p>
              </div>
            </div>
            <p>{{ "x" + cartItems[0].quantity }}</p>
          </div>
          <div v-if="cartItems.length > 1">
            <p
              class="text-center pt-3 border-t border-borderConfirmation mt-2 text-[12px] font-bold"
            >
              and {{ cartItems.length - 1 }} other item(s)
            </p>
          </div>
        </div>
        <div
          class="bg-blackish px-6 py-5 md:w-[198px] md:flex md:justify-center md:flex-col"
        >
          <p class="uppercase text-white text-opacity-50 mb-2">grand total</p>
          <p class="text-white text-lg font-bold">
            {{ `$ ${itemsTotalPrice.toLocaleString()}` }}
          </p>
        </div>
      </div>
      <div @click="emptyCart">
        <LinkToPage
          :link="'/'"
          :type="'lightFull'"
          :text="'back to home'"
          :full-width="true"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import iconConfirmation from "../../../../assets/checkout/icon-order-confirmation.svg";
import LinkToPage from "../../../shared/LinkToPage.vue";
import { mapGetters, useStore } from "vuex";
export default {
  name: "OrderConfirmation",
  components: { LinkToPage },
  computed: {
    ...mapGetters(["cartItems", "getItemsTotalPrice"]),
    itemsTotalPrice() {
      return this.getItemsTotalPrice + this.shipping;
    },
  },
  data() {
    return {
      iconConfirmation: iconConfirmation,
      shipping: 19.99,
    };
  },
  setup() {
    const store = useStore();
    const emptyCart = () => {
      store.commit("emptyCart");
    };
    return { emptyCart };
  },
};
</script>
