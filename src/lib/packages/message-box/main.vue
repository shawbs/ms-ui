<template>
    <ms-popup center :value="visiblePopup" @click.native.self="clickPopup">
        <transition name="bounce">
                <div class="ms-message" v-if="visible" @animationend="hidePopup">
                    <div
                        class="__header"
                        v-if="title">
                        <div class="label">{{ title }}</div>
                    </div>

                    <ms-icon @click="handleAction('close')" v-if="showCloseBtn" icon="close" class="close-btn"></ms-icon>
                    <div class="__body">
                        <div
                            class="message"
                            v-html="message"/>
                        <ms-input v-model="inputValue" v-if="showInput"></ms-input>
                    </div>
                    <div class="__footer">
                        <ms-button
                            size="large"
                            v-if="showCancelBtn"
                            @click.native="handleAction('cancel')"
                        >{{ cancelBtnText }}
                        </ms-button>
                        <ms-button
                            size="large"
                            type="primary"
                            v-if="showConfirmBtn"
                            @click.native="handleAction('confirm')"
                        >{{ confirmBtnText }}
                        </ms-button>
                    </div>

                </div>
        </transition>
    </ms-popup>
</template>

<script>

export default {
    name: 'MsMessageBox',
    data () {
        return {
            visiblePopup: false,
            visible: false,
            showCancelBtn: false,
            cancelBtnText: '取消',
            showConfirmBtn: true,
            confirmBtnText: '确认',
            showCloseBtn: false,
            title: '',
            message: '',
            showInput: false,
            inputType: 'text',
            inputValue: '',
            placeholder: '请输入',
            isClickOtherClose: true,

            callback: null,
            beforeClose: null
        }
    },
    methods: {
        handleAction(action){
            this.callback && this.callback(action)
            this.close()
        },
        show(){
            this.visiblePopup = true
            this.$nextTick(()=>{
                this.visible = true
            })
        },
        close(){
            if (this.beforeClose){
                this.beforeClose().then(_ => {
                    this.visible = false
                })
            } else {
                this.visible = false
            }
        },
        hidePopup(){
            console.log(1, this.visible)
            if (this.visible === false){
                this.visiblePopup = false
            }
        },
        clickPopup(){
            if (this.isClickOtherClose){
                this.handleAction('close')
            }
        }
    }
}
</script>
