<template>
  <div class="ms-tab-page">

    <router-view></router-view>

    <ms-tabbar v-model="tabbarName" position="bottom">
      <ms-tabbar-item name="tab1" is-dot url="/tab/home" label="首页"></ms-tabbar-item>
      <ms-tabbar-item name="tab3" bage="2" label="tab3" @click.native="clickHandle">
        <ms-img src="https://img.yzcdn.cn/vant/cat.jpeg" fit="cover" :width="44" :height="44"></ms-img>
      </ms-tabbar-item>
      <ms-tabbar-item name="tab4" url="/tab/about" label="about"></ms-tabbar-item>
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
    },
    methods: {
        clickHandle(e){
            this.$alert('click')
        }
    }
}
</script>
