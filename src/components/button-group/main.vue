<template>
    <div class="ms-button-group">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'MsButtonGroup'
}
</script>

<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/mixins.scss';
.ms-button-group{
    .ms-button{
        border-radius: 0;
        &:first-of-type{
            border-radius: $--radius 0 0 $--radius;
        }
        &:last-of-type{
            border-radius: 0 $--radius $--radius 0;
        }
    }
}
</style>