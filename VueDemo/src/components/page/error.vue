<template>
  <div class="error" v-show="(path !== '/')">
    <div class="box-404">
      <p>
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </p>
    </div>
    <div class="box-text">
      <p>{{msg}}</p>
      <div style="text-align:center">
        您可以
        <a @click="goBack()">返回上一页</a>
        或者
        <router-link to="/">网站首页</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "页面找不到了(´･ω･`)",
      path: ''
    };
  },
  beforeCreate(){
    document.querySelector('body').setAttribute('style', 'margin: 0 auto; width: 100%; max-width: 100%;min-width: 300px; background:#ececec; overflow-x: hidden;height: 100%;');
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goGo(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }
  },
  mounted(){
    this.path = this.$route.path;
  }
}
</script>
<style scoped>
.error {
  background-color: #ececec;
}
#app {
  height: 100%;
}
.box-404 span {
  cursor: pointer;
  text-shadow: 0px 0px 2px #686868, 
    0px 1px 1px #ddd, 0px 2px 1px #d6d6d6,
    0px 3px 1px #ccc, 0px 4px 1px #c5c5c5,
    0px 5px 1px #c1c1c1, 0px 6px 1px #bbb,
    0px 7px 1px #777, 0px 8px 3px rgba(100, 100, 100, 0.4),
    0px 9px 5px rgba(100, 100, 100, 0.1), 0px 10px 7px rgba(100, 100, 100, 0.15),
    0px 11px 9px rgba(100, 100, 100, 0.2),
    0px 12px 11px rgba(100, 100, 100, 0.25),
    0px 13px 15px rgba(100, 100, 100, 0.3);
  -webkit-transition: all 0.1s linear;
  transition: all 0.1s linear;
}
.box-404 p:first-child {
  text-align: center;
  /* font-family: cursive; */
  font-size: 150px;
  font-weight: bold;
  line-height: 100px;
  letter-spacing: 5px;
  color: #fff;
}
.error {
  padding-top: 20%;
}
.box-404 {
  width: 50%;
  margin: 0 auto;
}
.box-text p{
  padding-top: 10%;
  text-align: center;
  color: #666;
  font-family: cursive;
  font-size: 20px;
  text-shadow: 0 1px 0 #fff;
  letter-spacing: 1px;
  line-height: 2em;
  margin-top: -50px;
}
</style>

