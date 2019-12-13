<template>
      <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(item)  in levelList" :key="item.path" v-if="item.meta.title">
            <router-link :to="item.redirect||item.path">{{item.meta.title}}</router-link>
          </el-breadcrumb-item>
      </el-breadcrumb>
</template>
<style lang="less" scoped>
  .app-breadcrumb{
    height: 30px;
    line-height: 30px;
    padding: 10px 25px;
    margin-left: 220px;
  }
</style>
<script>
export default {
  data() {
      return {
          levelList: null
      }
  },
  methods: {
          /**
           * 生成面包屑的方法
           */
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.meta.title)
      const first = matched[0]
      if (first && first.meta.title !== '首页') {
        matched = [{path: '/index', meta: { title: '首页' }}].concat(matched)
      }
      this.levelList = matched;
    }
  },
  mounted() {
    this.getBreadcrumb();
  },
  watch: {
    $route(to, from) {
      this.getBreadcrumb();
    }
  }
}
</script>