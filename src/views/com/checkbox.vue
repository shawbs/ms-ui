<template>
    <ms-page>
        <ms-container>
            <ms-checkbox v-model="agree" >ccc</ms-checkbox>
            <ms-checkbox v-model="agree" disabled>ccc</ms-checkbox>
            <br>
            <ms-checkbox-group v-model="checkbox">
                <ms-checkbox label="1">你的</ms-checkbox>
                <ms-checkbox label="2">我的</ms-checkbox>
            </ms-checkbox-group>
        </ms-container>
    </ms-page>
</template>

<script>
export default {
    data(){
        return {
            checkbox: ['1'],
            agree: false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>