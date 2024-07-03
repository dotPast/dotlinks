<template>
  <UContainer class="center">
    <UCard>
      <div class="hstack">
        <NuxtLink to="/">
          <img src="https://avatars.githubusercontent.com/u/83116565" width="48" class="rounded-xl mr-4"/>
        </NuxtLink>

        <UButtonGroup class="mr-4">
          <UButton to="/" icon="tabler:link" size="lg" color="black" variant="solid" label="/ links" />
          <UButton to="/about" icon="tabler:user" size="lg" color="black" variant="solid" label="/ about" />
          <UButton to="/what-i-worked-on" icon="tabler:hammer" size="lg" color="black" variant="solid" label="/ what i worked on" />
        </UButtonGroup>

        <img src="https://api.statusbadges.me/badge/status/585025499995045888?simple=true&style=flat-square" class="rounded"/>
      </div>
      <NuxtPage class="mt-2"/>
      <h6 class="mt-4">Status Badge: <NuxtLink to="https://statusbadges.me" target="_blank" class="text-sky-400">statusbadges.me</NuxtLink>; Icons: <NuxtLink to="https://iconify.design" target="_blank" class="text-sky-400">iconify.design</NuxtLink></h6>
    </UCard>
  </UContainer>
</template>

<style>
.center {
  position: absolute;
  top: 50%;
  -webkit-transform: translate(0%, -50%);
  transform: translate(0%, -50%);
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
