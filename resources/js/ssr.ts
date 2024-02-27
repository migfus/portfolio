import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { DefineComponent, createSSRApp, h } from 'vue'
import Layout from './Layout/BaseLayout.vue'


createServer(page =>
  createInertiaApp({
    page,
    render: renderToString,
    resolve: async name => {
      let page = (await import(`./Pages/${name}.vue`)).default
      page.layout ??= Layout
      return page
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props),
      }).use(plugin)
    },
  }),
)
