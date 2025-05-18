<script lang="ts" setup>

</script>

<template>
    <header class='app-header'>
        <div class="container between">
            <AppLogo/>
            <nuxt-icon name="nodejs"/>
            <ToggleTheme/>
        </div>
    </header>
</template>

<style scoped lang='scss'>
.app-header {
    border-bottom: 0.5px solid var(--border);
}
    .nuxt-icon svg {
        font-size: 20px;
     }
</style>
