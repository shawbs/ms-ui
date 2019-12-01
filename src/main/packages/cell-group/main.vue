<template>
    <div class="ms-cell-group">
        <div class="ms-cell-title" v-if="title">{{title}}</div>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'MsCellGroup',
    props: {
        title: String
    }
}
</script>