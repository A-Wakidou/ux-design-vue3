<script setup lang="ts">
import BackButton from "@/components/BackButton.vue"
import SearchInput from "@/components/SearchInput.vue"
import NftStarImage from "@/components/NftStarImage.vue"
import Pagination from "@/components/Pagination.vue"
</script>

<template>
  <div class="page-container">
    <BackButton/>
    <div class="header">
      <h1>LOREM IPSUM</h1>
      <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
      <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
      <img src="@/assets/images/nft-list-header.svg" alt="NFT List Header">
    </div>
    <SearchInput class="search"/>
    <div class="nft-ranking">
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
      <Pagination class="pagination" />
    </div>
  </div>
</template>


<style scoped>
.header {
  position: relative;
  margin-bottom: 8rem;
}
  .header p:nth-child(2){
    width: 95%;
    margin-top: 50px;
    margin-bottom: 40px;
  }
  .header p:nth-child(3){
    width: 70%;
  }
  .header img {
    position: absolute;
    top: 50%;
    right: -17.5%;
  }
  .search {
    display: block;
    margin: 3rem auto;
  }
  .nft-ranking {
    display: block;
    margin: 0 auto;
    width: 80%;
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

  .pagination {
    margin: 3rem 0;
    text-align: center;
  }

</style>