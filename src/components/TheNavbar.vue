<script setup lang="ts">
import {RouterLink} from 'vue-router'

</script>

<template>
  <div class="navbar">
    <img src="@/assets/images/logo.svg" alt="Logo">
    <ul>
        <li>
            <RouterLink to="/nft-list">Liste NFT</RouterLink>
        </li>
        <li>
            <RouterLink to="/nft-what">Premiers pas</RouterLink>
        </li>
        <li>
            <RouterLink to="/">Communauté</RouterLink>
        </li>
    </ul>
    <div>
        <img src="@/assets/images/login.svg" alt="S'identifier">
    </div>
  </div>
</template>


<style scoped>
    .navbar {
        display: grid;
        grid-template-columns: 10% 70% 20%;
        align-items: center;
        padding: 1rem 12.5%;
        font-weight: bold;
    }

    li {
        list-style: none;
        display: inline;
        margin-right: 2rem;
    }

    .navbar > div {
        text-align: right;
    }
</style>