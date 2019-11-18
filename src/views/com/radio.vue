<template>
    <ms-page>
        <ms-container>
            <ms-radio v-model="radioValue" label="1">aaa</ms-radio>
            <ms-radio v-model="radioValue" label="2">bbb</ms-radio>
            <ms-radio v-model="radioValue" label="3">ccc</ms-radio>
            <ms-radio v-model="radioValue" label="4" disabled>ccc</ms-radio>
            <br>
            <ms-radio-group v-model="radioValue">
                <ms-radio label="1">aaa</ms-radio>
                <ms-radio label="2">bbb</ms-radio>
            </ms-radio-group>
        </ms-container>
    </ms-page>
</template>

<script>
export default {
    data(){
        return {
            radioValue: ''
        }
    }
}
</script>

<style lang="scss" scoped>

</style>