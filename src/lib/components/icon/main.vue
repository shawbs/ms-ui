<template>
    <i :class="['ms-icon',`ms-icon-${icon}`] "></i>
</template>

<script>
export default {
    name: 'MsIcon',
    props: {
        icon: String
    }
}
</script>
<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
@import './font/iconfont.css';
.ms-icon{
    display: inline-block;
    font-size: 1.5em;
    vertical-align: baseline;
    line-height: 1;
}
.ms-icon-loading{
    animation: rotating 1.5s infinite linear;
}
</style>