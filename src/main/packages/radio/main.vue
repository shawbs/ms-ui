<template>
    <span class="ms-radio" :class="[
        disabled ? 'ms-radio--disabled' : ''
    ]">
        <template v-if="parent">
            <label @click="clickHandle">
                <ms-icon class="ms-radio-icon" :icon="parent.value === label ? 'radio-on' : 'radio'"></ms-icon>
                <slot />
            </label>
        </template>
        <template v-else>
            <label @click="clickHandle">
                <ms-icon class="ms-radio-icon" :icon="value === label ? 'radio-on' : 'radio'"></ms-icon>
                <slot />
            </label>
        </template>
    </span>
</template>

<script>
export default {
    name: 'MsRadio',
    props: {
        value: String,
        label: String,
        disabled: Boolean
    },
    computed: {
        parent(){
            let parent = this.$parent;
            let parentName = parent ? parent.$options.componentName : ''
            while (parent && parentName !== 'MsRadioGroup'){
                parent = parent.$parent;
                parentName = parent ? parent.$options.componentName : '';
            }
            return parent
        }
    },
    methods: {
        clickHandle(){
            console.log('click')
            if (!this.disabled){
                if (this.parent){
                    this.parent.change(this.label)
                } else {
                    this.$emit('input', this.label)
                }
            }
        }
    }
}
</script>