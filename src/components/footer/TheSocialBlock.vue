<template>
    <div class="flex justify-center items-center gap-4 mdd:justify-end">
        <img :src="facebook" alt="facebook icon" class="iconHover"/>
        <img :src="twitter" alt="twitter icon" class="iconHover"/>
        <img :src="instagram" alt="instagram icon" class="iconHover"/>
    </div>
</template>

<script lang="ts">

import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";

export default {
    name: "TheSocialBlock",
    data() {
        return {
            facebook: facebook,
            twitter: twitter,
            instagram: instagram
        }
    }
}

</script>

<style scoped>

.iconHover:hover {
    cursor: pointer;
    filter: brightness(0) saturate(100%) invert(67%) sepia(30%) saturate(2627%) hue-rotate(329deg) brightness(92%) contrast(82%);
}
</style>