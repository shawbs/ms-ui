<template>
    <a class="ms-link"
        :class="[
        `ms-link--${type}`,
        disabled ? 'is-disabled' : ''
        ]"
        v-bind="$attrs"
        :href="disabled ? 'javascript:;':href"
        >
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
