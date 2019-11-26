<template>
    <div class="ms-side-menu"
    v-append-to-body
    ref="sideMenu"
    :style="translate"
    @transitionend="doAn = false"
    :class="[
    ]">
        <div class="ms-side-menu-content">
            <slot />
        </div>
    </div>
</template>

<script>
import {on, off, throttle} from '../../utils/index'
export default {
    name: 'MsSideMenu',
    props: {
        position: {
            type: String,
            default: 'left'
        }
    },
    data(){
        return {
            left: 0,
            slide: null,
            ready: false,
            drawing: false,
            doAn: false,

            clientX: -1, // 当前鼠标x坐标
            direction: '' //当前滑动方向

        }
    },
    computed: {
        width(){
            return this.$refs.sideMenu.offsetWidth
        },
        translate(){
            return `opacity:${Number(this.ready)};transform: translate3D(${this.left}px, 0, 0);transition: ${this.doAn ? 'transform .5s ease .2s' : 'none 0s ease 0s'};`
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
        }
    },
    mounted(){
        if (this.position === 'left'){
            this.left = - this.width
        }
        if (this.position === 'right'){
            this.left = document.body.scrollWidth
        }

        this.slide = this.slideFunc(document.body)
        setTimeout(() => {
            this.ready = true
        }, 1000);
    },
    beforeDestroy(){
        this.slide.destroy()
    },
    methods: {

        slideFunc(container){
            let startX, moveX;
            let self = this
            let speed = 5 //滑动速度
            let margin = 10 //超出距离

            const startFn = function(e) {
                self.clientX = startX = e.touches[0].clientX
                self.drawing = true
            }

            const moveFn = function(e) {
                self.clientX = moveX = e.touches[0].clientX
                // 如果水平移动小于50，则不滑动
                if (Math.abs(moveX - startX) < 50) return

                if (self.direction === 'ltr'){
                    if (self.position === 'left'){
                        let end = 0
                        self.left = self.left >= end + margin ? end + margin : self.left + speed
                    }
                    if (self.position === 'right'){
                        let end = document.body.scrollWidth
                        self.left = self.left >= end + margin ? end : self.left + speed
                    }
                }
                if (self.direction === 'rtl'){
                    if (self.position === 'left'){
                        let end = - self.width
                        self.left = self.left <= end - margin ? end - margin : self.left - speed
                    }
                    if (self.position === 'right'){
                        let end = document.body.scrollWidth - self.width
                        self.left = self.left <= end - margin ? end - margin : self.left - speed
                    }
                }
            }

            const endFn = function(e) {
                self.doAn = true
                if (self.direction === 'ltr'){
                    if (self.position === 'left'){
                        self.left = Math.abs(self.left) <= self.width/2 ? 0 : -self.width
                    }
                    if (self.position === 'right'){
                        self.left = document.body.scrollWidth-self.left <= self.width/2 ? document.body.scrollWidth : document.body.scrollWidth - self.width
                    }
                }
                if (self.direction === 'rtl'){
                    if (self.position === 'left'){
                        self.left = Math.abs(self.left) >= self.width/2 ? -self.width : 0
                    }
                    if (self.position === 'right'){
                        self.left = document.body.scrollWidth-self.left >= self.width/2 ? document.body.scrollWidth - self.width : document.body.scrollWidth
                    }
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