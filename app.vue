<script lang="ts" setup>
const lens = useLens()
const { x, y } = useMouse()

onMounted(() => {
  console.log(':onMounted')
})
</script>

<template>
  <div class="flex flex-col w-full max-w-100vh p-2 justify-start items-start content-start">
    <div class="flex flex-row w-full pb-2">
      <NuxtLink to="/">@lenslayers/nuxt {{ x }}, {{ y }}</NuxtLink>
    </div>
    <NuxtPage />
  </div>
</template>

<style>
html,
body,
#__nuxt {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  /* background: #191919; */
  /* color: white; */
  /* @apply font-sans; */
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
