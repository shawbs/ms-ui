<template>
    <transition name="bounce">
        <div
            :class="['popup message-box']"
            v-if="show"
            @click.self="onPopup('cancel')"
        >
            <div class="inner">
                <div
                    class="header"
                    :class="`text-${align}`"
                    v-if="title">
                    <div class="label">{{ title }}</div>
                </div>
                <div :class="['body','flex']">
                    <div
                        class="message"
                        v-html="message"/>
                    <x-input
                        v-if="showInput"
                        :type="inputType"
                        v-model="inputValue"
                        :placeholder="placeholder"
                    />
                    <div
                        class="error"
                        v-if="errorText"
                        v-html="errorText"/>
                </div>
                <div class="footer">
                    <Button
                        v-if="showCancelBtn"
                        :class="['btn fill',cancelBtnCls]"
                        @click="handleAction('cancel')"
                        @keydown.enter="handleAction('cancel')"
                    >{{ cancelBtnText }}
                    </Button>
                    <Button
                        v-if="showConfirmBtn"
                        :class="['btn fill',confirmBtnCls]"
                        theme="main"
                        @click="handleAction('confirm')"
                        @keydown.enter="handleAction('confirm')"
                    >{{ confirmBtnText }}{{ delayConfirm>0?`(${delayConfirm})`:'' }}
                    </Button>
                </div>
                <div
                    class="close-btn"
                    @click="handleAction('close')"
                    v-if="showCloseBtn"
                ><i class="iconfont icon-close"></i></div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'MsMessageBox',
    data () {
        return {
            align: 'center',
            show: false,
            showCancelBtn: false,
            cancelBtnText: '取消',
            showConfirmBtn: true,
            confirmBtnText: '确认',
            showCloseBtn: true,

            errorText: '',

            showInput: false,
            inputType: 'text',
            inputValue: '',
            placeholder: '请输入',

            delayConfirm: 0, // 确定按钮倒计时
            delayConfirmTimer: 0,

            isClickOtherClose: false,
            validCallback: null,

            action: ''

        }
    },
    computed: {
        cancelBtnCls () {
            return 'btn-second'
        },
        confirmBtnCls () {
            if (this.delayConfirm) {
                return 'btn-g5'
            }
            return 'btn-main'
        }
    },
    watch: {
        show (val) {
            if (this.delayConfirm > 0) {
                if (val) {
                    this.delayConfirmTimer = setInterval(() => {
                        this.delayConfirm--
                        if (this.delayConfirm <= 0) {
                            clearInterval(this.delayConfirmTimer)
                            this.delayConfirmTimer = 0
                        }
                    }, 1000)
                } else {
                    clearInterval(this.delayConfirmTimer)
                    this.delayConfirmTimer = 0
                }
            }
        }
    },
    methods: {
        onPopup (action) {
            if (!this.isClickOtherClose) return
            this.handleAction(action)
        },
        validateAction (action) {
            this.errorText = ''
            return new Promise(resolve => {
                if (!this.validCallback) return resolve(true)
                this.validCallback(action)
                    .then(val => {
                        return resolve(val)
                    })
                    .catch(_err => {
                        this.errorText = _err.msg
                    })
            })
        },
        handleAction (action) {
            this.validateAction(action).then(() => {
                if (action === 'confirm' && this.delayConfirm > 0) return
                this.action = action
                this.doClose()
            })
        },
        doClose () {
            this.show = false
            this.callback && this.callback(this.action, this)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
.message-box {
    .inner {
        position: relative;
        min-width: 60%;
        max-width: 70%;
        min-height: 100px;
        max-height: 80%;
        width: auto;
        background-color: #fff;
        border-radius: $--padding-small;
        overflow: hidden;

        > .body.flex {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
            text-align: center;
            min-height: 90px;
            .message{
                word-break: break-all;
            }
        }
        > .close-btn {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            position: absolute;
            top: 25px;
            right: 25px;

            width: 50px;
            height: 50px;
            font-size: 3rem;
            color: $--color-gray;
        }

        > .footer {
            border-top: 1px solid $--color-border;
            .btn{
                border-radius: 0;
            }
            > .btn.fill {
                flex: 1;
            }
        }
    }
}
</style>
