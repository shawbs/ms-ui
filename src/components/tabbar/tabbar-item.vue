<template>
    <div :class="['ms-tab-item', `${selected ? 'selected': ''}`]" :data-url="url" @click="clickHandle($refs.tabItem)" ref="tabItem">
        <div class="bage" v-if="bage">{{bage}}</div>
        <div class="tab-icon" v-if="icon">{{item.icon}}</div>
        <div class="tab-label" :style='labelStyle'><slot /></div>
    </div>
</template>

<script>
export default {
    name: 'MsTabbarItem',
    props: {
        selected: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        },
        selectColor: {
            type: String,
            default: ''
        },
        bage: {
            type: Number,
            default: 0
        },
        url: {
            type: String,
            default: ''
        }
    },
    computed: {
        labelStyle () {
            return this.color ? `color: ${this.color};` : ''
        }
    },
    methods: {
        clickHandle (target) {
            let { url } = target.dataset
            url && this.$router.push(url)
            this.$emit('on-click', this)
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
.ms-tab-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    >.bage{
        position: absolute;
        font-size: 1.4rem;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: $--color-danger;
        color: white;
        border-radius: 25px;
    }
    .tab-label{
      color: $--color-text;
    }
    &.selected{
      .tab-label{
        color: #fff;
      }
    }
}
</style>
