<template>
    <div class="ms-input-box">
        <div class="ms-textarea" :class="`ms-textarea--${inputSize}`" v-if="type=='textarea'">
            <textarea
            class="ms-input__inner"
            :autofocus="autofocus"
            :name="name"
            :disabled="disabled"
            :maxlength="maxlength"
            :placeholder="placeholder"
            :rows="rows"
            :value="value"
            @input="changeHandle"
            />
        </div>
        <div class="ms-input" v-else>
            <span class="ms-input__prepend" v-if="$slots.prepend">
                <slot name="prepend"/>
            </span>
            <div class="ms-input-control" :class="[
            `ms-input--${inputSize}`,
            $slots.prepend ? 'ms-input--prepend' : '',
            $slots.prefix ? 'ms-input--prefix' : '',
            $slots.suffix || showClose ? 'ms-input--suffix' : '',
            $slots.append ? 'ms-input--append' : '',
            ]">
                <span class="ms-input__prefix">
                    <slot name="prefix"/>
                </span>
                <input
                class="ms-input__inner"
                :placeholder="placeholder"
                :autofocus="autofocus"
                :disabled="disabled"
                :name="name"
                :type="type"
                :maxlength="maxlength"
                :value="value"
                @input="changeHandle"
                />
                <span class="ms-input__suffix" v-if="showClose && value.length > 0" @click="clearHandle">
                    <ms-icon icon="close"></ms-icon>
                </span>
                <span class="ms-input__suffix" v-else>
                    <slot name="suffix"/>
                </span>
            </div>
            <span class="ms-input__append" v-if="$slots.append">
                <slot name="append"/>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MsInput',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        autofocus: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: '请输入'
        },
        value: {
            type: [String, Number],
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        maxlength: {
            type: String,
            default: ''
        },
        rows: {
            type: Number,
            default: 3
        },
        size: String,
        showClose: Boolean
    },

    computed: {
        inputSize(){
            return this.size || (this.$MS_OPTION || {}).size || 'medium'
        },
        myValue(){
            return this.value === null || this.value === undefined ? '' : String(this.value);
        }
    },

    methods: {
        changeHandle(e){
            if (e.target.value === this.myValue) return
            this.$emit('input', e.target.value)
        },
        clearHandle(){
            this.$emit('input', '')
        }
    }
}
</script>

