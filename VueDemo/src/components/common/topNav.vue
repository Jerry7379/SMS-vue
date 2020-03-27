<template>
  <div class="top-nav">
    <div class="box-head">
      <el-dropdown trigger="click" class="head-user">
        <span class="demonstration">
          <el-avatar
            src="http://b-ssl.duitang.com/uploads/item/201704/10/20170410095843_SEvMy.thumb.700_0.jpeg"
          ></el-avatar>
          <p>{{account}}</p>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>WELCOME!</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">????</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline">????</el-dropdown-item>
          <hr>
          <el-dropdown-item icon="el-icon-check">????</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      account: "123456789@163.com"
    };
  }
};
</script>
<style>
.top-nav .box-head {
  width: 100%;
  height: 70px;
  background-color: #2c3e50;
  border-bottom: 1px solid #fff;
}
.head-user {
  width: 180px;
  float: right;
  margin-top: 5px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-top: auto;
  margin-bottom: auto;
  /* line-height: 44px; */
  width: 100%;
}
</style>