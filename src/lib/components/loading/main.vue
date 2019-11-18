<template>
    <div class="ms-box" v-if="show" @click.self="clickPopup('close')">
        <div :class="['ms-loading']">
            <ms-icon icon="loading"></ms-icon>
            <div>{{message}}</div>
        </div>
    </div>
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

<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';

.ms-loading{
    background: rgba(0, 0, 0, .8);
    padding: 20px 25px;
    color: #ffffff;
    border-radius: .4rem;
    text-align: center;
    .ms-icon-loading{
        font-size: 24px;
    }
}

</style>

