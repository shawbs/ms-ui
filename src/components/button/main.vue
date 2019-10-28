<template>
    <button class="ms-button" :class="[`ms-${type}-button`, {'is-block': isBlock}]" :type="htmlType" :disabled="disabled">
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
        isBlock: Boolean
    }

}
</script>

<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
.ms-button{
    display: inline-block;
    line-height: 1;
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
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &.is-block{
        display: block;
        width: 100%;
    }
    &.ms-default-button{
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        &:hover,&:focus{
            color: $--color-primary;
            border: 1px solid lighten($--color-primary,10%);
            background: lighten($--color-primary,80%);
        }
    }
    &.ms-primary-button{
        color: #fff;
        border: 1px solid lighten($--color-primary,5%);
        background: $--color-primary;
        &:hover,&:focus{
            color: #fff;
            border: 1px solid lighten($--color-primary,5%);
            background: lighten($--color-primary,5%);
        }
    }
    &.ms-success-button{
        color: #fff;
        border: 1px solid lighten($--color-success,5%);
        background: $--color-success;
        &:hover,&:focus{
            color: #fff;
            border: 1px solid lighten($--color-success,5%);
            background: lighten($--color-success,5%);
        }
    }
    &.ms-danger-button{
        color: #fff;
        border: 1px solid lighten($--color-danger,5%);
        background: $--color-danger;
        &:hover,&:focus{
            color: #fff;
            border: 1px solid lighten($--color-danger,5%);
            background: lighten($--color-danger,5%);
        }
    }

}
</style>
