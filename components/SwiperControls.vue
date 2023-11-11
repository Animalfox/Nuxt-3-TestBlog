<script setup lang="ts">
const swiper = useSwiper()
</script>

<template lang="pug">
button.swiper__prev(@click="swiper.slidePrev()") Prev
button.swiper__next(@click="swiper.slideNext()") Next
</template>

<style lang="scss">
.swiper {
    position: relative;
    display: flex;
    &__prev,
    &__next{
        height: 60px;
        width: 60px;
        display: block;
        position: relative;
    }
    &__prev{
        background: url("prev.png");
        margin-left: -80px;
    }
    &__next{
        background: url("next.png");
        margin-right: -80px;
    }
}
</style>