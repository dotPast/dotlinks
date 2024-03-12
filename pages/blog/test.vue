<template>
  <UIcon name="heroicons:pencil-solid" dynamic/> / test
  <h1 class="mb-0 leading-10">Test Post</h1>
  <p class="mb-2">Sunday, March 10, 2024</p>
  <aside>
    <div class="head-container mb-2">
      <img class="head-image" src="/ogimage.png" alt="Post Header Background">
    </div>
  </aside>
  This is a post created for testing styling and other stuff before starting to write actual posts.<br>
  I kept this as an easter egg, and for testing more stuff. and for copying snippets because this isn't Markdown
  <h1>H1</h1>
  <h2>H2</h2>
  <h3>H3</h3>
  <h4>H4</h4>
  <h5>H5</h5>
  <h6>H6</h6>
  <em>Italic</em><br>
  <strong>Bold</strong><br>
  <strike>Strikethrough</strike>
  <div class="code">
    <UIcon class="lang-icon" name="i-skill-icons-javascript" dynamic/> main.js
    <Shiki lang="js" :code="code" />
  </div>

  <div class="card note">
    <UIcon name="heroicons:information-circle-16-solid" dynamic/> / note
    <p>Note card</p>
  </div>

  <div class="card tip">
    <UIcon name="heroicons:information-circle-16-solid" dynamic/> / tip
    <p>Tip card</p>
  </div>

  <div class="card warning">
    <UIcon name="heroicons:information-circle-16-solid" dynamic/> / warning
    <p>Warning card</p>
  </div>

  <div class="card danger">
    <UIcon name="heroicons:information-circle-16-solid" dynamic/> / danger
    <p>Danger card</p>
  </div>
  
</template>

<script lang="ts" setup>
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

const code = `// codeblocks!
console.log('Hello World');
`
</script>

<style>

</style>