<template>
  <div>
    <div style="opacity: 1; height: 100px">This is a div</div>
    <div v-observe style=" height: 100px; background-color: blue !important; opacity: 1; margin-top: 500px;">
      This content will fade in when it enters the viewport.
    </div>
    <div style="height: 1000px;">spacer</div>
    <div v-observe style="font-size: 200px;">This is a test thing</div>
  </div>
</template>
