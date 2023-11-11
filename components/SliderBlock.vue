import { NuxtImg } from '../.nuxt/components';
<script setup>
const props = defineProps({
  data: Array<String>[],
});
const data =toRef(props, 'data');
const slides = ref(Array.from({ length: 10 }, () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  // Figure out contrast color for font
  const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'

  return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast }
}))
</script>

<template>
<Swiper
    :height="300"
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
    delay: 8000,
    disableOnInteraction: true
    }"
    :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1]
    },
    next: {
        translate: ['100%', 0, 0]
    }
    }"
>
    <SwiperSlide
    v-for="(slide, idx) in data"
    :key="idx"
    >
        <NuxtImg :src=slide fit="contain" width="1112" height="550"></NuxtImg>
    </SwiperSlide>
    <SwiperControls />
</Swiper>
</template>

<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 550px;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 1112px;
}
.swiper-cards {
  width: 1112px;
  height: 550px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>