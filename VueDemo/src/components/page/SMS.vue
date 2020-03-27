<template>
  <div id="sms">
      <leftNav></leftNav>
      <topNav></topNav>
      <!-- <zongxiang></zongxiang> -->
      <router-view />
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
import topNav from '@/components/common/topNav'
// import zongxiang from '@/components/page/xinxiguanli/zongxiang'
export default {
  name:'sms',
  components:{
    leftNav,
    topNav
    // zongxiang
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
