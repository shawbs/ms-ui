<template>
    <ms-popup center :value="show" @click.native.self="clickPopup('close')">
        <div :class="['ms-loading']">
            <ms-icon icon="loading"></ms-icon>
            <div>{{message}}</div>
        </div>
    </ms-popup>
</template>

<script>
export default {
    name: 'MsToast',
    data () {
        return {
            show: false,
            message: '',
            isClickOtherClose: false, // 是否点击蒙层关闭toast
            align: 'center'
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
        }
    }
}
</script>

