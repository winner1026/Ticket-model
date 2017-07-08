<template>
    <div class='header'>
    	<a @click='jump'>
    		<i class="iconfont icon-iconfonti2-copy-copy-copy-copy"></i>
    	</a>
    	<p>{{title}}</p>
    	<span>{{order}}</span>
    </div>
</template>

<script>
export default {
  name: 'tpHeader',
  props:['title','order','address'],
  methods:{
  	jump(){
		this.$router.push({name:this.address})
  	}
  }
}
</script>

<style scoped>
.header{
	background:#1ba9ba;
	display:flex;
	height:.44rem;
	line-height: .44rem;
	text-align: center;
	color:#FFF
}
.header>a,.header>span{
	width:.6rem;
}
.header>a>i{
	font-size: .2rem;
	font-weight:bolder;
	color: #7ff;
}
.header p{
	flex:1;
}
.header>span{
	font-size: .12rem;
	text-align: center;
}
</style>
