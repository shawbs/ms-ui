<template>
    <div class="ms-form-item">
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
    inject: ['MsForm'],
    computed: {
        fieldError () {
            if (!this.prop) {
                return ''
            }
            const formError = this.MsForm.formError
            return formError[this.prop] || ''
        },
        labelWidth () {
            return this.MsForm.labelWidth ? this.MsForm.labelWidth : 'auto'
        }
    },
    methods: {
        dispatchEvent (eventName, params) {
            if (typeof this.MsForm !== 'object' && !this.MsForm.$emit) {
                console.error('FormItem必须在Form组件内')
                return
            }
            this.MsForm.$emit(eventName, params)
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
    .ms-form-item-label{
        flex: none;
        line-height: 30px;
        text-align: right;
        padding: 0 $--padding;
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
