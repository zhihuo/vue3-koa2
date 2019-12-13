<template>
    <div class="wrap">
      <div class="mainnoLayout" v-if="enShowLayout">
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
      <div class="main" v-else>
        <hearder></hearder>
        <breadcrumb></breadcrumb>
        <div class="main">
          <sidebar></sidebar>
          <div class="content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
</template>
<!--
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
-->
<script>
import Hearder from './components/header.vue'
import Sidebar from './components/sidebar.vue'
import Breadcrumb from './components/breadcrumb.vue'

export default {
  name: 'app',
  components: {
    Hearder,
    Sidebar,
    Breadcrumb
  },
  computed: {
    enShowLayout() {
      // 不显示layout，login，register页面一般不需要layout
      // 默认都显示layout
      return Boolean(this.$route.meta.enShowLayout);
    }
  }
}
</script>
<style lang="less" scoped>
html,body{
  margin: 0px;
  padding: 0px;
}
.wrap {
        height: 100%;
        overflow: hidden;
    }
    .main{
      .content{
        height: 100%;
        padding: 20px 0;
        margin: 0 30px 0 246px;
      }
      .ismain{
        margin: 0 30px 0 30px;
      }
    }
    .mainnoLayout{
      margin: 60px auto;
      .content{
        max-width: 500px;
        margin: 0 auto;
      }
    }
</style>

