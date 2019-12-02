<template>
    <ms-page>
        <ms-container>
            <ms-radio v-model="pos" label="left">left</ms-radio>
            <ms-radio v-model="pos" label="right">right</ms-radio>
            <p v-for="item in 50" :key="'a'+ item">{{item}}</p>
        </ms-container>
            <ms-side-menu :position="pos">
                <div>
                    {{pos}}
                </div>
            </ms-side-menu>
    </ms-page>
</template>

<script>
export default {
    data(){
        return {
            pos: 'left'
        }
    }
}
</script>

<style lang="scss">

</style>