<template>
    <div class="ms-col" :class="[`ms-col-${span}`]"
    :style="{
        'padding-left':MsRow.span + 'px',
        'padding-right': MsRow.span + 'px'
        }">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'MsCol',
    props: {
        span: Number
    },
    inject: ['MsRow']
}
</script>

<style lang="scss" scoped>

</style>