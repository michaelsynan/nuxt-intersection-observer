# Nuxt Intersection Observer

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt module using a Vue custom directive and the Intersection Observer API to trigger animations.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-intersection-observer?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- 🎯 &nbsp;Trigger animations on elements entering the viewport
- 🚀 &nbsp;Smooth transitions using the Intersection Observer API
- 🌟 &nbsp;Customizable animation effects (coming soon)

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-intersection-observer
```

That's it! You can now use Nuxt Intersection Observer in your Nuxt app ✨

## Usage

Add the module to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: [
    'nuxt-intersection-observer'
  ],
})
```

Use the directive in your components:

```html
<template>
  <div v-observe>
    This content will fade in when it enters the viewport.
  </div>
</template>
```

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-intersection-observer/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-intersection-observer

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-intersection-observer.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-intersection-observer

[license-src]: https://img.shields.io/npm/l/nuxt-intersection-observer.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-intersection-observer

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com