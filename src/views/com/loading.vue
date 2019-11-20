<template>
    <ms-page>
        <ms-container>
            <h3>loading</h3>
            <ms-button @click.native="$loading.show('加载中')">带文字</ms-button>
            <ms-button @click.native="$loading.show()">不带文字</ms-button>
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