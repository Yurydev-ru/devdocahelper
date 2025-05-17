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

.app-header {
    background: #000000;
}

.app-header.dark {
    background: #ffffff;

}
    .center-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nuxt-icon svg {
        font-size: 20px;
     }
</style>
