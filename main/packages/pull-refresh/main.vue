<template>
    <div class="ms-pull-refresh">
        <div class="ms-pull-refresh-content" ref="pullRefresh" :style="translate">
            <div class="ms-pull-refresh-head" ref="pullRefreshHead">
                <ms-icon icon="loading"></ms-icon>
                {{tip}}
            </div>
            <slot />
        </div>
    </div>
</template>

<script>
import {on, off} from '../../utils/index'
export default {
    name: 'MsPullRefresh',
    data(){
        return {
            loading: false,
            headH: 0,
            top: 0,
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
        },
        translate(){
            return `margin-top:${-this.headH}px;transform: translate3D(0, ${this.top}px, 0);transition: ${this.doAn ? 'transform .6s ease' : 'none 0s ease'};`
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
            this.headH = this.$refs.pullRefreshHead.offsetHeight
        },
        slideFunc(container){
            let startX, startY,moveX;
            let self = this
            let speed = 3 //滑动速度
            let margin = 10 //超出距离
            let isSide = false
            const startFn = function(e) {
                console.log(self.$refs.pullRefresh.scrollTop)
                if (self.$refs.pullRefresh.scrollTop !== 0) return
                startY = e.touches[0].clientY
                self.doAn = false
            }

            const moveFn = function(e) {
                let num = e.touches[0].clientY - startY
                isSide = num !== 0
                if (num > 0 && self.status === 0){
                    if (self.top < self.headH + margin){
                        self.top = self.top + speed
                    } else {
                        self.top = self.headH + margin
                        self.status = 1
                    }
                }
            }

            const endFn = function(e) {
                if (isSide){
                    self.doAn = true
                    if (self.status === 1 ){
                        if (self.top > self.headH/2){
                            self.start()
                        } else {
                            self.stop()
                        }
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
            if (this.loading) return
            this.status = 2;
            this.top = this.headH;
            this.doAn = true
            this.loading = true
        },
        stop(){
            if (!this.loading) return
            this.status = 3;
            this.top = 0;
            this.doAn = true
            this.loading = false
            setTimeout(() => {
                this.status = 0;
            }, 1000);
        }
    }

}
</script>

<style lang="scss" scoped>

</style>