<template>
  <div id="app">
    <div id="v-content" v-bind:style="{minHeight: Height+'px'}">
      <indexNav v-show="(path ==='/')"></indexNav>
      <router-view />
    </div>
    <Footer class="foot">
      <div class="foot-left">
        <span>2020毕业设计</span>
      </div>
      <div class="foot-right">
        <span>author:xy</span>
      </div>
    </Footer>
  </div>
</template>

<script>
import indexNav from '@/components/common/indexNav'
export default {
  name: 'App',
  data(){
    return{
      path:'',
      Height: 0
    }
  },
  components:{
    indexNav
  },
  mounted(){
    this.path = this.$route.path;
    // console.log(this.$route.path)
    this.Height = document.documentElement.clientHeight - 45; //监听浏览器窗口变化
    window.onresize = () => {
      this.Height = document.documentElement.clientHeight - 45;
    };
  },
  watch:{
    $route(to,from){
          this.path = to.path
    }
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.foot {
  width: 100%;
  height: 45px;
  background-color: #2c3e50;
  color: aliceblue;
}
.foot .foot-left{
  float: left;
  margin-left: 10px;
  line-height: 45px;
}

.foot .foot-right{
  float: right;
  margin-right: 10px;
  line-height: 45px;
}
</style>
