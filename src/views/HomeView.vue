<script setup lang="ts">
import NftStarImage from "@/components/NftStarImage.vue"
</script>

<template>
  <div>
    <div class="header">
      <div class="header-text">
        <h1>LOREM IPSUM <img src="@/assets/images/money.svg" alt="Argent"> </h1>
        <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
        <button class="button bg-dark">Démarrer</button>
      </div>
      <div class="header-image">
        <img src="@/assets/images/crypto-header.svg" alt="Crypto header">
      </div>
    </div>
    <div class="nft-ranking">
      <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
      <h2>LOREM IPSUM</h2>
      <div class="table">
        <div class="table-item">
          <NftStarImage>
            <template v-slot:number>
              <span>1</span>
            </template>
            <template v-slot:image>
              <img src="@/assets/images/bored-ape.svg" alt="Bored Ape Yacht Club">
            </template>
          </NftStarImage>
          <span>Bored Ape Yacht Club</span>
          <span>$71.71</span>
          <span class="color-green">+2.23%</span>
          <img src="@/assets/images/increasing-curve.svg" alt="Courbe croissante">
          <button class="button bg-dark">Voir</button>
        </div>
        <hr>
        <div class="table-item">
          <NftStarImage>
            <template v-slot:number>
              <span>2</span>
            </template>
            <template v-slot:image>
              <img src="@/assets/images/mutant-ape.svg" alt="Mutant Ape Yacht Club">
            </template>
          </NftStarImage>
          <span>Mutant Ape Yacht Club</span>
          <span>$15.58</span>
          <span class="color-green">+12.58%</span>
          <img src="@/assets/images/high-increasing-curve.svg" alt="Courbe très croissante">
          <button class="button bg-dark">Voir</button>
        </div>
        <hr>
        <div class="table-item">
          <NftStarImage>
            <template v-slot:number>
              <span>3</span>
            </template>
            <template v-slot:image>
              <img src="@/assets/images/otherdeed.svg" alt="Otherdeed for Otherside">
            </template>
          </NftStarImage>
          <span>Otherdeed for Otherside</span>
          <span>$15.58</span>
          <span class="color-tomato">-1.53%</span>
          <img src="@/assets/images/decreasing-curve.svg" alt="Courbe décroissante">
          <button class="button bg-dark">Voir</button>
        </div>
        <hr>
        <div class="table-item">
          <NftStarImage>
            <template v-slot:number>
              <span>4</span>
            </template>
            <template v-slot:image>
              <img src="@/assets/images/azuki.svg" alt="Azuki">
            </template>
          </NftStarImage>
          <span>Azuki</span>
          <span>$14.6</span>
          <span class="color-tomato">+0.14%</span>
          <img src="@/assets/images/increasing-curve.svg" alt="Courbe décroissante">
          <button class="button bg-dark">Voir</button>
        </div>
        <hr>
        <div class="table-item">
          <NftStarImage>
            <template v-slot:number>
              <span>5</span>
            </template>
            <template v-slot:image>
              <img src="@/assets/images/clonex.svg" alt="Clone X">
            </template>
          </NftStarImage>
          <span>Clone X</span>
          <span>$4.55</span>
          <span class="color-tomato">-6.23%</span>
          <img src="@/assets/images/decreasing-curve.svg" alt="Courbe décroissante">
          <button class="button bg-dark">Voir</button>
        </div>
      </div>
    </div>
    <hr>
    <div class="nft-what">
      <h2>LOREM IPSUM</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, suscipit nihil? Perferendis, nam ipsam accusantium odio, suscipit aut explicabo in illo accusamus hic doloremque laborum nostrum aliquam asperiores minus deleniti! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto magnam obcaecati deserunt esse cum, nisi animi eligendi, non, nam atque maiores ad tempora quos vel illum tempore nemo ullam aspernatur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sint in id hic iure ad voluptate consequatur itaque laborum doloremque officia saepe, eius quam aliquam! Sit, dicta officiis! Quas, blanditiis?</p>
      <button class="bg-tomato button">Qu'est ce qu'un NFT</button>
      <button class="bg-tomato button">Liste NFT</button>
    </div>
    <hr>
  </div>
</template>

<style scoped>

  h1 {
    margin: 0;
  }

  .header, .nft-ranking, .nft-what {
    padding: 1rem 12.5%;
  }

  .header {
    height: 500px;
    display: grid;
    grid-template-columns: 50% 45%;
    grid-gap: 0 5%;
    background-color: tomato;
  }

  .header-text {
    margin-top: 60px;
  }

  .header-image {
    display: block;
    margin: auto;
  }

  .header-image img {
    width: 100%;
  }

  .nft-ranking {
    margin-bottom: 4.5rem;
  }

  .nft-ranking p {
    margin-top: 50px;
  }

  .table hr {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .table-item {
    display: grid;
    align-items: center;
    text-align: center;
    grid-template-columns: 20% 20% 15% 15% 15% 30%;
  }

  .table-item img {
    display: block;
    margin: 0 auto;
  }

  .table-item span {
    font-weight: bold;
  }

  .color-green {
    color: green;
  }

  .button {
    margin-right: 1rem;
  }

  .nft-what {
    padding: 50px 12.5%;
  }

  .nft-what h2 {
    margin: 0;
  }

  .nft-what p{
    margin: 2rem 0;
  }

</style>
