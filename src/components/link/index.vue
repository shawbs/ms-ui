<template>
    <a class="ms-link"
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
        }
    }
}
</script>
