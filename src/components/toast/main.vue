<template>
    <transition name="bounce">
        <div class="ms-box" v-if="show" @click.self="clickPopup('close')">
            <div :class="['ms-toast',`align`]">
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
            time: 3000,
            timer: null,
            isClickOtherClose: true, // 是否点击蒙层关闭toast
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
        clickPopup (action) {
            if (this.isClickOtherClose) this.handleAction(action)
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

<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';

.ms-toast{
    background: rgba(0, 0, 0, .8);
    padding: 20px 25px;
    color: #ffffff;
    border-radius: .4rem;
    &.top{
        align-self: flex-start;
        margin-top: 2rem;
    }
    &.bottom{
        align-self: flex-end;
        margin-bottom: 2rem;
    }
}

</style>
