<script setup lang="ts">
import { useStore } from "@/stores/store";
const { page } = useStore();

function getBlockComponent(block: { type: string; }) {
  switch (block.type) {
    case "article_list_block":
      return "ArticleListBlock";
    case "article_intro_block":
      return "ArticleIntroBlock";
    case "text_block":
      return "TextBlock";
    case "image_block":
      return "ImageBlock";
    case "subscribe_form_block":
      return "FormSubscribeBlock";
    case "slider_block":
      return "SliderBlock";
    default:
      return "UnknownBlock";
  }
}
</script>

<template lang="pug">
HeaderBlock
MainBlock
  template(v-for="block in page.components")
    component(:is="getBlockComponent(block)" :data="block.data")
      pre(v-if="getBlockComponent(block) == \"UnknownBlock\"") {{ block.type }}
FooterBlock
  FormSubscribeBlock
</template>

<style lang="scss">
@import "@/scss";
* {
  font-family: Montserrat !important;
}
body, #__nuxt {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
