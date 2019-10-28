<template>
    <transition name="bounce">
        <div
            :class="['popup toast-box']"
            v-if="show"
            @click.self="onPopup('cancel')"
        >
            <div :class="['toast',align]">
                <div>{{message}}</div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'MsToast',
    data () {
        return {
            show: false,
            message: '',
            time: 0,
            timer: null,
            callback: null,
            isClickOtherClose: false, // 是否点击蒙层关闭toast
            action: '',
            align: 'center'
        }
    },
    watch: {
        show (val) {
            this.$nextTick(() => {
                this.autoClose()
            })
        }
    },
    methods: {
        onPopup (action) {
            if (!this.isClickOtherClose) return
            this.handleAction(action)
        },
        handleAction (action) {
            this.action = action
            this.doClose()
        },
        doClose () {
            this.show = false
            this.callback && this.callback(this.action, this)
        },
        autoClose () {
            if (this.time > 0) {
                this.timer = setTimeout(() => {
                    this.doClose()
                    clearTimeout(this.timer)
                }, this.time)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
.popup-wrap {
    > .popup {
        &.toast-box {
            background: transparent;
            z-index: $--z-index-8;
        }
    }
}

.popup.toast-box {
    color: $--color-text;
    font-size: 1.4rem;
    flex-direction: row;
    .toast{
        background: rgba(0, 0, 0, .8);
        padding: 20px 25px;
        color: #ffffff;
        border-radius: .4rem;
        @extend %flexcenter;
        &.top{
            align-self: flex-start;
            margin-top: 2rem;
        }
        &.bottom{
            align-self: flex-end;
            margin-bottom: 2rem;
        }
    }
}
</style>
