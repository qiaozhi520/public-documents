<template>
  <div>
    <h1>{{ $t('about.title') }}</h1>
    <p>{{ $t('about.content') }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({ name: 'About' })
</script>
