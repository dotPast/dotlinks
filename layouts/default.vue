<template>
  <UContainer class="mt-6">
    <UCard>
      <UHorizontalNavigation :links="links" class="mb-4"/>
      <slot />
    </UCard>
  </UContainer>
</template>

<script lang="ts" setup>

const links = [[
  {
    label: 'about',
    icon: 'heroicons:user-16-solid',
    to: `/about`
  }, {
    label: 'stuff i worked on',
    icon: 'heroicons:wrench-solid',
    to: `/dev`
  }, {
    label: 'blog',
    icon: 'heroicons:pencil-solid',
    to: `/blog`
  }
],
[
  {
    label: 'Links',
    icon: 'heroicons:link',
    to: `/`
  }
]]
</script>

<style></style>