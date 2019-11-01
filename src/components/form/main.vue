<template>
    <div class="ms-form" ref= "form">
        <slot></slot>
    </div>
</template>

<script>
import AsyncValidator from 'async-validator';
export default {
    'name': 'MsForm',
    provide () {
        return {
            'MsForm': this
        };
    },
    'props': {
        'model': Object,
        'rules': Object,
        'labelWidth': String
    },
    data () {
        return {
            'fields': [], // field: {prop, el}，保存 FormItem 的信息。
            'formError': {}
        };
    },
    'computed': {
        formRules () {
            const descriptor = {};

            this.fields.forEach(({ prop }) => {
                if (!Array.isArray(this.rules[prop])) {
                    console.warn(`prop 为 ${prop} 的 FormItem 校验规则不存在或者其值不是数组`);
                    descriptor[prop] = [{
                        'required': true
                    }];
                    return;
                }
                descriptor[prop] = this.rules[prop];
            });
            return descriptor;
        },
        formValues () {
            return this.fields.reduce((data, { prop }) => {
                data[prop] = this.model[prop];
                return data;
            }, {});
        }
    },
    'methods': {
        validate (callback) {
            const validator = new AsyncValidator(this.formRules);

            validator.validate(this.formValues, (errors) => {
                let formError = {};

                if (errors && errors.length) {
                    errors.forEach(({ message, field }) => {
                        formError[field] = message;
                    });
                } else {
                    formError = {};
                }
                this.formError = formError; // 让错误信息的顺序与表单组件的顺序相同
                const errInfo = [];

                this.fields.forEach(({ prop, el }, index) => {
                    if (formError[prop]) {
                        errInfo.push(formError[prop]);
                    }
                });
                callback(errInfo);
            });
        },
        clearValidate () {
            this.formError = {};
        }
    },
    created () {
        this.$on('form.addField', (field) => {
            if (field) {
                this.fields = [...this.fields, field];
            }
        });
        this.$on('form.removeField', (field) => {
            if (field) {
                this.fields = this.fields.filter(({ prop }) => prop !== field.prop);
            }
        });
    }
};

</script>
