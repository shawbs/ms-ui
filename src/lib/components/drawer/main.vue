<template>
    <ms-popup @click.native.self="close" :value="value">
        <transition :name="direction">
            <div class="ms-drawer" :class="[`is-${direction}`]" v-if="visible" :style="{width}" @animationend="hidePopup">
                <slot />
            </div>
        </transition>
    </ms-popup>
</template>

<script>
export default {
    name: 'MsDrawer',
    props: {
        appendToBody: Boolean,
        value: Boolean,
        direction: {
            type: String,
            default: 'ltr',
            validator(val){
                return ['ltr','rtl'].indexOf(val) !== -1
            }
        },
        width: String
    },
    watch: {
        value(val){
            if (val){
                if (this.appendToBody) {
                    document.body.appendChild(this.$el);
                }
                this.open()
            } else {
                this.close()
            }
        }
    },
    data(){
        return {
            visible: this.value
        }
    },
    methods: {
        open(){
            this.$nextTick(()=> {
                this.visible = true
                this.$emit('open')
            })
        },
        close(){
            this.visible = false
        },
        hidePopup(){
            if (this.visible === false){
                this.$emit('input', false)
                this.$emit('close')
            }
        }
    }
}
</script>

<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
.ms-drawer{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background: #ffffff;
    min-width: 50%;
    &.is-rtl{
        left: auto;
        right: 0;
    }
    &.is-ltr{
        left: 0;
        right: auto;
    }
}

/*左入动画*/
.ltr-enter-active {
    z-index: 1;
    animation: left-in .5s;
}

.ltr-leave-active {
    animation: left-out .5s;
}

/*右入动画*/
.rtl-enter-active {
    animation: right-in .5s;
}

.rtl-leave-active {
    z-index: 1;
    animation: right-out .5s;
}
</style>