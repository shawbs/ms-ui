<template>
    <div class="ms-side-menu"
    v-append-to-body
    ref="sideMenu"
    :style="translate"
    :class="[
    ]">
        <slot />
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
            drawing: false
        }
    },
    computed: {
        width(){
            return this.$refs.sideMenu.offsetWidth
        },
        translate(){
            return `opacity:${Number(this.ready)};transform: translate3D(${this.left}px, 0, 0);`
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
            let direction = '' //方向
            let num = 0 //距离

            const startFn = function(e) {
                startX = e.touches[0].clientX
                self.drawing = true
            }

            const moveFn = function(e) {
                moveX = e.touches[0].clientX
                num = moveX - startX
                if (num > 0){
                    direction = 'ltr'
                    if (self.position === 'left'){
                        self.left = num < self.width ? self.left + 1 : 0
                    }
                    if (self.position === 'right'){
                        self.left = num < self.width ? self.left + 1 : document.body.scrollWidth
                    }
                }
                if (num < 0){
                    direction = 'rtl'
                    if (self.position === 'left'){
                        self.left = num < self.width ? self.left - 1 : -self.width
                    }
                    if (self.position === 'right'){
                        self.left = num < self.width ? self.left - 1 : self.width
                    }
                }
            }

            const endFn = function(e) {
                if (direction === 'ltr'){
                    if (self.position === 'left'){
                        self.left = num > self.width/2 ? 0 : -self.width
                    }
                    if (self.position === 'right'){
                        self.left = num > self.width/2 ? document.body.scrollWidth : self.width
                    }
                }
                if (direction === 'rtl'){
                    if (self.position === 'left'){
                        self.left = Math.abs(num) >= self.width/2 ? -self.width : 0
                    }
                    if (self.position === 'right'){
                        self.left = Math.abs(num) >= self.width/2 ? self.width : document.body.scrollWidth
                    }
                }
                // console.log(direction, num)
                num = 0
                direction = ''
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