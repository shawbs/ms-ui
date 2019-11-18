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

<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
.ms-radio{
    >label{
        font-size: inherit;
        cursor: pointer;
        .ms-radio-icon{
            font-size: 1.4em;
            vertical-align: bottom;
            padding: 0 $--padding-small;
            color: $--color-gray;
            &.ms-icon-radio-on{
                color: $--color-primary;
            }
        }
    }
    &.ms-radio--disabled{
        >label{
            cursor: not-allowed;
            color: $--color-disabled;
            .ms-radio-icon{
                color: $--color-disabled;
            }
        }
    }
}
</style>