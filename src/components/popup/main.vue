<template>
    <div class="ms-popup">
    </div>
</template>

<script>
export default {
    name: 'MsPopup',
    props: {
        value: Boolean
    },
    data(){
        return {
            show: false
        }
    }
}
</script>

<style lang="scss">
@import '~@/style/variables.scss';
.ms-popup{
}
</style>