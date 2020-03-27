<template>
  <div class="leftNav">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="icon iconfont icon-signboard-fill"></i>
          <span slot="title">信息管理&#8195;&#8195;</span>
        </template>
        <el-menu-item-group>
          <router-link to="/SMS/zongxiang"><el-menu-item index="1-1">纵向项目</el-menu-item></router-link>
          <el-menu-item index="1-2">专利</el-menu-item>
          <el-menu-item index="1-3">获奖</el-menu-item>
          <el-menu-item index="1-4">论文</el-menu-item>
          <el-menu-item index="1-5">著作</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="icon iconfont icon-account-fill"></i>
          <span slot="title">用户管理&#8195;&#8195;</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">个人信息</el-menu-item>
          <el-menu-item index="2-2">学生信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="icon iconfont icon-product"></i>
          <span slot="title">项目管理模块</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">项目信息及项目进度</el-menu-item>
          <el-menu-item index="3-2">项目状态</el-menu-item>
          <el-menu-item index="3-3">添加项目</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="icon iconfont icon-salescenter-fill"></i>
          <span slot="title">科研成果管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">评分</el-menu-item>
          <el-menu-item index="4-2">设置评分选项</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="icon iconfont icon-collection-fill"></i>
          <span slot="title">个人中心模块</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">查看所有申报项目</el-menu-item>
          <el-menu-item index="5-2">分配学科负责人</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
    .leftNav {
        position: fixed;
        top: 0;
        /* height: 100%; */
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    }
    .iconfont {
      font-size: 1.25rem;
    }
</style>