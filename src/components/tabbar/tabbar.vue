<template>
    <div :class="['ms-tabbar']" :style="`order: ${order}` ">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'MsTabbar',
    props: {
        position: {
            type: String,
            default: 'bottom'
        }
    },
    computed: {
        order () {
            return this.position == 'top' ? 0 : 99
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
.ms-tabbar{
    order: 99;
    flex: 0 0 auto;
    height: 60px;
    width: 100%;
    display: flex;
    align-items: stretch;
    background: $--color-primary;
}
</style>
