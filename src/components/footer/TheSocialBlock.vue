<template>
    <div class="flex justify-center items-center gap-4">
        <img :src="facebook" alt="facebook icon" />
        <img :src="twitter" alt="twitter icon" />
        <img :src="instagram" alt="instagram icon" />
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