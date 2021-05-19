<template>
  <div>
    
    <Tabbar>
      <Tabbaritem path="/sy">
        <img src="@/assets/img/首页.png" slot="tupian" />
        <img src="@/assets/img/首页(1).png" slot="tupian1" />
        <div slot="wenzi">首页</div>
      </Tabbaritem>
      <Tabbaritem path="/fl">
        <img src="@/assets/img/分类.png" slot="tupian" />
        <img src="@/assets/img/分类(1).png" slot="tupian1" />
        <div slot="wenzi">分类</div>
      </Tabbaritem>
      <Tabbaritem path="/gwc">
        <img src="@/assets/img/购物车.png" slot="tupian" />
        <img src="@/assets/img/购物车(1).png" slot="tupian1" />
        <div slot="wenzi">购物车</div>
      </Tabbaritem>
      <Tabbaritem path="/wd">
        <img src="@/assets/img/我的.png" slot="tupian" />
        <img src="@/assets/img/我的(1).png" slot="tupian1" />
        <div slot="wenzi">我的</div>
      </Tabbaritem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from "../common/Tabbar";
import Tabbaritem from "../common/Tabbaritem";
export default {
  components: {
    Tabbar,
    Tabbaritem,
  },
};
</script>

<style>
</style>