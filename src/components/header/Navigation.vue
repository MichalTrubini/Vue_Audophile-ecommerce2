<template>
  <nav>
    <ul class="flex flex-col gap-4 font-bold tracking-[2px] text-white uppercase md:flex-row md:gap-[34px]">
      <li v-for="(item) in navList" :key="item.id" class="hover:text-brick hover:cursor-pointer text-[13px]">{{item.name}}</li>
    </ul>
  </nav>
</template>

<script lang="ts">

export default {
  name: "Navigation",
  data() {
    return {
        navList: [
            {id: 1, name: 'home'},
            {id: 2, name: 'headphones'},
            {id: 3, name: 'speakers'},
            {id: 4, name: 'earphones'},
        ]
    };
  },
};

</script>
