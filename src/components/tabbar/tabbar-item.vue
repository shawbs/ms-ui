<template>
    <div :class="['ms-tab-item', isCurrent ? 'ms-tab-item--active':'']" @click="clickHandle()">
        <div class="ms-tab-item-box">
            <div class="ms-tab-item-bage" v-if="bage"><span>{{bage}}</span></div>
            <div class="ms-tab-item-dot" v-if="isDot"></div>
            <template v-if="!$slots.default">
                <div class="ms-tab-item-icon"><ms-icon :icon="icon || 'home'"></ms-icon></div>
                <div class="ms-tab-item-label">{{label}}</div>
            </template>
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MsTabbarItem',
    inject: ['MsTabbar'],
    props: {
        icon: String,
        activeColor: String,
        isDot: Boolean,
        bage: String,
        label: String,
        name: {
            required: true,
            type: [String,Number]
        },
        url: String
    },
    computed: {
        isCurrent(){
            return this.MsTabbar.value === this.name
        }
    },
    methods: {
        clickHandle (target) {
            this.url && this.url !== this.$route.path && this.$router.push(this.url)
            this.MsTabbar.changeHandle(this.name || 0)
        }
    }
}
</script>

<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
.ms-tab-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $--color-text;
    cursor: pointer;
    &.ms-tab-item--active{
      color: $--color-primary;
    }
    .ms-tab-item-box{
        position: relative;
        text-align: center;
    }
    .ms-tab-item-bage{
        position: absolute;
        top: -4px;
        left: 90%;
        font-size: 12px;
        min-width: 20px;
        max-width: 30px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background: $--color-danger;
        color: white;
        border-radius: 10px;
        overflow: hidden;
        z-index: 1;
        >span{
            display: inline-block;
            transform: scale(.8);
        }
    }
    .ms-tab-item-dot{
        position: absolute;
        top: 0;
        left: 90%;
        font-size: 0;
        width: 10px;
        height: 10px;
        text-align: center;
        background: $--color-danger;
        border-radius: 50%;
    }
}
</style>
