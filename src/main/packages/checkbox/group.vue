<template>
    <div class="ms-checkbox-group">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'MsCheckboxGroup',
    componentName: 'MsCheckboxGroup',
    props: {
        value: Array
    },
    methods: {
        change(val){
            this.$emit('input', val)
        }
    }
}
</script>