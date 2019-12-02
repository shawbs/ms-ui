<template>
    <span class="ms-checkbox" :class="[
        disabled ? 'ms-checkbox--disabled' : ''
    ]">
        <template v-if="parent">
            <label @click="clickHandle">
                <ms-icon class="ms-checkbox-icon" :icon="parent.value.indexOf(label) > -1 ? 'checkbox-on' : 'checkbox'"></ms-icon>
                <slot />
            </label>
        </template>
        <template v-else>
            <label @click="clickHandle">
                <ms-icon class="ms-checkbox-icon" :icon="value ? 'checkbox-on' : 'checkbox'"></ms-icon>
                <slot />
            </label>
        </template>
    </span>
</template>

<script>
export default {
    name: 'MsCheckbox',
    props: {
        value: Boolean, //就否被选中
        label: String, // 在group中的时候，为group组建的值集合
        disabled: Boolean
    },
    computed: {
        parent(){
            let parent = this.$parent;
            let parentName = parent ? parent.$options.componentName : ''
            while (parent && parentName !== 'MsCheckboxGroup'){
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
                // 在checkbox-group中
                if (this.parent){
                    let arr = [...this.parent.value]
                    let findIndex = arr.findIndex(item => item === this.label)
                    if (findIndex < 0){
                        arr.push(this.label)
                    } else {
                        arr.splice(findIndex, 1)
                    }
                    this.parent.change(arr)
                } else { // 不在checkbox-group中
                    if (typeof this.value === 'boolean'){
                        this.$emit('input', !this.value)
                    }
                }
            }
        }
    }
}
</script>