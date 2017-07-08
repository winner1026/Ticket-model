import Vue from 'vue'//var Vue=require('vue');这个必须引用因为底下要用到Vue
//jq为啥不用呢因为jq设计问题人家直接加载就好源码没有export，而vue源码有export用vue必须要拿变量接收一下
/*
对象调用两次、文件导入一次
验证方法如下：
创建默认环境：
vue init webpack testimport 
cd testimport 
npm i 
npm run build
ls -lah static/js/*.js | awk '{print $9, $5}' 
得到大小：
static/js/app.9a703202ecfda5d97127.js 12K
static/js/manifest.0d660e2ee3d5d85c597c.js 832B
static/js/vendor.83d498a14a4284cf1919.js 73K
随后加入import Vue from 'vue' 到app.vue内，再次构建并执行查询：
npm run build
ls -lah static/js/*.js | awk '{print $9, $5}' 
结果一样：
static/js/app.9a703202ecfda5d97127.js 12K
static/js/manifest.0d660e2ee3d5d85c597c.js 832B
static/js/vendor.83d498a14a4284cf1919.js 73K
参见 https://kingmario.github.io/v... 中的 webpack 部分，webpack 打包时会有缓存
*/
import Router from 'vue-router'
import home from '@/page/home'
import planeTicket from '@/page/planeTicket'
import planeCalenderOne from '@/page/planeCalenderOne'
import planeCalenderTwo from '@/page/planeCalenderTwo'
import cityList from '@/page/cityList'
import planeTicketSearch from '@/page/planeTicketSearch'
//'@': resolve('src')
Vue.use(Router)//要加载中间件vue-router里的js和jq里的js机制不同，它里面有next

export default new Router({
	mode: 'history',
	//mode设置为history表示利用了history.pushState API来完成URL跳转而无须重新加载页面。
	//I) hash模式:使用URL hash值来作为路由。支持所有浏览器。
	//II) history模式：依赖HTML5 History API和服务器配置。查看HTML5 History模式。
	//III) abstract模式:支持所有JavaScript运行环境，如Node.js服务器端。如果发现没有浏览器的API，路由会自动强制进入这个模式。
	//linkActiveClass:'active',
	//linkActiveClass 设置当前选中项的样式类名
  	routes: [
	    {
	      path: '/',
	      name: 'home',
	      component: home
	    },
			{
	      path: '/planeTicket',
	      name: 'planeTicket',
	      component:planeTicket
	   },
		{
	      path: '/planeCalenderOne',
	      name: 'planeCalenderOne',
	      component:planeCalenderOne
	   },
	   	{
	      path: '/planeCalenderTwo',
	      name: 'planeCalenderTwo',
	      component:planeCalenderTwo
	   },
	  	{
  		  path: '/cityList',
	      name: 'cityList',
	      component:cityList	  		
	  	},
  	  	{
	      path: '/planeTicketSearch',
	      name: 'planeTicketSearch',
	      component:planeTicketSearch
	   }
  	]
})

