<template>
  <nav>
    <ul
      class="flex flex-col gap-4 font-bold tracking-[2px] text-white uppercase md:flex-row md:gap-[34px]"
    >
      <li v-for="item in navList" :key="item.id" class="hover:text-brick hover:cursor-pointer text-[13px]">
        <router-link  :to="item.path">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: "SiteNavigation",
  data() {
    return {
      navList: [
        { id: 1, name: "home", path: "/" },
        { id: 2, name: "headphones", path: "/category/headphones" },
        { id: 3, name: "speakers", path: "/category/speakers" },
        { id: 4, name: "earphones", path: "/category/earphones" },
      ],
    };
  },
};
</script>

<style scoped>
.router-link-active {
  color: #d87d4a;
}
</style>
