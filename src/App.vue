<template>
  <div id="App" class="app">
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "~ms-ui/packages/theme/src/comom/variables";
@import "~ms-ui/packages/theme/src/comom/mixins";
.app{
  font-size: 1.4rem;
  .ms-container{
      background: #f2f2f2;
  }
  .ms-button{
      margin-bottom: 10px;
  }
  .title{
    text-align: center;
    margin: $--margin;
  }
  .logo{
    display: inline-block;
    line-height: 3em;
    text-align: center;
    font-size: 20px;
    color: #333;
    position: relative;
  }
}

</style>
