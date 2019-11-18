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
            return this.$MS_OPTION.size || 'medium'
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

<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
.ms-form-item{
    display: flex;
    margin-bottom: $--margin;
    &.is-required{
        .ms-form-item-label::after{
            content: '*';
            color: $--color-danger;
            margin: 0 5px;
        }
    }
    .ms-form-item-label{
        flex: none;
        line-height: $--input-height;
        text-align: right;
        padding: 0 $--padding;
    }
    &.ms-form-item-small{
        .ms-form-item-label{
            line-height: $--input-height-small;
        }
    }
    &.ms-form-item-medium{
        .ms-form-item-label{
            line-height: $--input-height;
        }
    }
    &.ms-form-item-large{
        .ms-form-item-label{
            line-height: $--input-height-large;
        }
    }
    .ms-form-item-content{
        flex: 1;
        position: relative;
        .ms-form-item-error{
            position: absolute;
            top: 100%;
            left: 5px;
            color: $--color-danger;
        }
    }
}
</style>
