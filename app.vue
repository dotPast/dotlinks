<script setup lang="ts">
const route = useRoute()

definePageMeta({
  colorMode: 'dark',
})

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

const links = [[{
  label: 'dot\'s corner',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/83116565'
  }
}], [
{
  label: 'Links',
  icon: 'i-heroicons-link',
  to: '/'
}, {
  label: 'About',
  icon: 'i-heroicons-user-16-solid',
  to: `/about`
}, {
  label: 'Blog',
  icon: 'i-heroicons-pencil-solid',
  to: `/blog/`
}
]]
</script>

<style>
body {
  background-size: 40px 40px;
  background-image: radial-gradient(circle, #FFFFFF7A 1px, rgba(0, 0, 0, 0) 1px);
  animation: scroll 90s linear infinite; /* Adjust the duration (10s) as needed */
}

.sm\:p-6 {
  padding: 0.5rem;
}

@keyframes scroll {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
}

/* Styles for blog */
.code {
  margin-top: 0.5rem;
  padding: 1em;
  border-radius: 0.5rem;
  background-color: #24273a;
}
.lang-icon{
  margin-bottom: 0.2rem;
  margin-right: 0.2rem;
}
pre {
  margin-top: 0.25rem;
}
/* Sorry Tailwind, but I REALLY want my headings back */
h1 { 
    display: block;
    font-size: 2em;
    margin-bottom: 0.5rem;
    font-weight: bold;
}
h2 {
    display: block;
    font-size: 1.5em;
    margin-bottom: 0.5rem;
    font-weight: bold;
}
h3 { 
    display: block;
    font-size: 1.17em;
    margin-bottom: 0.5rem;
    font-weight: bold;
}
h4 { 
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
}
h5 { 
    display: block;
    font-size: .83em;
    font-weight: bold;
    margin-bottom: 0.5rem;
}
h6 { 
    display: block;
    font-size: .67em;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.card {
  border-radius: 0.5rem;
  padding: 1em;
  margin-top: 0.5rem;
}

.post {
  background-color: #1a1a1a;
  color: #FFF;
}

.note {
  background-color: #FFF;
  color: #000;
}

.tip {
  background-color: #16a34a;
  color: #FFF;
}

.warning {
  background-color: #eab308;
  color: #000;
}

.danger {
  background-color: #ef4444;
  color: #FFF;
}
.head-image {
  object-fit: cover;
  width: auto;
  height: 10em;  
  border-radius: 0.5em;
  vertical-align: middle;
  text-align: right;
}
.head-container {
  position: relative;
  text-align: center;
  color: white;
  
}
.head-text {
  position: absolute;
  bottom: 4px;
  left: 4px;
}
.date-text {
  position: absolute;
  font-size: x-small;
  bottom: 2px;
  left: 6px;
}
</style>

<template>
  <UContainer class="mt-6">
    <UCard class="mb-4">
      <UHorizontalNavigation :links="links" />
    </UCard>
    <UCard class="mb-4">
      <NuxtPage/>
    </UCard>
  </UContainer>
</template>
