import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'intersection-observer-module',
    configKey: 'observer',
  },
    defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);

    addPlugin(resolver.resolve('./runtime/observerPlugin'))
  },
});
