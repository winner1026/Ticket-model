<template>
	<div class='list'>
		<div>
			<div>
				<p>{{PlanATime}}</p>
				<i>{{item.AAirportName}}</i>
			</div>
			<span class="iconfont icon-danxiang"></span>
			<div>
				<p>{{PlanDTime}}</p>
				<i>{{item.DAirportName}}</i>
			</div>
			<div>
				<p class="price">{{price}}</p>
				<i>{{discount}}</i>
			</div>
		</div>
		<p>{{item.FlightCompany}}</p>
	</div>
</template>

<script>
	export default{
		name:'planeList',
		props:{
			item:{
				type:Object,
				required:true
			}
		},
		computed:{
			price(){
				var price=Math.round(Math.random()*1500)
				return '¥'+price
			},
			discount(){
				var discount=(Math.round(Math.random()*100)/10).toFixed(1);
				return '经济舱'+discount+'折'
			},			
			PlanATime(){
				//this.item.PlanATime='1222222222';
				//子组件竟然能能改变父组件传过来的值
				return this.item.PlanATime.slice(3,8);
			},
			PlanDTime(){
				return this.item.PlanDTime.slice(3,8);
			}
		},
		created(){
			//console.log(this.item)
			//能打印出来可见是等ajax回掉里List被赋值后render的此组件
		}
	}
</script>

<style scoped> 
	.list{
		padding:.15rem;
		border-bottom:.005rem solid #AAA;
	}
	.list>div{
		display: flex;
	}
	.list>div>div{
		width: 25%;
		display: flex;
		flex-direction: column;		
	}
	.list>div>div>p{
		font-size:.2rem;
		font-weight:bold;
	}
	.list>div>div>.price{
		color:#ff8205;
	}
	.list>div>div>i{
		font-size:.12rem;
		color: #AAA;
	}
	.list>div>span{
		flex:1;
		font-size:.15rem;
		font-weight: 100;
		color: #888;
		line-height:.6rem ;
	}
	.list>p{
		font-size:.12rem;
		color: #888;
	}
</style>