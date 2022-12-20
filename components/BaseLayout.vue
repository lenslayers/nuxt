<script lang="ts" setup>
const logger = useLogger('BaseLayout')
const lens = useLens()
const { x, y } = useMouse()
const { width, height } = useWindowSize()

onMounted(() => {
  logger.log(':onMounted')
})
</script>

<template>
  <div class="flex flex-col w-full justify-start items-start content-start">
    <div class="flex flex-row h-60px w-full px-4 items-center content-center justify-between" style="border-bottom: 1px solid #eee">
      <div class="flex gap-x-4">
        <NuxtLink to="/" class="mr-4">@lenslayers</NuxtLink>
        <span>Search</span>
        <span>Home</span>
        <span>Explore</span>
        <span>More</span>
      </div>
      <span class="">{{ x }}:{{ y }} Connect wallet </span>
    </div>
    <NuxtPage :height="height - 60" />
  </div>
</template>

<style>
html,
body,
#__nuxt {
  /* margin: 0; */
  /* padding: 0; */
  /* max-width: 100vw; */
  /* background: #191919; */
  /* color: white; */
  @apply font-sans;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.br {
  outline: 1px solid red;
}
.vcol {
  flex: 10000 1 0%;
  height: auto;
  min-height: 0;
  max-height: 100%;
}
</style>
