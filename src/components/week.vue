<template>
	<ul class="week">
		<li>日</li>
		<li>一</li>
		<li>二</li>
		<li>三</li>
		<li>四</li>
		<li>五</li>
		<li>六</li>
	</ul>
</template>

<script>
export default {
  name: 'month'
}
</script>

<style>
	.week{
		display: flex;
		height: .2rem;
		line-height: .2rem;	
		text-align: center;	
	}
	.week>li{
		flex:1;
		font-size: .1rem;
	}
	.week>li:nth-of-type(1),.week>li:nth-of-type(7){
		color:#ff8205
	}
</style>