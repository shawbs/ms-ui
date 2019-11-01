<template>
    <div :class="['ms-tabbar']" :style="{order:order}">
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
    position: fixed;
    bottom: 0;
    left: 0;
    height: $--tabbar-height;
    width: 100%;
    display: flex;
    align-items: stretch;
    border-top: $--border;
    background: #fff;
    z-index: $--z-index-3;
}
</style>
