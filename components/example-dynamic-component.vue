<!-- components/example-dynamic-component.vue -->
<script>
import Storyblok from '~/plugins/storyblok.js'

export default {
  props: {
    storyId: {
      type: String,
      required: true,
    },
  },

  async fetch() {
    const { data } = await Storyblok.get(this.storyId)
    this.story = data.story
  },
}
</script>

<template>
  <div>
    <h1>{{ story.title }}</h1>
    <div v-html="story.content" />
  </div>
</template>
