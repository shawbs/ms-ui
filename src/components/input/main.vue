<template>
    <div class="ms-input-box">
        <div class="ms-textarea" v-if="type=='textarea'">
            <textarea
            class="ms-input__inner"
            :autofocus="autofocus"
            :name="name"
            :disabled="disabled"
            :maxlength="maxlength"
            :placeholder="placeholder"
            :rows="rows"
            v-model="myValue"
            />
        </div>
        <template v-else>
            <slot name="prepend"/>
            <div class="ms-input">
                <slot name="prefix"/>
                <input
                class="ms-input__inner"
                :placeholder="placeholder"
                :autofocus="autofocus"
                :disabled="disabled"
                :name="name"
                :type="type"
                :maxlength="maxlength"
                v-model="myValue"
                />
                <slot name="suffix"/>
            </div>
            <slot name="append"/>
        </template>
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
            type: String,
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
        }

    },

    data () {
        return {
            myValue: this.value
        }
    },

    watch: {
        myValue (val) {
            this.$emit('input', val)
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
$--radius: 4px;
    .ms-input-box{
        display: flex;
        .ms-input{
            display: flex;
            align-items: center;
            .ms-input__inner{
                border: $--border;
                border-radius: $--radius;
                padding: $--padding-small $--padding;
                &:focus,&:hover{
                    border-color: $--color-primary;
                }
            }
        }
    }
</style>
