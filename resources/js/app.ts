import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/vue3'
import Layout from './Layout/BaseLayout.vue'

createInertiaApp({
  resolve: async name => {
    let page = (await import(`./Pages/${name}.vue`)).default
    page.layout ??= Layout
    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component('Link', Link)
      .mount(el)
  },
})
