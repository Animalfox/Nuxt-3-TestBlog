<script setup lang="ts">
const store = useStore();
const { page } = store;
const props = defineProps({
  data: String,
});
const data = toRef(props, 'data');
</script>

<template lang="pug">
article.maxwidth.text(v-html="data")
</template>

<style lang="scss">
.text {
    color: #1B1B1B;
    margin: 0 auto;
    max-width: 884px;
    h2 {
        font-size: 34px;
        font-style: normal;
        font-weight: 800;
        line-height: 46px;
        margin-bottom: 50px;
    }
    p, blockquote {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 20px;
        font-weight: 300;
    }
    blockquote {
        font-style: italic;
        margin: 40px 0;
        & > * {
            padding-left: 116px;
        }
        &::before {
            content: "";
            display: block;
            width: 80px;
            height: 64px;
            background: url("quote.png");
            position: absolute;
        }
        footer {
            color: #8D959C;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
        }
        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>