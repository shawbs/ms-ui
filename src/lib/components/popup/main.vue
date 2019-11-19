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