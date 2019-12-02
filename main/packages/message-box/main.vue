<template>
    <ms-popup center v-model="visiblePopup" @click.native.self="clickPopup">
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
                        <ms-input v-model="inputValue" v-if="showInput" :type="inputType" :placeholder="placeholder"></ms-input>
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
import Locale from '../../mixins/locale'
import MsPopup from '../popup/main'
import MsButton from '../button/main'
import MsInput from '../input/main'
export default {
    name: 'MsMessageBox',
    mixins: [Locale],
    components: {MsPopup, MsInput, MsButton},
    data () {
        console.log(this.t('ms.messagebox.cancel'))
        return {
            visiblePopup: false,
            visible: false,
            showCancelBtn: false,
            cancelBtnText: this.t('ms.messagebox.cancel'),
            showConfirmBtn: true,
            confirmBtnText: this.t('ms.messagebox.confirm'),
            showCloseBtn: false,
            title: '',
            message: '',
            showInput: false,
            inputType: 'text',
            inputValue: '',
            placeholder: this.t('ms.messagebox.placeholder'),
            isClickOtherClose: true
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
