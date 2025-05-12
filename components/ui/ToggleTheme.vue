<script lang="ts" setup>
  const colorMode = useColorMode();
  const toggleTheme = () => {
    colorMode.value = colorMode.value === 'light' ? 'dark' : 'light';
  }


</script>

<template>
  <button @click="toggleTheme" class="btn btn-primary">
    {{ colorMode.value === 'light' ? 'Dark' : 'Light' }}
  </button>
</template>

<style lang="sass" scoped>

</style>
