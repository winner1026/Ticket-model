// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'jquery'//这个不用加载直接引用就行
import App from './App'
//等于./App.js
import router from './router'
import "../css/layout.css"
import "../font/iconfont.css"

//其实这等于./router/index.js因为一个文件夹下如不说明默认打开的是index

Vue.config.productionTip = false


/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router, 
  /*
  template: '<App/>',
  components: { App }
  */
 	render: (h)=> {
    return h(App);
    //(createElement)可以写成(h)或h写成a也可以简写而已
	}
})
