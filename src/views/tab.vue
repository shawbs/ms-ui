<template>
  <div class="tab-page">

    <router-view></router-view>

    <ms-tabbar v-model="tabbarName">
      <ms-tabbar-item name="tab1" is-dot url="/tab/home">首页</ms-tabbar-item>
      <ms-tabbar-item name="tab2" bage="102">tab2</ms-tabbar-item>
      <ms-tabbar-item name="tab3" bage="2">tab3</ms-tabbar-item>
      <ms-tabbar-item name="tab4" url="/tab/mine">mine</ms-tabbar-item>
    </ms-tabbar>
  </div>
</template>

<script>
export default {
    name: 'home',
    data(){
        return {
            tabbarName: ''
        }
    }
}
</script>
