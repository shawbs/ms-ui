<template>
    <div class="ms-popup" :class="{'is-center':center}" v-if="value">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'MsPopup',
    props: {
        value: Boolean,
        center: Boolean
    }
}
</script>

<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
.ms-popup{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000, .5);
    z-index: $--z-index-7;
    &.is-center{
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>