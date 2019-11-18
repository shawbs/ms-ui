<template>
    <div :class="['ms-tabbar', `is-${position}`]">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'MsTabbar',
    props: {
        position: {
            type: String,
            default: 'default'
        },
        value: [String, Number]
    },
    provide(){
        return {
            'MsTabbar': this
        }
    },
    computed: {
        order () {
            return this.position === 'top' ? 0 : 99
        }
    },
    methods: {
        changeHandle(val){
            this.$emit('input', val)
        }
    }
}
</script>

<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
.ms-tabbar{
    height: $--tabbar-height;
    width: 100%;
    display: flex;
    align-items: stretch;
    background: #fff;
    &.is-bottom{
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: $--z-index-3;
        border-top: $--border;
    }
    &.is-top{
        position: fixed;
        top: 0;
        left: 0;
        z-index: $--z-index-3;
        border-bottom: $--border;
    }
}
</style>
