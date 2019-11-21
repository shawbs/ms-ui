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
import util from '../../utils/index'
export default {
    name: 'MsSideMenu',
    data(){
        return {
            left: 0,
            slide: null,
            ready: false
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
        this.left = - this.width
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
            let start = this.left // 起点
            let end = 0 // 终点
            let direction = '' //方向
            let num = 0 //距离

            const startFn = function(e) {
                startX = e.touches[0].clientX
            }

            const moveFn = function(e) {
                moveX = e.touches[0].clientX
                num = moveX - startX
                console.log(num)
                if (num > 0){
                    direction = 'ltr'
                    if (num < self.width){
                        self.left = self.left + 1
                    } else {
                        self.left = end
                    }
                }
                if (num < 0){
                    direction = 'rtl'
                    if (Math.abs(num) < self.width){
                        self.left = self.left - 1
                    } else {
                        self.left = start
                    }
                }
            }

            const endFn = function(e) {
                if (direction === 'ltr'){
                    if (num >= self.width/2){
                        self.left = end
                    } else {
                        self.left = start
                    }
                }
                if (direction === 'rtl'){
                    if ( Math.abs(num) >= self.width/2){
                        self.left = start
                    } else {
                        self.left = end
                    }
                }
                console.log(direction, num)
                num = 0
                direction = ''
            }

            util.on(container,'touchstart', startFn)
            util.on(container,'touchmove', moveFn)
            util.on(container,'touchend', endFn)


            return {
                destroy: function (){
                    util.off(container,'touchstart', startFn)
                    util.off(container,'touchmove', moveFn)
                    util.off(container,'touchend', endFn)
                }
            }
        }
    }
}
</script>