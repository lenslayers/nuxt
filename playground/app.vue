<script lang="ts" setup>
  const logger = useLogger('App')
  const lens = useLens()
  useHead({
    title: 'Playground'
  })
  onMounted(() => {
    logger.log(':onMounted')
  })
</script>

<template>
  <BaseLayout />
</template>
