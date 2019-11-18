<template>
    <ms-page>
        <ms-container>
            <h3>input</h3>
            <ms-input v-model="inputValue">
                <ms-icon icon="loading" slot="prepend"></ms-icon>
                <ms-icon icon="loading" slot="prefix"></ms-icon>
                <ms-icon icon="loading" slot="suffix"></ms-icon>
                <ms-icon icon="loading" slot="append"></ms-icon>
            </ms-input>
            <ms-input v-model="inputValue" show-close></ms-input>
            <ms-input type="textarea" placeholder="asda" v-model="inputValue"></ms-input>
            <br/>
        </ms-container>
    </ms-page>
</template>

<script>
export default {
    data(){
        return {
            inputValue: 'asd'
        }
    }
}
</script>

<style lang="scss" scoped>
.ms-input-box{
    margin-bottom: 10px;
}
</style>