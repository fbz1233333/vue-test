<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    router
    @select="handleSelect"
  >
    <el-submenu :index="item.path" v-for="(item,index1) in routers" :key="index1">
      <template  slot="title">{{item.meta.title}}</template>
      <el-menu-item :index="item2.path" 
      v-for="(item2,index2) in item.children" :key="index2"
      >{{item2.meta.title}}</el-menu-item>
    </el-submenu>
    
  </el-menu>
</template>
<script>
import {allRouters} from '@/router/index'
export default {
  mounted(){
    this.routers=allRouters
  },
  data() {
    return {
      activeIndex:'0-0',
      routers:[]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick() {
      if (this.$route.path !== "/demo/list") {
        this.$router.push({
          path: "/demo/list",
        });
      }
    },
  },
};
</script>