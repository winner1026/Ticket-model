<template>
	<div>
		<h1>{{ msg }}</h1>
		<div class="ticket">
		  	<router-link to="/planeTicket">机票</router-link>
		 	<ul>
			  	<li><router-link to="/planeTicket">低价机票</router-link></li>
			  	<li><router-link to="/planeTicket">火车票</router-link></li>
			  	<li><router-link to="/planeTicket">汽车票·船票</router-link></li>
			  	<li><router-link to="/">专车·租车</router-link></li>
		  	</ul>
	  	</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '接口'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
	text-align: center;
}
.ticket{
	display: flex;
	background:deepskyblue;
	text-align: center;
	height: 1rem;
	margin-top: 30%;
}
a{
	color:#FFF;
}
.ticket>a{
	width:1rem;
	line-height: 1rem;
	border:.005rem solid #FFF;
}
.ticket ul{
	flex:1;
}
.ticket ul li{
	width:50%;
	float: left;
	line-height: .5rem;
	border:.005rem solid #FFF;
}
</style>
