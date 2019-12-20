<template>
    <div class="ms-pull-refresh">
        <div class="ms-pull-refresh-box" ref="pullRefresh" :style="{
            'margin-top': top ? `${-refreshHeight}px` : 0,
            'margin-bottom': bottom ? `${-refreshHeight}px` : 0,
            'transform': ` translate3D(0, ${y}px, 0)`,
            'transition': doAn ? 'transform .6s ease' : 'none 0s ease'
            }">
            <div class="ms-pull-refresh-head" ref="pullRefreshHead" :style="{height: refreshHeight + 'px'}">
                <ms-icon icon="loading"></ms-icon>
                {{tip}}
            </div>
            <!-- <div class="ms-pull-refresh-content" ref="pullRefresh">
                <slot />
            </div> -->
            <slot />
        </div>
    </div>
</template>

<script>
import {on, off} from '../../utils/index'
export default {
    name: 'MsPullRefresh',
    props: {
        top: {
            type: Boolean,
            default: true
        },
        bottom: Boolean,
        refreshHeight: {
            type: Number,
            default: 80
        }
    },
    data(){
        return {
            loading: false,
            y: 0,
            doAn: false,
            status: 0 //0初始 1下拉 2刷新 3刷新完成
        }
    },
    computed: {
        tip(){
            switch (this.status){
            case 0:
                return '下拉刷新'
            case 1:
                return '释放刷新'
            case 2:
                return '正在刷新'
            case 3:
                return '刷新完成'
            default: return ''
            }
        }
    },
    mounted(){
        this.slide = this.slideFunc(document.body)
    },
    beforeDestroy(){
        this.slide.destroy()
    },
    methods: {
        slideFunc(container){
            let startX, startY;
            let self = this
            let speed = 3 //滑动速度
            let margin = 10 //超出距离
            let num = 0 //滑动距离
            const startFn = function(e) {

                startY = e.touches[0].clientY
                self.doAn = false
            }

            const moveFn = function(e) {
                console.log(self.$refs.pullRefresh, self.$refs.pullRefresh.scrollTop)
                if (self.$refs.pullRefresh.scrollTop !== 0) return
                num = e.touches[0].clientY - startY
                if (num > 0 && self.status === 0){
                    self.loading = true
                    if (self.y < self.refreshHeight + margin){
                        self.y = self.y + speed
                    } else {
                        self.y = self.refreshHeight + margin
                        self.status = 1
                    }
                }
            }

            const endFn = function(e) {
                // console.log(num)
                if (Math.abs(num) > 0){
                    self.doAn = true
                    num = 0
                    if (self.y > self.refreshHeight/2){
                        self.start()
                    } else {
                        self.stop()
                    }
                }
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
        },
        start(){
            this.status = 2;
            this.y = this.refreshHeight;
            this.doAn = true
            this.loading = true
        },
        stop(){
            this.status = 3;
            this.y = 0;
            this.doAn = true
            this.loading = false
            setTimeout(()=>{
                console.log(2)
                this.status = 0
            },500)
        }
    }

}
</script>