<script lang="ts" setup>

</script>

<template>
    <div class='app-wrapper'>
        <AppHeader />
        <main class='main'>
            <slot />
        </main>
        <AppFooter />
    </div>
</template>

<style scoped lang='scss'>
.app-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main {
    flex: 1 1 0;
}
</style>