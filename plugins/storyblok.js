import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
  accessToken: '6B2qg7sVU6iCMxcmF1nZQwtt',
  cache: {
    clear: 'auto',
    type: 'memory',
  },
})

export default Storyblok
