<script setup lang="ts">
import router from "@/router";

    function goBack() {
        router.back()
    }

</script>

<template>
    <div @click="goBack()">
        <img src="@/assets/images/arrow-back.svg" alt="Retour">
        <span>Retour</span>
    </div>
</template>


<style scoped>
    div {
        cursor: pointer;
    }
    img, span {
        vertical-align: middle;
    }
    img {
        margin-right: 0.5rem;
    }
</style>