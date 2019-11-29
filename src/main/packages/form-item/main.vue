<template>
    <div class="ms-form-item" :class="[
    `ms-form-item-${size}`,
    checkRequired() ? 'is-required' : ''
    ]">
        <div class="ms-form-item-label" :style="{width: labelWidth}">{{label}}</div>
        <div class="ms-form-item-content">
            <slot />
            <div class="ms-form-item-error" v-if="fieldError">{{fieldError}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MsFormItem',
    props: {
        label: String,
        required: Boolean,
        prop: String
    },
    computed: {
        form(){
            let parent = this.$parent;
            let parentName = parent ? parent.$options.componentName : ''
            while (parent && parentName !== 'MsFrom'){
                parent = parent.$parent;
                parentName = parent ? parent.$options.componentName : '';
            }
            return parent
        },
        fieldError () {
            if (!this.prop) {
                return ''
            }
            const formError = this.form.formError

            return formError[this.prop] || ''
        },
        labelWidth () {
            return this.form.labelWidth ? this.form.labelWidth : 'auto'
        },
        size(){
            return (this.$MS_OPTION || {}).size || 'medium'
        }
    },
    methods: {
        dispatchEvent (eventName, params) {
            if (typeof this.form !== 'object' && !this.form.$emit) {
                console.error('FormItem必须在Form组件内')
                return
            }
            this.form.$emit(eventName, params)
        },
        checkRequired(){
            if (this.prop && this.form.rules[this.prop]){
                let rules = this.form.rules[this.prop]
                let isRequired = rules.find(item => item.required) || this.required
                return isRequired
            }
            return false

        }
    },
    mounted () {
        if (this.prop) {
            this.dispatchEvent('form.addField',
                {
                    prop: this.prop,
                    el: this.$el
                })
        }
    },
    beforeDestroy () {
        if (this.prop) {
            this.dispatchEvent('form.removeField',
                {
                    prop: this.prop
                })
        }
    }
}
</script>
