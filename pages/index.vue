<script setup lang="ts">
const route = useRoute()

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
.link-card {
  border-radius: 0.5rem;
  padding: 1em;
}

.note {
  background-color: #FFF;
  color: #000;
}

.twitch {
  background-color: #9333ea;
}

.youtube {
  background-color: #dc2626;
}

.github {
  background-color: #1e293b;
}

.mastodon {
  background-color: #4338ca;
}
</style>

<template>
  <div class="link-card note">
    <UIcon name="heroicons:information-circle-16-solid" dynamic/> / note
    <p>These cards are clickable. Click/Tap to go to the profile on other social media and etc.</p>
  </div>
  
  <a href="http://twitch.tv/dotpast" target="_blank" rel="noopener noreferrer">
    <div class="link-card twitch mt-4">
      <UIcon name="bi:twitch" dynamic/> / dotpast
      <p>My Twitch. I stream sometimes I guess.</p>
    </div>
  </a>

  <a href="http://youtube.com/@dotpast" target="_blank" rel="noopener noreferrer">
    <div class="link-card youtube mt-4">
      <UIcon name="bi:youtube" dynamic/> / @dotpast
      <p>My YouTube. Proper videos coming soon in both English and Russian (russian only gets subtitles sorry).</p>
    </div>
  </a>

  <a href="http://youtube.com/@dotttpast" target="_blank" rel="noopener noreferrer">
    <div class="link-card youtube mt-4">
      <UIcon name="bi:youtube" dynamic/> / @dotttpast
      <p>My Second YouTube. Mainly random content.</p>
    </div>
  </a>

  <a href="http://github.com/dotPast" target="_blank" rel="noopener noreferrer">
    <div class="link-card github mt-4">
      <UIcon name="bi:github" dynamic/> / dotPast
      <p>My GitHub. Almost everything I developed.</p>
    </div>
  </a>

  <a href="https://mas.to/@dotpast" target="_blank" rel="noopener noreferrer">
    <div class="link-card mastodon mt-4">
      <UIcon name="bi:mastodon" dynamic/> / @dotpast@mas.to
      <p>My Mastodon. I will start posting some day.</p>
    </div>
  </a>
</template>
