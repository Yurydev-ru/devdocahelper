<script lang="ts" setup>

</script>

<template>
    <div class='app-wrapper'>
        <AppHeader />
        <main class='app-main'>
            <slot />
        </main>
        <AppFooter />
    </div>
</template>

<style scoped lang='scss'>
.app-wrapper {
    @apply flex flex-col min-h-screen bg-gray-950 text-white
}

.app-main {
    flex: 1 1 0;
}
</style>