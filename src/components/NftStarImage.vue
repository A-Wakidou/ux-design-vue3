<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="star-number">
            <i class="star"></i>
            <div>
                <slot name="number"/>
            </div>
        </div>
        <slot name="image"/>
    </div>
</template>

<style scoped>

    .container {
        width: 100px;
        display: inline-block;
        position: relative;
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
        left: 19px;
    }

    .star-number > div {
        position: absolute;
        top: 14px;
        left: 25px;
    }


</style>