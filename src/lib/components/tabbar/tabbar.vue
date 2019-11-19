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
