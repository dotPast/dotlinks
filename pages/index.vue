<template>
  <div>
      <UButtonGroup v-show="width >= 600">
        <UTooltip text="Streams. Sometimes coding, but mostly Minecraft.">
          <UButton to="https://twitch.tv/dotpast" target="_blank" icon="mdi:twitch" size="lg" color="purple" variant="solid" label="dotpast" />
        </UTooltip>
        <UTooltip text="Videos. Mostly high effort ones.">
          <UButton to="https://youtube.com/@dotpast" target="_blank" icon="mdi:youtube" size="sm" color="red" variant="solid" label="@dotpast" />
        </UTooltip>
        <UTooltip text="Videos, but worse. And also Twitch VODs.">
          <UButton to="https://youtube.com/@dotpastunofficial" target="_blank" icon="mdi:youtube" size="sm" color="red" variant="solid" label="@dotpastunofficial" />
        </UTooltip>
        <UTooltip text="Some stuff I made. Definetly won't haunt me later.">
          <UButton to="https://github.com/dotpast" target="_blank" icon="mdi:github" size="lg" color="white" variant="solid" label="dotpast" />
        </UTooltip>
      </UButtonGroup>
      <UButtonGroup v-show="width < 600">
        <UTooltip text="Streams. Sometimes coding, but mostly Minecraft.">
          <UButton to="https://twitch.tv/dotpast" target="_blank" icon="mdi:twitch" size="md" color="purple" variant="solid" />
        </UTooltip>
        <UTooltip text="Videos. Mostly high effort ones.">
          <UButton to="https://youtube.com/@dotpast" target="_blank" icon="mdi:youtube" size="md" color="red" variant="solid" label="main" />
        </UTooltip>
        <UTooltip text="Videos, but worse. And also Twitch VODs.">
          <UButton to="https://youtube.com/@dotpastunofficial" target="_blank" icon="mdi:youtube" size="md" color="red" variant="solid" label="other" />
        </UTooltip>
        <UTooltip text="Some stuff I made. Definetly won't haunt me later.">
          <UButton to="https://github.com/dotpast" target="_blank" icon="mdi:github" size="md" color="white" variant="solid" />
        </UTooltip>
      </UButtonGroup>
  </div>
  <div class="mt-2">
      <UButtonGroup>
          <UButton to="/about" icon="heroicons:user-16-solid" size="sm" color="white" variant="solid" label="about" />
          <UButton to="/dev" icon="heroicons:wrench-solid" size="sm" color="white" variant="solid" label="stuff i worked on" />
          <UButton to="/blog" icon="heroicons:pencil-solid" size="sm" color="white" variant="solid" label="blog" />
      </UButtonGroup>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'links'
})

var width = 0

if (import.meta.client) {
  width = window.innerWidth
}
</script>
<style></style>
