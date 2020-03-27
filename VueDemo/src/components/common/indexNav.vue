<template>
  <div class="top-nav">   
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
      <el-col :span="12" :push="6" class="main-box">
        <div>
          <img class="main-logo" src="../../assets/uugai.com_1584601870397.png" alt="">
        </div>
        <div class="main-text-box">
          <span class="main-text">面向高校的智能科研服务系统所涉及的功能主要从用户的使用角度进行划分，可以分为两个大的模块：用户使用功能和后台系统管理功能。用户使用功能主要是为高校参与科研的学生提供的，后台系统管理功能是为科研组管理教师提供使用。</span>
        </div>
        <div class="main-button">
          <router-link to="/login">
            <el-button class="left-button"><i class="icon iconfont icon-icon-test1"></i><span class="main-button-text">登录</span></el-button>
          </router-link>
          <router-link to="/signUp">
            <el-button type="info"><i class="icon iconfont icon-icon-test2"></i><span class="main-button-text">注册</span></el-button>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
  .top-nav {
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
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .logo {
    height: 48px;
    vertical-align: middle;
  }  

  .main-logo {
    height: 88px;
  }
   
  .main-img{
    height: 480px;
  }

  .main-button .icon-icon-test1 {
    color: black;
  }

  .main-button-text {
    margin-left: .75rem;
    font-size: .875rem;
  }

  .main-text {
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    margin-top: 1.5rem;
    color: #f9fafc;
  }

  .main {
    height: 100%;
  }

  .main-box {
    margin-top: 120px;
  }

  .main-text-box {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .left-button {
    margin-right: .45rem;
  }
</style>