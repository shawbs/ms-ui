<template>
    <ms-page>
        <ms-container>
            <p v-for="item in 50" :key="'a'+ item">{{item}}</p>
        </ms-container>
        <ms-side-menu>
            <div style="width: 300px;">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </ms-side-menu>
    </ms-page>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>