<script lang="ts" setup>

</script>

<template>
  <div class="wrapper-mobmenu">
    <aside class="mobmenu" aria-roledescription="Меню">
      <ul class="mobmenu-list">
        <li class="mobmenu-item">
          <NuxtLink to="/" class="mobmenu-link">Главная</NuxtLink>
        </li>
        <li class="mobmenu-item">
          <NuxtLink to="/" class="mobmenu-link">Работы</NuxtLink>
        </li>
        <li class="mobmenu-item">
          <NuxtLink to="/" class="mobmenu-link">Пожелания</NuxtLink>
        </li>
        <li class="mobmenu-item">
          <NuxtLink to="/" class="mobmenu-link">Написать письмо</NuxtLink>
        </li>
      </ul>
    </aside>
  </div>
</template>

<style scoped lang="scss">
.mobmenu {
  transform: translateX(-200px);
  transition: ease-in-out 0.8s;
}

.mobmenu-open {
  transform: translateX(0);
}
</style>