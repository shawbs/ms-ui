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
