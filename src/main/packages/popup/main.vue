<template>
    <div class="ms-popup" :class="{'is-center':center}" v-if="value" @click="clickHandle">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'MsPopup',
    props: {
        value: Boolean,
        center: Boolean,
        isClickOtherClose: Boolean
    },
    methods: {
        clickHandle(e){
            if (this.isClickOtherClose){
                this.$emit('input', false)
            }
            this.$emit('click', e)
        }
    }
}
</script>