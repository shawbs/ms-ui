<template>
    <transition name="bounce">
        <div
            :class="['popup loader-box']"
            v-if="show"
            @click.self="onPopup('cancel')"
        >
            <div class="loader">
                <div class="text-center ">
                    <i class="iconfont icon-loading rotate"></i>
                </div>
                <div class="content mt-10" v-if="message" v-html="message"></div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'MsLoading',
    data () {
        return {
            show: false,
            message: '',
            time: 0,
            timer: null,
            callback: null,
            isClickOtherClose: false, // 是否点击蒙层关闭
            action: ''
        }
    },
    watch: {
        show (val) {
            if (this.time > 0) {
                this.timer = setTimeout(() => {
                    this.doClose()
                    clearTimeout(this.timer)
                }, this.time)
            }
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
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
.popup-wrap {
    > .popup {
        &.loader-box {
            background: transparent;
            z-index: $--z-index-8;
        }
    }
}

.popup.loader-box {
    color: $--color-text;
    font-size: 1.4rem;
    .loader{
        background: rgba(0, 0, 0, .8);
        padding: 2rem;
        color: #ffffff;
        border-radius: .4rem;
        @extend %flexcenter;
        flex-direction: column;
        font-size: 1.2rem;
        .icon-loading{
            font-size: 1.6rem;
            display: flex;
            align-items: center;
        }
    }
}
</style>
