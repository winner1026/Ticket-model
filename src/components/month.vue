<template>
	<div class='month'>
		<p>{{date}}</p>
		<div>{{date}}</div>
		<ul class='day'>
			<li v-for="i in week"></li>
			<li v-for="i in day" :class='{active:disabled[i]}'>{{i}}</li>
		</ul>
  	</div>
</template>

<script>
export default {
  name: 'month',
  props:{
  	nth:{
  		type:[Number,String,Array],
  		default:0
  	}
  },
  data () {
    return {
   		date:'',
   		week:[],
   		day:[],
   		disabled:[]
    }
  },
  created(){	
  	var d=new Date();
	d.setMonth(d.getMonth()+Number(this.nth));
  	this.date=d.getFullYear()+'年'+(d.getMonth()+1)+'月';
  	var maxMonthDays=this.getDaysInMonth(d.getFullYear(),d.getMonth());
  	for(var i=1;i<=maxMonthDays;i++){
  		this.day.push(i)
  		this.disabled.push(false)
  	}
	var firstDay=this.getFirstDayInMonth(d.getFullYear(),d.getMonth())
	for(var i=0;i<firstDay;i++){
		this.week.push(i)
	}
	if(this.nth=='0'){
		var d=new Date();
		var date=d.getDate();
		this.day[date-1]='今天';
		for(var i=0;i<date;++i){
			this.disabled[i]=true
		}
	}
  },
  methods:{
  	getDaysInMonth(year,month){
	   month = parseInt(month,10)+1;
	   var temp = new Date(year,month,0);
		//0就是之前那个月最后一天
	   return temp.getDate();
	},
	getFirstDayInMonth(year,month){
	   month = parseInt(month,10);
	   var temp = new Date(year,month,1);
		//0就是之前那个月最后一天
	   return temp.getDay();
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.month{
		border: .005rem solid #DDD;
		display: flex;
		flex-direction: column;
	}
	.month>p{
		width: 100%;
		line-height: .36rem;
		font-weight:900;
		text-align: center;
		position: fixed;
		top:.6rem;
		color: #000;
		background: #FFF;
		display: none;
		/*必须要加一个背景色不然遮不住*/
	}
	.month>div{
		width: 100%;
		font-weight:900;
		line-height: .36rem;
		text-align: center;
		color: #000;
	}
	.month>ul{
		flex: 1;
		display: flex;
		flex-wrap:wrap;
		padding: 0 .05rem;
	}
	.month>ul>li{
		width:14.28%;
		text-align: center;
		padding: .2rem .08rem;
		font-weight:500;
		border-radius: 15%;
	}
	.month>ul>li:nth-of-type(7n),.month>ul>li:nth-of-type(7n+1){
		color:#ff8205;
	}
	.month>ul>li.active{
		color: #DDD;
	}
</style>
