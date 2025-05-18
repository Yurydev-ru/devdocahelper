<script lang="ts" setup>
  const colorMode = useColorMode();
  // const toggleTheme = () => {
  //   colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  // };


</script>

<template>
  <button @click="colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'" class="btn-toggle" aria-label="Toggle theme">
    Сменить тему ({{ colorMode.preference }})
  </button>
</template>

<style lang="scss" scoped>
  .btn-toggle {
    border: none;
    background-color: transparent;
    padding: 0 5px;
    cursor: pointer;

    :hover {
      outline: 1px solid black;
    }
  }
</style>
