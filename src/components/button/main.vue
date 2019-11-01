<template>
    <button class="ms-button" :class="[
    `ms-${type}-button`,
    {'is-block': isBlock},
    {'is-disabled': disabled},
    `ms-button-${buttonSize}`
    ]" :type="htmlType" :disabled="disabled">
        <ms-icon v-if="icon" :icon="icon"></ms-icon>
        <slot />
    </button>
</template>

<script>
export default {
    name: 'MsButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        htmlType: {
            type: String,
            default: 'button'
        },
        disabled: Boolean,
        isBlock: Boolean,
        icon: String,
        size: String // small medium large
    },
    computed: {
        buttonSize(){
            return this.$MS_OPTION.size || 'medium'
        }
    }

}
</script>

<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
.ms-button{
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 0 $--padding;
    height: $--btn-height;
    line-height: $--btn-height;
    border-radius: 4px;
    &.ms-button-small{
        font-size: 12px;
        height: $--btn-height-small;
        line-height: $--btn-height-small;
    }
    &.ms-button-medium{
        font-size: 16px;
        height: $--btn-height;
        line-height: $--btn-height;
    }
    &.ms-button-large{
        font-size: 18px;
        height: $--btn-height-large;
        line-height: $--btn-height-large;
    }
    &.is-block{
        display: block;
        width: 100%;
    }
    &.ms-default-button{
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        &:hover,&:focus{
            color: $--color-text;
            border: 1px solid rgba($--color-text,.7);
        }
        &.is-disabled,&.is-disabled:hover,&.is-disabled:focus{
            cursor: not-allowed;
            opacity: .8;
            background: #fff;
            border: 1px solid #dcdfe6;
        }
    }
    &.ms-primary-button{
        color: #fff;
        border: 1px solid rgba($--color-primary, .7);
        background: $--color-primary;
        &:hover,&:focus{
            color: #fff;
            border: 1px solid rgba($--color-primary, .7);
            background: rgba($--color-primary, .7);
        }
        &.is-disabled,&.is-disabled:hover,&.is-disabled:focus{
            cursor: not-allowed;
            opacity: .8;
            color: #fff;
            border: 1px solid rgba($--color-primary, .7);
            background: rgba($--color-primary, .7);
        }
    }
    &.ms-success-button{
        color: #fff;
        border: 1px solid rgba($--color-success, .7);
        background: $--color-success;
        &:hover,&:focus{
            color: #fff;
            border: 1px solid rgba($--color-success, .7);
            background: rgba($--color-success, .7);
        }
        &.is-disabled,&.is-disabled:hover,&.is-disabled:focus{
            cursor: not-allowed;
            opacity: .8;
            color: #fff;
            border: 1px solid rgba($--color-success, .7);
            background: rgba($--color-success, .7);
        }
    }
    &.ms-danger-button{
        color: #fff;
        border: 1px solid rgba($--color-danger, .7);
        background: $--color-danger;
        &:hover,&:focus{
            color: #fff;
            border: 1px solid rgba($--color-danger, .7);
            background: rgba($--color-danger, .7);
        }
        &.is-disabled,&.is-disabled:hover,&.is-disabled:focus{
            cursor: not-allowed;
            opacity: .8;
            color: #fff;
            border: 1px solid rgba($--color-danger, .7);
            background: rgba($--color-danger, .7);
        }
    }

    .ms-icon{
        font-size: inherit;
        vertical-align: inherit;
        transform: scale(1.1);
    }

}
</style>
