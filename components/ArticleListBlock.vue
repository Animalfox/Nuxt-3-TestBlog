<script setup lang="ts">
const store = useStore();
const { page } = store;
const props = defineProps({
  data: {
    title: String,
    articles: [
        {
            title: String,
            link: String,
            image: String
        }
    ],
    required: true,
  },
});
const data = toRef(props, 'data');
</script>

<template lang="pug">
.wrapper.article-list
    p.article-list__header(v-if="page.template !== 'home'") {{data.title}}
    ul.article-list__container
        li.article-list__card(v-for="article in data.articles.slice(0,3)")
            NuxtImg.logo(:src="article.image" fit="contain" width="427" height="320" densities="x1")
            p.article-list__description {{article.title}}
            NuxtLink.btn.article-list__btn(:to="article.link") Читать
</template>

<style lang="scss">
.article-list {
  &__header {
    font-size: 34px;
    font-weight: 800;
    line-height: 46px;
    margin-bottom: 50px;
  }
  &__container {
    display: flex;
    gap: 30px;
  }
  &__card {
    display: flex;
    flex-direction: column;
  }
  &__description {
    flex-grow: 1;
    display: -webkit-box;
    width: 427px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    /* typography */
    overflow: hidden;
    color: var(--Text, #1B1B1B);
    text-overflow: ellipsis;
    /* H3 */
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;
    margin-top: 20px;
  }
  &__btn {
    margin-top: 30px;
  }
}
</style>