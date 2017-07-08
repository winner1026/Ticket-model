<template>
  <div>
    <pt-header title='飞机票' address='home'></pt-header>
		<pt-body title-one='单程' title-two='往返'></pt-body>
		<div class="footer">
	    <ul>
				<li>
					<span class="iconfont icon-renminbi"></span>
					<i>低价机票</i>
				</li>
				<li>
					<span class="iconfont icon-dashigankun"></span>
					<i>价格趋势</i>
				</li>
				<li>
					<span class="iconfont icon-zhenling"></span>
					<i>低价提醒</i>
				</li>
				<li>
					<span class="iconfont icon-hangban"></span>
					<i>航班动态</i>
				</li>
				<li>
					<span class="iconfont icon-wodedingdan1"></span>
					<i>我的订单</i>
				</li>
	    </ul>
    </div>
  </div>
</template>

<script>
import ptHeader from "../components/ptHeader"
import ptBody from "../components/ptBody"
export default {
  name: 'planeTicket',
	components:{
		ptHeader,
		ptBody
	}
}
</script>


<style scoped>
	 .footer{
	 	background: #DDD;
	 	padding:.1rem 0;
	 }
  .footer>ul{
 		background: #FFF;
  	display: flex;
  	padding: .2rem;
  	justify-content: space-around;
  }
   .footer>ul>li{
   	display: flex;
   	background: #FFF;
   	flex-direction: column;
   }
   .footer>ul>li>span{
   	display: block;
   	font-size: .5rem;
   	height:.6rem;
   	text-align: center;
   }
   .footer>ul>li>i{
   	font-size: .12rem;
   }
   .icon-renminbi{
   	color: #f57373;
   }
   .icon-dashigankun{
   	color: #73c1ea;
   }
   .icon-zhenling{
   	color:#ffc028;
   }
   .icon-hangban{
   	color: #6fced9;
   }
   .icon-wodedingdan1{
   	color:#c294c7
   }
</style>
