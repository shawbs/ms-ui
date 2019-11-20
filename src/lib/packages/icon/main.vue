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