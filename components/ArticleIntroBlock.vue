<script setup lang="ts">
const props = defineProps({
  data: {
    title: String,
    image: String,
    reading_time: Number,
    views_count: Number,
    short_description: String,
    required: true,
  },
});
const data =toRef(props, 'data');
</script>

<template lang="pug">
.maxwidth.article-intro
    .article-intro__row
        .article-intro__column
            NuxtImg.article-intro__image(:src="data.image" fit="contain" width="541" height="580")
        .article-intro__column
            h1.article-intro__header {{ data.title }}
            .article-intro__info
                p.article-intro__reading-time {{ data.reading_time }} мин время чтения
                p.article-intro__views-count {{ data.views_count }} прочитали статью
            p.article-intro__description {{ data.short_description }}
</template>

<style lang="scss">
.article-intro {
    margin: 0 auto;
    &__row {
        display: flex;
        gap: 30px;
    }
    &__column {
        display: flex;
        flex-direction: column;
    }
    &__image {
        border-radius: 2px 220px 2px 2px;
    }
    &__header {
        color: var(--Text, #1B1B1B);
        /* H1 */
        font-family: Montserrat;
        font-size: 56px;
        font-style: normal;
        font-weight: 800;
        line-height: 66px; /* 117.857% */
        margin: 90px 0 30px;
    }
    &__info {
        margin-bottom: 50px;
        color: var(--Gray, #8D959C);
        /* Body 2 */
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
        display: flex;
        gap: 5px;
        flex-direction: column;
    }
    &__reading-time,
    &__views-count {
        &::before {
            content: '';
            display: inline-block;
            width: 16px;
            height: 16px;
            position: relative;
            top: 2px;
            margin-right: 8px;
        }
    }
    &__reading-time {
        &::before {
            background: url('reading-time.png');
        }
    }
    &__views-count {
        &::before {
            background: url('views-count.png');
        }
    }
    &__description {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 20px;
    }
}
</style>