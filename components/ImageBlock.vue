<script setup lang="ts">
const props = defineProps({
  data: {
    src: String,
    caption: String,
    required: true,
  },
});
const data =toRef(props, 'data');
</script>
<template lang="pug">
section.maxwidth.image
    p.image__caption {{ data.caption }}
    NuxtImg.image__body(:src="data.src" fit="contain" width="1340" height="550" densities="x1")
</template>

<style lang="scss">
.image {
    margin: 0 auto;
    display: flex;
    flex-direction: column-reverse;
    gap: 15px;
    &__caption {
        min-width: 100%;
        color: var(--Gray, #8D959C);
        text-align: right;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
    }
    &__body {
        border-radius: 2px 220px 2px 2px;
        min-width: 100%;
    }
}
</style>