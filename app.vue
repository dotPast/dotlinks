<script setup lang="ts">
const route = useRoute()

useSeoMeta({
  title: 'dot\'s corner',
  ogTitle: 'dot\'s corner',
  description: 'dotPast\'s links website',
  ogDescription: 'dotPast\'s links website',
  ogImage: '/ogimage.png',
  twitterCard: 'summary_large_image',
})

const links = [[{
  label: 'dot\'s corner',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/83116565'
  },
}], [
{
  label: 'Links',
  icon: 'i-heroicons-link',
  to: '/'
}, {
  label: 'About',
  icon: 'i-heroicons-pencil-solid',
  to: `/about`
}
]]
</script>

<style>
body {
  background-size: 40px 40px;
  background-image: radial-gradient(circle, #FFFFFF7A 1px, rgba(0, 0, 0, 0) 1px);
}

.sm\:p-6 {
  padding: 0.5rem;
}
</style>

<template>
  <UContainer class="mt-6">
    <UCard class="mb-4">
      <UHorizontalNavigation :links="links" />
    </UCard>
    <UCard>
      <NuxtPage/>
    </UCard>
  </UContainer>
</template>
