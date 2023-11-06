<template>
    <p class="text-white opacity-50">Copyright {{currentYear}}. All Rights Reserved</p>
</template>

<script lang="ts">
 export default {
    data() {
        return {
            currentYear: new Date().getFullYear()
        }
    },
 }

</script>