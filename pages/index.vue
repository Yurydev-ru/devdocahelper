<script lang="ts" setup>
import MobMenu from '~/components/nav/MobMenu.vue';

definePageMeta({
    layout: 'default',
})
</script>

<template>
    <section class='section'>
        <MobMenu/>
        <div class="container">
            <h2 class="title-sections">Hero</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, perferendis doloremque! Perspiciatis et
                quos
                eaque neque hic atque tempore magnam?</p>
                <AppCategories/>
        </div>
    </section>
</template>

<style scoped lang="scss">
.overlay-glass {
    width: 100%;
    height: 100%;
    background-color: hwb(0 88% 12% / 0.211);
    backdrop-filter: blur(10px);
}
</style>

