<template>
	<div class='planeCalenderOne'>
		<pt-header title='往返日历' address='planeTicket'></pt-header>
		<week></week>
		<div id='calender' @scroll='isTitleShow' @click='chooseDay'>
			<month v-for="nth in arr" :nth='nth' :key="nth"></month>
		</div>
  </div>
</template>

<script>
import ptHeader from "../components/ptHeader"
import week from "../components/week"
import month from "../components/month"
export default {
  name: 'planeCalenderOne',
	components:{
		ptHeader,
		week,
		month
	},
	data(){
		return {
			arr:[],
			goBackDate:[]
		}
	},
	created(){
		for(var i=0;i<12;++i){
			this.arr.push(i)
		}
	},
	mounted(){
		var title=document.querySelector("div[class='month']>p");
		title.style.display='block';
	},
	methods:{
		isTitleShow(){
			 this.$nextTick(() => {
				var cH= document.querySelector("div[id='calender']").scrollTop;
				switch(true){
					case cH<=this.scrollHeight(0):this.showOrHide(0);break; 
					case this.scrollHeight(0)<cH&&cH<=this.scrollHeight(1):this.showOrHide(1);break; 
					case this.scrollHeight(1)<cH&&cH<=this.scrollHeight(2):this.showOrHide(2);break; 
					case this.scrollHeight(2)<cH&&cH<=this.scrollHeight(3):this.showOrHide(3);break; 
					case this.scrollHeight(3)<cH&&cH<=this.scrollHeight(4):this.showOrHide(4);break; 
					case this.scrollHeight(4)<cH&&cH<=this.scrollHeight(5):this.showOrHide(5);break; 
					case this.scrollHeight(5)<cH&&cH<=this.scrollHeight(6):this.showOrHide(6);break; 
					case this.scrollHeight(6)<cH&&cH<=this.scrollHeight(7):this.showOrHide(7);break; 
					case this.scrollHeight(7)<cH&&cH<=this.scrollHeight(8):this.showOrHide(8);break; 
					case this.scrollHeight(8)<cH&&cH<=this.scrollHeight(9):this.showOrHide(9);break; 
					case this.scrollHeight(9)<cH&&cH<=this.scrollHeight(10):this.showOrHide(10);break; 
					case this.scrollHeight(10)<cH&&cH<=this.scrollHeight(11):this.showOrHide(11);break; 
					//this.scrollHeight(11)<cH<=this.scrollHeight(12)这样写是数学写法
					default:break;
				}
			})
		},
		scrollHeight(n){
		 	var months=document.querySelectorAll("div[class='month']");
		 	var height=0;
		 	for(var i=0;i<=n;++i){
		 		height+=months[i].offsetHeight;
		 	}
		 	return height
		},
		showOrHide(n){
			var titles=document.querySelectorAll("div[class='month']>p");
			var len=titles.length;
			for(var i=0;i<len;++i){
				titles[i].style.display='none';
			}
			titles[n].style.display='block';			
		},
		chooseDay(e){
			var e= e || window.event;
			var target = e.target || e.srcElement;
			if(target.nodeName.toLowerCase()=='li'&&target.className!='active'){
				target.style.cssText = "color:#FFF; background:#1ba9ba;";
				var str=target.parentNode.previousSibling.previousSibling.innerText;
				if(target.innerText=='今天'){
					str+=(new Date()).getDate();
				}
				else{
					str+=target.innerText;
				}
				setTimeout(()=>{
					this.goBackDate.push(this.changeDate(str))
					if(this.checkDate()){
						localStorage.setItem('goDate',this.goBackDate[0]);
						localStorage.setItem('backDate',this.goBackDate[1]);
						this.$router.push({
		                    name: 'planeTicket',
		                    params: {
		                      two:true
		                    }
		                    //需要注意的是，实用params去传值的时候，在页面刷新时，参数会消失，用query则不会有这个问题。
		                })
					}
				},500)
			}
		},
		changeDate(str){
			var index=str.indexOf('月');
			var year=Number(str.slice(0,4));
			var month=Number(str.slice(5,index))-1;
			var day=Number(str.slice(index+1));
			var d=new Date(year,month,day);
			return d.getTime()
		},
		checkDate(){
			if(this.goBackDate.length<=1){
				return false
			}
			else{
				if(this.goBackDate[0]<=this.goBackDate[1]){
					return true	
				}
				else{
					var lists=document.querySelectorAll("li");
					var len=lists.length;
					for(var i=0;i<len;++i){
						lists[i].removeAttribute('style');
					}
					this.goBackDate=[];
					alert('返程时间不能早于启程时间')
					return false
				}
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.planeCalenderOne{
		display: flex;
		flex-direction: column;
		height: 100%;
		/*必须要加上height:100%不然就会撑起来超过屏幕高度*/
	}
	#calender{
		flex:1;
		overflow: auto;
		/*overflow: auto;也必须给不然会撑起来*/
	}
</style>
