<template>
  <div>
    <h1>{{ $t('home.title') }}</h1>
    <p>{{ $t('home.intro') }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({ name: 'Home' })
</script>
