<template>
    <ms-popup center :value="visiblePopup" @click.native.self="clickPopup">
        <transition name="bounce">
            <!-- <div class="ms-box" v-if="visible" @click.self="clickPopup('close')"> -->
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
            <!-- </div> -->
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

<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';

.ms-message {
    position: relative;
    min-width: 280px;
    max-width: 375px;
    min-height: 100px;
    max-height: 80%;
    width: 80%;
    background-color: #fff;
    border-radius: $--radius;
    overflow: hidden;

    .__header{
        padding-top: $--padding-small;
        height: $--btn-height;
        line-height: $--btn-height;
        text-align: center;
        font-size: 15px;
        // border-bottom: $--border;
    }

    .__body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 90px;
        font-size: 15px;
        padding: $--padding;
        .message{
            word-break: break-all;
        }
        .ms-input{
            margin-top: $--margin-small;
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
            flex: 1;
            background: transparent;
            border: none;
            font-size: 15px;
            &:hover,&:focus{
                background: transparent;
                border: none;
            }
            &:active{
                background: $--color-border;
            }
            &.ms-primary-button{
                color: $--color-primary;
            }
        }
        // .ms-button{
        //     // border-radius: 0;
        //     // flex: 1;
        //     border-color: transparent;
        //     height: $--btn-height;
        //     line-height: $--btn-height;
        //     &:hover,&:focus{
        //         border-color: transparent;
        //     }
        // }
    }
}

</style>
