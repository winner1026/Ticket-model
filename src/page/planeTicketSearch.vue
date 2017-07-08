<template>
	<div>
		<pt-header :title='goToBack' address='planeTicket' :order='date'></pt-header>
		<loading v-if='showLoading'></loading>
		<div v-if='find'>
			<plane-list v-for='(item,key,index) in List' :item='item' :key="index"></plane-list>
			<!--v-for里的key是键名-->
		</div>
		<div class='noFind' v-if='!find'>
			<img src='../assets/load_fail.png'/>
			<p>没有符合条件的航班，请更改条件重新搜索</p>
		</div>
	</div>
</template>

<script>
import ptHeader from "../components/ptHeader" 
import planeList from "../components/planeList"
import loading from "../components/loading"
export default {
	name: 'planeTicketSearch',
	data(){
		return {
			find:true,
			List:[],
			showLoading:true
		}
	},
	computed:{
		goToBack(){
			return this.$route.params.goToBack.from+'——>'+this.$route.params.goToBack.to
		},
		date(){
			var d=new Date(Number(this.$route.params.date));
			var month=d.getMonth()+1;
			var day=d.getDate();
			return month+'月'+day+'日'
		}
	},
	components:{
		ptHeader,
		planeList,
		loading
	},
	created(){
		$.ajax({
	        type:"get",
	        url:"http://route.showapi.com/1141-1",
	        async:true,
	        data:{
	            showapi_appid:'40052',
	            showapi_sign:'568097855479444b98f3bd4e83f4bb7b',
	           	from:this.$route.params.goToBack.from,
	           	to:this.$route.params.goToBack.to,
	           	date:this.getDate(this.getDate(this.$route.params.date))
	        },
	        success:(data)=>{
	        	this.showLoading=false;
	        	if(data.showapi_res_body.error_description=='接口正常'){
	        		this.find=true;
	        		this.List=data.showapi_res_body.List;
	        	}
	        	else{
	        		this.find=false;
	        	}				
			}
    	})
		/*	
	 	//Json数据模拟
		$.ajax({
	        type:"get",
	        url:"./static/testSuccess.json",
	        dataType:"json", 
	        async:true,
	        success:(data)=>{
	        	if(data.showapi_res_body.error_description=='接口正常'){
	        		this.find=true;
	        		this.List=data.showapi_res_body.List;
	        	}
	        	else{
	        		this.find=false;
	        	}
			}
			//不绑定this指向window毁掉函数作为参数一般都指向window箭头函数除外，他继承父级作用域this
			//created钩子函数变为箭头函数success也为箭头函数那么this还是指向window因为success继承created的this，如果箭头函数最外层是window那么this指向window
    	})
    	*/
	},
	methods:{
		getDate(d){
			var d=new Date(Number(d));//先计算表达式左边然后赋值给右边
			var year=d.getFullYear();
			var month=d.getMonth()+1;
			var day=d.getDate();
			return year+''+month+''+day
		}
	}
}
</script>

<style scoped>
	.noFind{
		padding: .8rem .3rem;
		
	}
	.noFind>img{
		width: 50%;
		display: block;
		margin: 0 auto;
	}
	.noFind>p{
		margin-top:.2rem;
		text-align: center;
		font-size:.12rem
	}
</style>

<!--
	第二个的参数为键名：

<div v-for="(value, key) in object">

  {{ key }} : {{ value }}

</div>

　　第三个参数为索引：

<div v-for="(value, key, index) in object">

  {{ index }}. {{ key }} : {{ value }}

</div>

-->