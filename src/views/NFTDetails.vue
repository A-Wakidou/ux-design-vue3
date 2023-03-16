<script setup lang="ts">
import BackButton from "@/components/BackButton.vue"
import NftStarImage from "@/components/NftStarImage.vue"
import { onMounted, reactive } from "vue"
import {RouterLink} from 'vue-router'
    const state = reactive({
        graphData: [103,124,145,145,166,145,166,187,187,187,197,197]
    })
    onMounted( () => {
        const bars = document.querySelectorAll('.bars > div')  
        for(var i=0; i<bars.length; i++) {
            bars[i].style.height = state.graphData[i]+'px'            
        }
    })
</script>

<template>
    <div class="page-container">
        <BackButton/>
        <div class="page-title">
            <h1>Bored Ape Yacht Club</h1> <button class="button bg-tomato "> <img src="@/assets/images/add.svg" alt="Ajouter aux favoris"> <span> Favoris</span> </button>
        </div>
        <div class="nft">
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, at et nostrum voluptatum hic non ipsam, quia laudantium libero possimus facere commodi id officiis deserunt ratione repellendus odio placeat incidunt?</p>
                <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
            </div>
            <div class="nft-image">
                <div class="star-number">
                    <i class="star"></i>
                    <div>
                        <span>1</span>
                    </div>
                </div>
                <img src="@/assets/images/bored-ape.svg" alt="Bored Ape Yacht Club">
            </div>
        </div>
        <div class="graph">
            <div class="bars">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <hr>
            <div class="months">
                <div>Jan</div>
                <div>Fév</div>
                <div>Mars</div>
                <div>Avril</div>
                <div>Mai</div>
                <div>Juin</div>
                <div>Juil</div>
                <div>Aout</div>
                <div>Sept</div>
                <div>Oct</div>
                <div>Nov</div>
                <div>Déc</div>
            </div>
        </div>
        <div class="nft-table-details">
            <div class="table bg-dark">
                <span>Classement</span>
                <span>Nom</span>
                <span>Prix plancher</span>
                <span>Volume 24h</span>
                <span>Vente 24h</span>
                <span>Evolution</span>
                <span>Détenteurs</span>
            </div>
            <div class="table">
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
                <span>42</span>
                <span class="color-green">+2.23%</span>
                <img src="@/assets/images/increasing-curve.svg" alt="Courbe croissante">
                <span>5877</span>
            </div>
        </div>
        <h2>Avis et commentaires de la communauté</h2>
        <div class="comment">
            <img src="@/assets/images/avatar1.svg" alt="Avatar 1">
            <div>
                <span>Jean Batiste</span>
                <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
                <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
                <div class="comment-footer">
                    <span>Le 02/12/2022 à 12h08</span>
                    <div class="like">
                        <img src="@/assets/images/like.svg" alt="J'aime">
                        <span>122</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="comment">
            <img src="@/assets/images/avatar2.svg" alt="Avatar 1">
            <div>
                <span>Julien Mascott</span>
                <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
                <div class="comment-footer">
                    <span>Le 02/12/2022 à 12h08</span>
                    <div class="like">
                        <img src="@/assets/images/like.svg" alt="J'aime">
                        <span>98</span>
                    </div>
                </div>
            </div>
        </div>
        <RouterLink to="/">Voir tout</RouterLink>
    </div>
</template>


<style scoped>
    h1 {
        margin-right: 1rem;
    }
    .page-title {
        margin: 3rem 0;
    }
    .page-title > * {
        display: inline;
        vertical-align: middle;
    }

    .star {
        position: relative;
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 0.9em;
        margin-right: 0.9em;
        margin-bottom: 1.2em;
        border-right: 0.3em solid transparent;
        border-bottom: 0.7em solid #fc0;
        border-left: 0.3em solid transparent;
        /* Controlls the size of the stars. */
        font-size: 24px;
    }

    .star:before, .star:after {
        content: "";
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        top: 0.6em;
        left: -1em;
        border-right: 1em solid transparent;
        border-bottom: 0.7em solid #fc0;
        border-left: 1em solid transparent;
        transform: rotate(-35deg);
    }

    .star:after {
        transform: rotate(35deg);
    }

    .star-number {
        position:absolute;
        top: -23px;
        right: 125px;
    }

    .star-number > div {
        position: absolute;
        top: 14px;
        left: 25px;
    }

    .nft {
        display: grid;
        grid-template-columns: 60% 40%;
        margin: 3rem 0;
    }

    .nft-image {
        display: inline-block;
        position: relative;
        text-align: right;
    }

    .nft-image img {
        width: 300px;
    }

    .bars, .months {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        padding: 0 5%;
    }

    .bars {
        align-items: flex-end;
    }

    .bars > div {
        width: 30px;
        background-color: tomato;
    }

    .nft-table-details {
        margin: 3rem 0;
    }

    .nft-table-details .table:nth-child(1) {
        color: white;
        border-radius: 5px;
    }

    .table {
        display: grid;
        align-items: center;
        text-align: center;
        grid-template-columns: repeat(7, 1fr);
        padding: 1rem 0;
        margin: 1rem 0;
    }

    .table img {
        display: block;
        margin: 0 auto;
    }

    .table span {
        font-weight: bold;
    }

    .color-green {
        color: green;
    }

    .comment {
        display: grid;
        grid-template-columns: 15% 85%;
        margin: 4rem 0;
    }

    .comment span:nth-child(1) {
        font-size: 20px;
        font-weight: bold;
    }

    .comment-footer {
        display: grid;
        grid-template-columns: 50% 50%;
    }

    .like {
        text-align: right;
    }

    .like span, a{
        color: #007BFF;
    }

    a {
        display: block;
        text-align: center;
        margin-bottom: 5rem;
    }

</style>