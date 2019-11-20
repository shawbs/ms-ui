<template>
    <div class="ms-img" :class="[fit]" :style="{width: w, height: h}" ref="msImg">
        <img class="ms-img-inner"
        :alt="alt"
        @load="loadHandle"
        @error="failHandle"
        v-show="isload"
        v-if="lazy && !isError"
        ref="img"
        >

        <img class="ms-img-inner"
        :src="src"
        :alt="alt"
        @load="loadHandle"
        @error="failHandle"
        v-if="!lazy && !isError">

        <div class="ms-img-tip" v-if="loading">
            <div><ms-icon icon="loading"></ms-icon></div>
        </div>
        <div class="ms-img-tip" v-if="isError">
            <div>
                <slot name="error"/>
                <ms-icon icon="tip" v-if="!$slots.error"></ms-icon>
            </div>
        </div>

    </div>
</template>

<script>
import util from '../../utils'
export default {
    name: 'MsImg',
    props: {
        src: String,
        alt: String,
        width: [Number, String],
        height: [Number, String],
        lazy: Boolean,
        scrollContainer: String, //滚动容器的类名，或者dom元素
        fit: {
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['fill', 'contain', 'cover','none','scale-down'].indexOf(value) !== -1
            },
            default: 'fill'
        },
        showLoading: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            isload: false, //图片是否加载完成
            loading: !this.lazy && this.showLoading,
            isError: false, //图片是否加载失败
            myScrollContainer: null //图片是懒加载时，它的滚动区域
        }
    },
    computed: {
        w(){
            return typeof this.width === 'number' ? this.width + 'px' : this.width
        },
        h(){
            return typeof this.height === 'number' ? this.height + 'px' : this.height
        }
    },
    mounted(){
        if (this.lazy) {
            this.myScrollContainer = this.getScrollContainer()
            this.lazyHandle()
            util.on(this.myScrollContainer, 'scroll', this.lazyHandle)
        }
    },
    beforeDestroy(){
        if (this.lazy) {
            util.off(this.myScrollContainer, 'scroll', this.lazyHandle)
        }
    },
    methods: {
        loadHandle(e){
            this.isError = false
            this.loading = false;
            this.isload = true
            this.$emit('load',e)
        },
        failHandle(e){
            this.isError = true
            this.loading = false
            this.isload = false
            this.$emit('error',e)
        },
        lazyHandle(){
            // console.log('lazy')
            let seeHeight = document.body.clientHeight; //可视窗口高度
            // let scrollTop = this.myScrollContainer.scrollTop; //滚动条的滚动高度
            let box = this.$refs.msImg
            let top = box.getBoundingClientRect().top
            // console.log(top, seeHeight)
            if (top <= seeHeight){
                if (!this.isload){
                    this.loading = true
                    this.$refs.img.src = this.src
                }
            }
        },
        getScrollContainer(){
            let dom
            if (typeof this.scrollContainer === 'string'){
                dom = document.querySelector(this.scrollContainer)
            } else if (typeof this.scrollContainer === 'object' && this.scrollContainer.nodeType === 1){
                dom = this.scrollContainer
            } else {
                let img = this.$refs.msImg
                let parent = img.parentNode
                let overflow = getComputedStyle(parent).overflow
                while (['auto','scroll'].indexOf(overflow) < 0){
                    parent = parent.parentNode
                    overflow = getComputedStyle(parent).overflow
                }
                dom = parent
            }
            return dom
        }
    }
}
</script>