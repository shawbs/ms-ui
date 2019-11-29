<template>
    <button class="ms-button" :class="[
    themeBtn,
    `ms-button-${buttonSize}`,
    block ? 'is-block' : '',
    disabled ? 'is-disabled' : ''
    ]" :type="htmlType" :disabled="disabled">
        <ms-icon v-if="loading" icon="loading"></ms-icon>
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
        block: Boolean,
        icon: String,
        loading: Boolean,
        outline: Boolean,
        size: String // small medium large
    },
    computed: {
        buttonSize(){
            return this.size || (this.$MS_OPTION || {}).size || 'medium'
        },
        themeBtn(){
            return `ms-${this.type}-button` + (this.outline ? '-outline' : '')
        }
    }

}
</script>
