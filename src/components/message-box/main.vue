<template>
            <transition name="bounce">
                <div class="ms-box" v-if="visiable" @click.self="clickPopup('close')">
                    <div class="ms-message-box" >
                        <div
                            class="__header"
                            v-if="title">
                            <div class="label">{{ title }}</div>
                        </div>

                        <i @click="handleAction('close')" v-if="showCloseBtn" class="iconfont close-btn icon-close"></i>
                        <div class="__body">
                            <div
                                class="message"
                                v-html="message"/>
                            <ms-input v-model="inputValue" v-if="showInput"></ms-input>
                        </div>
                        <div class="__footer">
                            <ms-button
                                v-if="showCancelBtn"
                                @click.native="handleAction('cancel')"
                            >{{ cancelBtnText }}
                            </ms-button>
                            <ms-button
                                type="primary"
                                v-if="showConfirmBtn"
                                @click.native="handleAction('confirm')"
                            >{{ confirmBtnText }}
                            </ms-button>
                        </div>

                    </div>
                </div>
            </transition>
</template>

<script>
import Mask from '../mask'
export default {
    name: 'MsMessageBox',
    data () {
        return {
            visiable: false,
            showCancelBtn: false,
            cancelBtnText: '取消',
            showConfirmBtn: true,
            confirmBtnText: '确认',
            showCloseBtn: true,
            title: '',
            message: '',
            showInput: false,
            inputType: 'text',
            inputValue: '',
            placeholder: '请输入',
            isClickOtherClose: true
        }
    },
    methods: {
        handleAction (action) {
            console.log(action)
            if (this.closeBefore){
                if (this.closeBefore()) this.show = false
            } else {
                this.close()
                this.callback && this.callback(action, this)
            }
        },
        show(){
            this.visiable = true
        },
        close(){
            Mask.hide()
            this.visiable = false
        },
        clickPopup(action){
            if (this.isClickOtherClose) this.handleAction(action)
        }
    }
}
</script>

<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';

.ms-message-box {
    position: relative;
    min-width: 250px;
    max-width: 417px;
    min-height: 100px;
    max-height: 80%;
    width: 50%;
    background-color: #fff;
    border-radius: $--radius;
    overflow: hidden;

    .__header{
        height: $--btn-height;
        line-height: $--btn-height;
        text-align: center;
        font-size: 1.2em;
        border-bottom: $--border;
    }

    .__body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 90px;
        padding: $--padding-small;
        .message{
            word-break: break-all;
            margin-bottom: $--margin-small;
        }
    }
    > .close-btn {
        position: absolute;
        line-height: $--btn-height;
        top: 0;
        right: 6px;
        font-size: 3rem;
        color: $--color-text;
    }

    > .__footer {
        display: flex;
        border-top: $--border;
        .ms-button{
            border-radius: 0;
            flex: 1;
            border-color: transparent;
            height: $--btn-height;
            line-height: $--btn-height;
            &:hover,&:focus{
                border-color: transparent;
            }
        }
    }
}

</style>
