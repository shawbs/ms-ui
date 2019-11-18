<template>
    <ms-page>
        <ms-container>
            <ms-tabbar v-model="tabbarName" position="top">
                <ms-tabbar-item name="1">top</ms-tabbar-item>
                <ms-tabbar-item name="2">top</ms-tabbar-item>
                <ms-tabbar-item name="3">top</ms-tabbar-item>
            </ms-tabbar>
            <h3 v-for="item in 10" :key="item">{{item}}</h3>
            <ms-tabbar v-model="tabbarName">
                <ms-tabbar-item name="1">item</ms-tabbar-item>
                <ms-tabbar-item name="2">item</ms-tabbar-item>
                <ms-tabbar-item name="3">item</ms-tabbar-item>
            </ms-tabbar>

            <ms-tabbar v-model="tabbarName" position="bottom">
                <ms-tabbar-item name="1">bottom</ms-tabbar-item>
                <ms-tabbar-item name="2">bottom</ms-tabbar-item>
                <ms-tabbar-item name="3">bottom</ms-tabbar-item>
            </ms-tabbar>
        </ms-container>
    </ms-page>
</template>

<script>
export default {
    data(){
        return {
            tabbarName: '2'
        }
    }
}
</script>
