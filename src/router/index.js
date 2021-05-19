import Vue from 'vue'
import Router from 'vue-router'

const Shouye = () => import("../views/shouye/Shouye")
const Fenlei = () => import("../views/fenlei/Fenlei")
const Gouwuche = () => import("../views/gouwuche/Gouwuche")
const Wode = () => import("../views/wode/Wode")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: "/sy"
    },
    {
      path: "/sy",
      component: Shouye
    },
    {
      path: "/fl",
      component: Fenlei
    },
    {
      path: "/gwc",
      component: Gouwuche
    },
    {
      path: "/wd",
      component: Wode
    }
  ],
  mode: "history"
})
