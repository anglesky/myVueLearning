<template>
  <div id="app">
    <div class="menu">
      <mainMenu></mainMenu>
    </div>
    <div class="main-body">
      <mainHeader></mainHeader>
      <router-view/>
    </div>
  </div>
</template>

<script>
import mainMenu from "@/components/MainMenu.vue";
import mainHeader from "@/components/MainHeader.vue";
export default {
  name: 'App',
  components:{
    mainMenu,
    mainHeader
  },
  watch:{
    //监听路由变化
    $router(to,from){
      console.log(to);
      document.title = to.meta.title;
    }
  },
}
</script>
<style>
  html, body{
    padding: 0;
    margin: 0;
  }
</style>
<style lang="less" scoped>

#app {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  .menu{
    width: 200px;
  }
  .main-body{
    flex-grow: 1;
    // width: (100wh - 200px);
  }
}
</style>
