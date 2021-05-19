<template>
  <div class="item" @click="dianji">
      <div v-show="!flag"><slot name="tupian"></slot></div>
      <div v-show="flag"><slot name="tupian1"></slot></div>
      <div :class="{wenzi: flag}"><slot name="wenzi"></slot></div>
  </div>
</template>

<script>
export default {
    props: {
        path: String
    },
    methods: {
        dianji(){
            this.$router.push(this.path)       //添加路由
        } 
    },
    computed: {
        flag(){
            return this.path == this.$route.path
        }
    }
}
</script>

<style>
 .item{
  flex: 1;
  text-align: center;
  height: 49px;
  margin-top: 4px;

  font-size: 12px;
}
.wenzi {
  
  color: #d81e06;
}

</style>