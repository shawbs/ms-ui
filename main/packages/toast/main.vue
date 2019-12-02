<template>
        <transition name="fade" appear>
            <div :class="['ms-toast',`is-${align}`]" v-if="visible">
                <div class="ms-toast-text">{{message}}</div>
            </div>
        </transition>
</template>

<script>
export default {
    name: 'MsToast',
    data () {
        return {
            visible: false,
            message: '',
            time: 3000,
            timer: null,
            align: 'center'
        }
    },
    watch: {
        visible (val) {
            this.$nextTick(() => {
                this.autoClose()
            })
        }
    },
    methods: {
        close () {
            this.visible = false
        },
        show(){
            this.visible = true
        },
        autoClose () {
            if (this.time > 0) {
                this.timer && clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                    this.close()
                    clearTimeout(this.timer)
                }, this.time)
            }
        }
    }
}
</script>

