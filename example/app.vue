<template>
  <div>
    <BaseLogo />
    <pre @click="lens.increment()">{{ lens.count }}</pre>
    <PageUser />
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
const lens = useLens()

onMounted(() => {
  console.log(':onMounted')
})
</script>
