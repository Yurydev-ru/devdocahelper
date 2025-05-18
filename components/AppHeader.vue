<script lang="ts" setup>

</script>

<template>
    <header class='app-header'>
        <div class="center-content">
            <AppLogo/>
            <nuxt-icon name="nodejs"/>
            <ToggleTheme/>
        </div>
    </header>
</template>

<style scoped lang='scss'>


    .center-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nuxt-icon svg {
        font-size: 20px;
     }
</style>
