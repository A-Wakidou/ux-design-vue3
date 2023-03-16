<script setup lang="ts">
import {RouterLink} from 'vue-router'
</script>

<template>
  <div class="footer">
    <img src="@/assets/images/logo.svg" alt="Logo">
    <div>
        <RouterLink to="/nft-list">Liste NFT</RouterLink>
        <RouterLink to="/nft-what">Qu'est ce qu'un NFT</RouterLink>
    </div>
    <div>
        <RouterLink to="/">Communauté</RouterLink>
        <RouterLink to="/">S'identifier</RouterLink>
    </div>
    <div>
        <p>NFT Cash <br> BEST FOR THE BEST <br> Copyright - 2023</p>
    </div>
  </div>
</template>


<style scoped>

    .footer {
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        align-items: center;
        text-align: center;
        padding: 1rem 12.5%
    }

    img {
        display: block;
        margin: 0 auto;
        width: 150px;
    }

    a {
        display: block;
    }

</style>