<template>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import i18n from "./i18n";

  export default defineComponent({
    name: "App",
    setup() {
      const currentLocale = ref(String(i18n.global.locale.value || "en"));
      function onLocaleChange() {
        i18n.global.locale.value = currentLocale.value as any;
      }
      return { currentLocale, onLocaleChange };
    },
  });
</script>
