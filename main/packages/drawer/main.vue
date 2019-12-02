<template>
    <ms-popup @click.native.self="close" :value="value" v-append-to-body>
        <transition :name="direction">
            <div class="ms-drawer" :class="[`is-${direction}`]" v-if="visible" :style="{width}" @animationend="hidePopup">
                <slot />
            </div>
        </transition>
    </ms-popup>
</template>

<script>
import {appendToBody} from '../../directive'
export default {
    name: 'MsDrawer',
    props: {
        appendToBody: Boolean,
        value: Boolean,
        direction: {
            type: String,
            default: 'ltr',
            validator(val){
                return ['ltr','rtl','ttb','btt'].indexOf(val) !== -1
            }
        },
        width: String
    },
    directives: {appendToBody},
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