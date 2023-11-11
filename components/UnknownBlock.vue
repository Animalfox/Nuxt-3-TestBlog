<script setup lang="ts">
const props = defineProps({
  data: {}
});
</script>
<script lang="ts">
export default {
  scrollToTop: true
}
</script>

<template lang="pug">
section.maxwidth.unknown-block
    div
        slot
        pre {{ data }}
</template>

<style lang="scss">
.unknown-block {
    background-color: rgb(14, 43, 77);
    color: rgb(200, 215, 255);
    border-radius: 10px;
    margin: 0 auto;
    overflow: hidden;
    & * {
        font-size: 10pt;
        font-family: monospace !important;
    }
    & > div {
        padding: 5px 8px 6px;
    }
}
</style>