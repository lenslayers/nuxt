<template>
  <div class="flex flex-col w-full overflow-hidden">
    <div>@{{$route.params.handle}}</div>
    <pre>{{ profile }}</pre>
  </div>
</template>

<script lang="ts" setup>
async function getProfileByHandle(handle: any) {
  const { data: { profile } } = await $fetch('https://api.lens.dev', {
    method: 'POST',
    body: {
      variables: { handle },
      query: `
query Profile($handle: Handle!) {
  profile(request: { handle: $handle }) {
    id
    name
    bio
    picture {
      ... on MediaSet {
        original {
          url
        }
      }
    }
    handle
  }
}`,

    }
  })
  return profile
}
const route = useRoute()
const profile = await getProfileByHandle(route.params.handle)
</script>
