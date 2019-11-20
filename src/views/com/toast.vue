<template>
    <ms-page>
        <ms-container>
            <h3>toast</h3>
            <ms-button @click.native="$toast('asdasdasd')">center</ms-button>
            <ms-button @click.native="$toast('asdasdasd', {align: 'top'})">top</ms-button>.
            <ms-button @click.native="$toast('asdasdasd',{align: 'bottom'})">bottom</ms-button>
            <br/>
        </ms-container>
    </ms-page>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>