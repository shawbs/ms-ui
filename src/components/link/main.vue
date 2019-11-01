<template>
    <a class="ms-link"
        :class="[
        `ms-link--${type}`,
        disabled ? 'is-disabled' : ''
        ]"
        :href="href"
        :target="target">
        <slot />
    </a>
</template>

<script>
export default {
    name: 'MsLink',
    props: {
        href: {
            type: String,
            default: ''
        },
        target: {
            type: String,
            default: '_self'
        },
        type: String,
        disabled: Boolean
    }
}
</script>
<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
.ms-link{
    color: $--color-gray;
    &:hover,&:focus{
        text-decoration: underline;
    }
    &.ms-link--primary{
        color: $--color-primary;
    }
    &.ms-link--danger{
        color: $--color-danger;
    }
    &.ms-link--primary{
        color: $--color-primary;
    }
    &.is-disabled{
        cursor: not-allowed;
        opacity: .8;
        &:hover,&:focus{
            text-decoration: none;
        }
    }
}
</style>
