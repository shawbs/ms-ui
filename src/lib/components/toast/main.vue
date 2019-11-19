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

