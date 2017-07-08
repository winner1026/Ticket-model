<template>
    <div class='body'>
		<div class='title'>
			<h2 :class='{active:selected.one}' @click="choose(1)">{{titleOne}}</h2>
			<h2 :class='{active:selected.two}' @click="choose(2)">{{titleTwo}}</h2>
		</div>	
		<div class='content' @click="goWhere">
			<p class='startingPoint'>{{startingPoint}}</p>
			<span class="iconfont icon-bilateral"  @click="exchange"></span>
			<p class='endPoint'>{{endPoint}}</p>
		</div>
		<div class='date' @click="goCalender">
			<div>
				<span>出发日期</span>
				<p>{{dateOne}}</p>
			</div>
			<i v-show="isShow">{{day}}天</i>
			<!--<router-link :to="{name:'planeCalenderTwo'}" v-show="isShow">绑定跳转路由名字</router-link>-->
			<div v-show="isShow">
				<span>返回日期</span>
				<p>{{dateTwo}}</p>
			</div>	
		</div>
		<a @click="check">搜索</a>
    </div>
</template>

<script>

export default {
  	name: 'ptBody',
  	props:['titleOne','titleTwo'],
	data(){
		return {
			active:'active',
			selected:{
				one:true,
				two:false
			},
			isShow:false,
			startingPoint:'北京',
			endPoint:'上海',
			dateOne:'',
			dateTwo:'',
			day:''			
		}
	},
	created(){
		if(this.$route.params.two){
			this.choose(2)
		}
		if(!localStorage.getItem('goDate')){
			var dN=new Date();
			this.threeDays(dN);
		}
		else if(localStorage.getItem('goDate')&&!localStorage.getItem('backDate')){
			var cN=new Date(Number(localStorage.getItem('goDate')))
			this.threeDays(cN);
		}
		else if(localStorage.getItem('goDate')&&localStorage.getItem('backDate')){
			var o=Number(localStorage.getItem('goDate'));
			var w=Number(localStorage.getItem('backDate'));
			this.getDate(o,w);
		}
		if(localStorage.getItem('startingPoint')){
			this.startingPoint=localStorage.getItem('startingPoint');
		}
		if(localStorage.getItem('endPoint')){
			this.endPoint=localStorage.getItem('endPoint');
		}		
	},
	methods:{
		exchange(){
			var temp=this.startingPoint;
			this.startingPoint=this.endPoint;
			this.endPoint=temp
		},
		check(){
			if(this.startingPoint==this.endPoint){
				alert('起点和目的地相同，请重新选择')
			}	
			else{				
				this.$router.push({
					name:"planeTicketSearch",
					params:{
						goToBack:{
							from:this.startingPoint,
							to:this.endPoint
						},
						date:localStorage.getItem('goDate')||(new Date()).getTime()
					}
				})
				//定义时这里的this指向该组件
				//点击时this还是指向该组件否则this.$parent.$data就废了
			}
		},
		choose(index){
			if(index=='1'){
				this.selected.one=true;
				this.selected.two=false
				this.isShow=false;
			}
			else if(index=='2'){
				this.selected.two=true;
				this.selected.one=false;
				this.isShow=true;
			}
		},
		threeDays(d){
			var m=d.getMonth()+1>9?d.getMonth()+1:'0'+(d.getMonth()+1);
			this.dateOne=m+'月'+d.getDate()+'日';
			var dW=new Date(d.getTime()+1000*60*60*24*3);
			//d.setDate(d.getDate()+3)这样设置dN时间会改变并不会返回一个新的时间对象
			var mW=dW.getMonth()+1>9?dW.getMonth()+1:'0'+(dW.getMonth()+1);
			this.dateTwo=mW+'月'+dW.getDate()+'日';
			this.day=3;			
		},
		getDate(o,w){
			var dO=new Date(o);
			var mO=dO.getMonth()+1>9?dO.getMonth()+1:'0'+(dO.getMonth()+1);
			this.dateOne=mO+'月'+dO.getDate()+'日';
			var dW=new Date(w);
			var mW=dW.getMonth()+1>9?dW.getMonth()+1:'0'+(dW.getMonth()+1);
			this.dateTwo=mW+'月'+dW.getDate()+'日';
			var time=(w-o)/(1000*60*60*24);
			this.day=Math.ceil(time)
		},
		goCalender(){
			if(!this.isShow){
				this.$router.push({name:'planeCalenderOne'})
			}
			else{
				this.$router.push({name:'planeCalenderTwo'})
			}
		},
		goWhere(e){
			var e= e || window.event;
			var target = e.target || e.srcElement;
			if(target.nodeName.toLowerCase()=='p'){
				if(target.className=='startingPoint'){
					this.$router.push({
						name:'cityList',
						query:{
							chooseStartingPoint:'choosed'//写true路由传到那边也成了字符串
						}
					})
				}
				else if(target.className=='endPoint'){
					this.$router.push({name:'cityList'})
				}
			}
		}
	}
}
</script>

<style scoped>
	.title{
		height:.4rem;
		line-height:.4rem;
		display: flex;
		text-align: center;
	}
	.title h2{
		flex:1;
		font-size:.14rem ;
		color: #666;
		border-bottom: .005rem solid #AAA;
	}
	.title h2.active{
		color: #1ba9ba;
		border-bottom: .02rem solid #1ba9ba;
	}
	.content{
		display: flex;
		height:.6rem;
		line-height:.6rem;
	}
	.content>p:nth-of-type(1){
		flex: 1;
		text-align: left;
		padding-left:.2rem;
		font-size:.18rem;
		border-bottom: .005rem solid #AAA;
	}
	.content>p:nth-of-type(2){
		flex: 1;
		text-align: right;
		padding-right:.2rem;
		font-size:.18rem;
		border-bottom: .005rem solid #AAA;
	}
	.content>span{
		width: .4rem;
		height: .4rem;
		font-size:.2rem;
		margin-top:.12rem;
		text-align: center;
		color: #AAA;
		border: .01rem solid #AAA;
		border-radius: 50%;
	}
	.date{
		display: flex;
		padding:.1rem .2rem;
		border-bottom: .005rem solid #AAA;
		height:.6rem
	}
	.date>i{
		width:.6rem;
		font-size:.12rem;
		line-height:.6rem;
		text-align: center;
	}
	.date>div{
		color:#000
	}
	.date>div:nth-of-type(1){
		flex: 1;
		text-align: left;	
	}	
	.date>div:nth-of-type(2){
		flex: 1;
		text-align: right;		
	}
	.date>div>span{
		font-size:.14rem;
		color: #999;
	}
	.body>a{
		display: block;
		margin:.2rem;
		text-align: center;
		background: #f90;
		height: .4rem;
		line-height: .4rem;
		color: #FFF;
		border-radius: .02rem;
	}
</style>
