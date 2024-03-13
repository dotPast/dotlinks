<template>
  <div class="p-4">
    Hey there! I'm dotPast (he/him) (aka. dottt, pasted).<br>
    I'm a self-taught developer, located in Russia (UTC+3).<br>
    I have been trying myself in coding since I was 8 years old, starting with a Python Discord bot.<br><br>
    I daily drive Arch Linux (btw) with GNOME Desktop Environment (or, just DE) as my OS.<br>
    Currently I know (or tried): Python, HTML (+ CSS), JavaScript, Dart, Kotlin, Java, NuxtJS.<br>
    Also I have tried: Blender, Godot Engine<br><br>
    In icons, that's: (<UIcon name="i-heroicons-arrow-down-16-solid" dynamic/> from <a class="text-sky-500" href="http://skillicons.dev" target="_blank" rel="noopener noreferrer">Skill Icons</a>)<br>
    <div class="icons">
      <UIcon class="about-icon" name="i-skill-icons-arch-dark" dynamic/>
      <UIcon class="about-icon" name="i-skill-icons-python-dark" dynamic/>
      <UIcon class="about-icon" name="i-skill-icons-html" dynamic/>
      <UIcon class="about-icon" name="i-skill-icons-css" dynamic/>
      <UIcon class="about-icon" name="i-skill-icons-javascript" dynamic/>
      <UIcon class="about-icon" name="i-skill-icons-dart-dark" dynamic/>
      <UIcon class="about-icon" name="i-skill-icons-kotlin-dark" dynamic/>
      <UIcon class="about-icon" name="i-skill-icons-java-dark" dynamic/>
      <UIcon class="about-icon" name="i-skill-icons-nuxtjs-dark" dynamic/>
      <UIcon class="about-icon" name="i-skill-icons-blender-dark" dynamic/>
      <UIcon class="about-icon" name="i-skill-icons-godot-dark" dynamic/>
    </div><br>
    This website is made with Nuxt UI and is my replacement for <a class="text-sky-500" href="https://linktr.ee" target="_blank">linktr.ee</a>, <a class="text-sky-500" href="https://solo.to" target="_blank">solo.to</a> and similar services, because I can do way more stuff on this page and I don't want to pay for styling.<br>
    Expect random stuff (like blog posts, updates) here. (and eventually a custom domain? would be cool and i won't have dottt.pages.dev url)
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
</script>

<style>
.about-icon {
  width: 2em;
  height: 3em;
  margin-right: 1em;
}
</style>
