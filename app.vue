<script lang="ts" setup>
const lens = useLens()
const { x, y } = useMouse()

onMounted(() => {
  console.log(':onMounted')
})
</script>

<template>
  <div class="flex flex-col h-screen bg-red-300 w-full p-4 justify-start items-start content-start">
    <span>LensLayers-Nuxt</span>
    <span @click="lens.increment()">{{ lens.count }}</span>
    <span>{{ x }}, {{ y }}</span>
    <NuxtPage />
  </div>
</template>

<style>
html,body {
  padding: 0;
  margin: 0;
  min-height: 100vh;
}
</style>
