<template>
  <div class="login">
    <el-row :gutter="20" class="header">
      <el-col :span="9">
        <router-link to="/">
          <div class="grid-content nav-logo"><img class="logo" src="../../assets/uugai.com_1584601870397.png" alt=""></div>
        </router-link>
      </el-col>
      <el-col :span="5">
        <router-link to="/login">
          <div class="grid-content"><i class="icon iconfont icon-icon-test1"></i><span class="nav-link-text">登录</span></div>
        </router-link>  
      </el-col>
      <el-col :span="5">
        <router-link to="/signUp">
          <div class="grid-content"><i class="icon iconfont icon-icon-test2"></i><span class="nav-link-text">注册</span></div>
        </router-link>  
      </el-col>
      <el-col :span="5">
        <router-link to="/reset">
          <div class="grid-content"><i class="icon iconfont icon-31mima"></i><span class="nav-link-text">重置密码</span></div>
        </router-link>  
      </el-col>
    </el-row>
    <el-row :gutter="20" class="main">
      <el-col :span="10" :push="7" class="main-box">
        <div class="login-box">
          <div class="login-box-title">
            <div class="text-center">
              <span class="title-text">Sign in with</span>
            </div>
          </div>  
          <div class="login-box-body">
            <div class="body-input">
              <el-input
                placeholder="账号"
                v-model="inform.account"
                clearable
                class="input">
                <template slot="prepend"><i class="icon iconfont icon-account"></i></template>
              </el-input>
              <el-input 
                placeholder="密码" 
                v-model="inform.key"
                clearable
                class="input">
                <template slot="prepend"><i class="icon iconfont icon-31mima"></i></template>
              </el-input>
              <div class="switch-box">
                <span class="switch-text">
                  Remember me
                </span>
                <el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#2c3e50"
                  class="switch-box-switch">
                </el-switch>
              </div>
              <router-link to="/SMS">
                <el-button type="primary" class="button">登录</el-button>
              </router-link>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
      return {
        inform: {
          account: '',
          key: ''
        },
        value: false
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    max-width: 1040px;
    margin-left: auto;
    margin-right: auto;
    background-color: #525f7f;
    box-shadow: 7px 7px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    height: 900px;
  }

  .iconfont{
    font-family: open sans,sans-serif;
    font-size: .9rem;
    color: #f9fafc;
  }

  .nav-link-text {
    font-size: .9rem;
    margin-left: .25rem; 
    color: #f9fafc;
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 80px;
    line-height: 80px;
  }

  .logo {
    height: 48px;
    vertical-align: middle;
  }  

  .main {
    height: 450px;
  }

  .main-box {
    background-color: #525f7f;
    padding-top: 96px;
  }

  .login-box {
    width: 100%;
    height: 335px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }

  .login-box-title {
    height: 65px;
    width: 100%;
    justify-content: center; /*子元素水平居中*/
    align-items: center; /*子元素垂直居中*/
    display: -webkit-flex;
  }

  .text-center{
    height: 22px;
    width: 80%;
  }

  .text-center .title-text {
    color: #8898aa!important;
    font-size: .9rem; 
  }

  .login-box-body {
    width: 100%;
    /* border-top: 1px solid #000; */
    height: 100%;
    background-color: #ebecef;
    border-radius: 0 0 8px 8px;
  }

  .login-box-body .body-input{
    width: 80%;
    margin: 0 auto;
    padding-top: 58px;
  }

  .body-input .input {
    margin-bottom: 12px;
  }
  
  .body-input .button {
    margin-top: 20px;
  }

  .body-input .iconfont {
    color: #8898aa;
    font-size: 1.2rem;
  }

  .switch-box {
    margin-top: 20px;
  }

  .switch-text {
    color: #8898aa!important;
    font-size: 12px;
  }

  .switch-box .switch-box-switch {
    margin-left: 2px;
  }
</style>
