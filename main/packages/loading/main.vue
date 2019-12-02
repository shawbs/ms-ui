<template>
    <ms-popup center v-model="show" @click="clickPopup('close')">
        <div :class="['ms-loading']">
            <ms-icon icon="loading"></ms-icon>
            <div>{{message}}</div>
        </div>
    </ms-popup>
</template>

<script>
import MsPopup from '../popup/main'
import MsIcon from '../icon/main'
export default {
    name: 'MsToast',
    components: {MsPopup,MsIcon},
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

