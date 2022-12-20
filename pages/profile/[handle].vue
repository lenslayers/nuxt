<script lang="ts" setup>
// import { gql } from '@urql/vue'

const props = defineProps({
  height: { type: Number, default: 600 }
})

const logger = useLogger('PageProfile')
const route = useRoute()
const lens = useLens()

const state = reactive({
  publicationId: '',
}) as any

// TODO if we got here from another page of app do it async, otherwise ssr it and suspense...
const profile = await lens.getProfileByHandle(route.params.handle)
const profilePosts = await lens.getAccountPublications(profile.id)
logger.log(':profilePosts', profilePosts)

onMounted(() => {
  logger.log(':onMounted')
})
</script>

<template>
  <div class="flex flex-col w-full" :style="{height: height+'px'}">
    <div class="flex flex-col p-4" v-if="false">
    </div>
    <!-- <pre>{{ profilePosts }}</pre> -->
    <div class="flex flex-row h-full w-full overflow-auto">
      <div class="flex flex-nowrap h-full w-full">
        <!-- root layer -->
        <div class="flex flex-col h-full min-w-60px p-4 w-60px overflow-auto">
          <div class="rotate-90">@{{$route.params.handle}}</div>
          <!-- <pre class="text-xs">{{ profile }}</pre> -->
          <!-- <pre class="text-xs">{{ lens }}</pre> -->
        </div>
        <!-- first layer -->
        <div
          class="flex flex-col h-full w-full min-w-500px max-w-500px justify-start items-start content-start"
          style="border-left: 1px solid #eee; border-right: 1px solid #eee"
        >
          <!-- actions -->
          <div class="flex flex-row w-full py-2 px-4 gap-x-2 justify-start" style="border-bottom: 1px solid #eee">
            <span>Posts</span>
          </div>
          <!-- body -->
          <div class="w-full vcol overflow-hidden">
            <PostFeed :posts="profilePosts" @open="lens.publicationFocus($event, 0)" />
          </div>
        </div>
        <!-- rest layers -->
        <div
          v-for="(f,fi) in lens.publicationsFocused" :key="f"
          class="flex flex-col h-full min-w-500px w-500px"
          style="border-right: 1px solid #eee"
        >
          <PostComments
            :publication-id="f"
            @open="lens.publicationFocus($event, fi+1)" />
        </div>
        <!-- actions layer -->
        <div
          class="flex flex-col h-full min-w-500px w-500px items-center content-center justify-center"
          style="border-right: 1px solid #eee"
        >
          <span>Share layer</span>
        </div>
      </div>
    </div>
  </div>
</template>
