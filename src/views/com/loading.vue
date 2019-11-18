<template>
    <ms-page>
        <ms-container>
            <h3>loading</h3>
            <ms-button @click.native="loadingClick">loadding</ms-button>
            <br/>
        </ms-container>
    </ms-page>
</template>

<script>
export default {
    methods: {
        loadingClick(){
            this.$loading.show('加载中')
            setTimeout(()=>{
                this.$loading.hide()
            }, 5000)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>