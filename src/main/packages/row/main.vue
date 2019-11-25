<template>
    <div class="ms-row" :class="[`ms-row--${type}`]"
    :style="{
        'margin-left':-span + 'px',
        'margin-right': -span + 'px'
        }"
    >
    <slot/>
    </div>
</template>

<script>
export default {
    name: 'MsRow',
    props: {
        type: {
            type: String,
            default: 'float' // flex float布局方式
        },
        span: {
            type: Number,
            default: 0
        }
    },
    provide(){
        return {
            'MsRow': this
        }
    }
}
</script>