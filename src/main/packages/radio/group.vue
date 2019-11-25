<template>
    <div class="ms-radio-group">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'MsRadioGroup',
    componentName: 'MsRadioGroup',
    props: {
        value: String
    },
    methods: {
        change(val){
            this.$emit('input', val)
        }
    }
}
</script>