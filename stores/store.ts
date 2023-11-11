import { defineStore } from "pinia";
import { watch } from 'vue';
import { useScrollTop } from '@/composables';

export const useStore = defineStore("store", () => {
  const route = useRoute();
  const page = reactive({
    title: '',
    description: '',
    template: 'home',
    components: ref([])
  });

  async function update(url) {
    console.log("url", url);
    await fetch(`https://devtwit8.ru/api/v1/page/?path=${url??'/'}`)
      .then(response => response.json())
      .then(r => {
        page.title = r.meta.title;
        page.description = r.meta.description;
        page.template = r.page_type;
        page.components = r.body ?? [];
        console.log("page.components", page.components);
        useScrollTop();
      })
      .catch((error) => {
        console.log(error)
      })
  }
  watch(route, value => {
    update(route.path);
  }, {deep: true, immediate: true});

  return { page, update };
});
