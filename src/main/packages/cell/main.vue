<template>
    <div class="ms-cell">
        <div class="ms-cell-label" v-if="label">
            <template v-if="!$slots.label">{{label}}</template>
            <slot name="label"/>
        </div>
        <div class="ms-cell-content">
            <slot/>
        </div>
        <div class="ms-cell-suffix">
            <slot name="suffix"/>
            <ms-icon v-if="link" icon="arrow-right"></ms-icon>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MsCell',
    props: {
        label: String,
        link: Boolean
    }
}
</script>