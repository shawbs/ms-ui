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
            v-model="myValue"
            />
        </div>
        <template v-else>
            <span class="ms-input__prepend" v-if="$slots.prepend">
                <slot name="prepend"/>
            </span>
            <div class="ms-input" :class="[
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
                v-model="myValue"
                />
                <span class="ms-input__suffix" v-if="showClose && myValue.length > 0" @click="myValue=''">
                    <ms-icon icon="close"></ms-icon>
                </span>
                <span class="ms-input__suffix" v-else>
                    <slot name="suffix"/>
                </span>
            </div>
            <span class="ms-input__append" v-if="$slots.append">
                <slot name="append"/>
            </span>
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
        },
        size: String,
        showClose: Boolean
    },

    data () {
        return {
            myValue: this.value
        }
    },

    computed: {
        inputSize(){
            return this.$MS_OPTION.size || 'medium'
        }
    },

    watch: {
        myValue (val) {
            this.$emit('input', val)
        }
    },

    mounted(){
        console.log(this)
    }
}
</script>

<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
$--radius: 4px;
    .ms-input-box{
        display: flex;
        .ms-input{
            display: flex;
            align-items: center;
            position: relative;
            .ms-input__inner{
                border: $--border;
                border-radius: $--radius;
                height: $--input-height;
                line-height: $--input-height;
                padding: 0 $--padding-small;
                &:focus,&:hover{
                    border-color: $--color-primary;
                }
            }
            &.ms-input--suffix{
                .ms-input__inner{
                    padding-right: $--input-height;
                }
                .ms-input__suffix{
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 100%;
                    width: $--input-height;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }
            }

            &.ms-input--prefix{
                .ms-input__inner{
                    padding-left: $--input-height;
                }
                .ms-input__prefix{
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: $--input-height;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }
            }

            &.ms-input--small{
                .ms-input__inner{
                    height: $--input-height-small;
                    line-height: $--input-height-small;
                }
                &.ms-input--prefix{
                    .ms-input__inner{
                        padding-left: $--input-height-small;
                    }
                    .ms-input__prefix{
                        width: $--input-height-small;
                    }
                }
                &.ms-input--suffix{
                    .ms-input__inner{
                        padding-right: $--input-height-small;
                    }
                    .ms-input__suffix{
                        width: $--input-height-small;
                    }
                }
            }
            &.ms-input--medium{
                .ms-input__inner{
                    height: $--input-height;
                    line-height: $--input-height;
                }
                &.ms-input--prefix{
                    .ms-input__inner{
                        padding-left: $--input-height;
                    }
                    .ms-input__prefix{
                        width: $--input-height;
                    }
                }
                &.ms-input--suffix{
                    .ms-input__inner{
                        padding-right: $--input-height;
                    }
                    .ms-input__suffix{
                        width: $--input-height;
                    }
                }
            }
            &.ms-input--large{
                .ms-input__inner{
                    height: $--input-height-large;
                    line-height: $--input-height-large;
                }
                &.ms-input--prefix{
                    .ms-input__inner{
                        padding-left: $--input-height-large;
                    }
                    .ms-input__prefix{
                        width: $--input-height-large;
                    }
                }
                &.ms-input--suffix{
                    .ms-input__inner{
                        padding-right: $--input-height-large;
                    }
                    .ms-input__suffix{
                        width: $--input-height-large;
                    }
                }
            }
        }
        .ms-input--prepend{
            .ms-input__inner{
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        }
        .ms-input--append{
            .ms-input__inner{
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
        .ms-input__prepend{
            border: $--border;
            border-right: none;
            border-top-left-radius: $--radius;
            border-bottom-left-radius: $--radius;
            padding: 0 $--padding-small;
            @extend %flexcenter;
        }
        .ms-input__append{
            border: $--border;
            border-left: none;
            border-top-right-radius: $--radius;
            border-bottom-right-radius: $--radius;
            padding: 0 $--padding-small;
            @extend %flexcenter;
        }
    }
</style>
