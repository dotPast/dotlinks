<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
      <h6 class="mt-4">Icons: <NuxtLink to="https://iconify.design" target="_blank">iconify.design</NuxtLink>; <span v-html="randomText"/></h6>
    </NuxtLayout>
  </div>
</template>

<style>
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.hstack {
  display: flex;
  align-items: center;
  justify-content: start;
}

/* headings */
h1 { 
    display: block;
    font-size: 2em;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-weight: bold;
}
h2 {
    display: block;
    font-size: 1.5em;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-weight: bold;
}
h3 { 
    display: block;
    font-size: 1.17em;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-weight: bold;
}
h4 { 
    display: block;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
}
h5 { 
    display: block;
    font-size: .83em;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
}
h6 { 
    display: block;
    font-size: .67em;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
}
a {
  color: rgb(56 189 248)
}
</style>

<script setup lang="ts">
const route = useRoute();

const splashes = ["Also try twitch.tv/dj_gamer816! wait i m", "(splash placeholder)", "Please wait 7 business days for a reply", "BK its been 3 months game night when", "SSMP event is the worst thing i made", "Actually that CAH deck is the worst one", "I coded SSMP event so hard intellij died", "splashes[6] is the worst splash", "Also try Project Remix!"]
var randomText = splashes[Math.floor(Math.random()*splashes.length)]

useSeoMeta({
  title: 'dot\'s corner',
  ogTitle: 'dot\'s corner',
  description: 'dotPast\'s links website',
  ogDescription: 'dotPast\'s links website',
  ogImage: '/ogimage.png',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://dottt.pages.dev',
  twitterTitle: 'dot\'s corner',
  twitterDescription: 'dotPast\'s links website',
  twitterImage: '/ogimage.png'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    }
  ]
})

</script>
