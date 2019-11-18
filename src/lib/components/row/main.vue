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

<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
.ms-row{
    position: relative;
    &.ms-row--float{
        @include clearfix();
        .ms-col{
            float: left;
        }
    }
    &.ms-row--flex{
        display: flex;
        align-items: stretch;
        flex-wrap: wrap;
        .ms-col{
            flex: none;
        }
    }
    .ms-col{
        box-sizing: border-box;
        min-height: 1px;
    }
    @each $key in (1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24){
        .ms-col-#{$key}{
            width: ($key/24) * 100%
        }
    }
}
</style>