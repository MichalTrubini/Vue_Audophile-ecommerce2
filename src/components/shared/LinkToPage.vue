<template>

<router-link :to="link"><p class="uppercase py-[15px] px-[30px] font-bold tracking-[1px] inline-block" :class="{darkFull: type === 'darkFull', darkEmpty: type === 'darkEmpty', lightFull: type === 'lightFull', fullWidth: fullWidth}">{{text}}</p></router-link>

</template>

<script lang="ts">
export default {
  name: "LinkToPage",
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped> 
.darkFull {
    color: #fff;
    background-color: black;
}

.darkFull:hover {
    cursor: pointer;
    background-color: #4C4C4C;
}

.lightFull {
    color: #fff;
    background-color: #D87D4A;
}

.lightFull:hover {
    background-color: #FBAF85;
}
.darkEmpty {
    color: #000;
    background-color: inherit;
    border: 1px solid black;
}

.darkEmpty:hover 
{
    color: #fff;
    background-color: black;
}

.fullWidth {
  width: 100%;
  text-align: center;
}

</style>