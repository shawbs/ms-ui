<template>
    <div class="ms-mask" v-if="show"></div>
</template>

<script>
export default {
    name: 'MsMask',
    data(){
        return {
            show: false
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.ms-mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: $--z-index-9;
    background: rgba($--color-dark, .5);
}
</style>