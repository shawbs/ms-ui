<template>
    <div class="ms-side-menu"
    v-append-to-body
    ref="sideMenu"
    :style="style"
    :class="[
    `is-${position}`
    ]">
        <div class="ms-side-menu-content" >
            <slot />
        </div>
    </div>
</template>

<script>
import {on, off} from '../../utils/index'
import {appendToBody} from '../../directive'
export default {
    name: 'MsSideMenu',
    props: {
        position: {
            type: String,
            default: 'left'
        }
    },
    directives: {appendToBody},
    data(){
        return {
            left: 0,
            slide: null,
            drawing: false,
            doAn: false,

            clientX: -1, // 当前鼠标x坐标
            direction: '', //当前滑动方向

            style: null
        }
    },
    computed: {
        offsetWidth(){
            return this.$refs.sideMenu.offsetWidth
        },
        translate(){
            return `position:fixed;top:0;left:0;width:100%;height:100%;transform: translate3D(${this.left}px, 0, 0);transition: ${this.doAn ? 'transform .6s ease' : 'none 0s ease'};`
        }
    },
    watch: {
        clientX(val, old){
            if (old !== -1 && val !== -1){
                if (val > old){
                    this.direction = 'ltr'
                }
                if (val < old){
                    this.direction = 'rtl'
                }
            }
        },
        translate(val){
            // console.log(val)
            document.body.style = val
        },
        position(val){
            if (val){
                this.init()
            }
        }
    },
    mounted(){
        this.init()

        this.slide = this.slideFunc(document.body)

    },
    beforeDestroy(){
        this.slide.destroy()
    },
    methods: {

        init(){
            console.log('init')
            this.style = {
                left: this.position === 'left' ? -this.offsetWidth + 'px' : 'auto',
                right: this.position === 'right' ? -this.offsetWidth + 'px' : 'auto',
                opacity: 1
            }
        },

        slideFunc(container){
            let startX, startY,moveX;
            let self = this
            let speed = 3 //滑动速度
            let margin = 10 //超出距离
            let space = 5 // 垂直距离超出这个值则不会滑动
            let disabled = false
            const startFn = function(e) {
                startY = e.touches[0].clientY
                self.clientX = startX = e.touches[0].clientX
                self.drawing = true
                self.doAn = false
                disabled = true
            }

            const moveFn = function(e) {
                self.clientX = moveX = e.touches[0].clientX
                let spaceY = e.touches[0].clientY - startY

                if (Math.abs(spaceY) < space) {
                    disabled = false
                }

                if (disabled) return

                if (self.direction === 'ltr'){
                    if (self.position === 'left'){
                        let end = self.offsetWidth
                        if (self.left !== end){
                            self.left = self.left >= end + margin ? end : self.left + speed
                        }
                    }
                    if (self.position === 'right'){
                        let end = 0
                        if (self.left !== end){
                            self.left = self.left > end + margin ? end : self.left + speed
                        }
                    }
                }
                if (self.direction === 'rtl'){
                    if (self.position === 'left'){
                        let end = 0
                        if (self.left !== end) {
                            self.left = self.left <= end - margin ? end : self.left - speed
                        }
                    }
                    if (self.position === 'right'){
                        let end = - self.offsetWidth
                        if (self.left !== end){
                            self.left = self.left <= end - margin ? end : self.left - speed
                        }
                    }
                }
            }

            const endFn = function(e) {
                self.doAn = true

                if (self.position === 'left'){
                    self.left = self.left <= self.offsetWidth/2 ? 0 : self.offsetWidth
                }
                if (self.position === 'right'){
                    self.left = Math.abs(self.left) >= self.offsetWidth/2 ? - self.offsetWidth : 0
                }

                self.direction = ''
                self.clientX = -1
                self.drawing = false
            }

            on(container,'touchstart', startFn)
            on(container,'touchmove', moveFn)
            on(container,'touchend', endFn)

            return {
                destroy: function (){
                    off(container,'touchstart', startFn)
                    off(container,'touchmove', moveFn)
                    off(container,'touchend', endFn)
                }
            }
        }
    }
}
</script>