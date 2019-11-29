<template>
    <ms-page>
        <ms-container>
            <p v-for="item in 50" :key="'a'+ item">{{item}}</p>
        </ms-container>
        <ms-side-menu>
            <div>
                left
            </div>
        </ms-side-menu>


        <!-- <ms-side-menu position="right">
            <div>
                right
            </div>
        </ms-side-menu> -->
    </ms-page>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>