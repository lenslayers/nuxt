<template>
  <div>
    <BaseLogo />
    <pre>{{ user }}</pre>
  </div>
</template>

<script lang="ts" setup>
const { user } = useLens()

onMounted(() => {
  console.log(':onMounted')
})
</script>
