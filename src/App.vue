<template>
	 <transition :name="transitionName"> 
    	<router-view class='child-view'></router-view>
	 </transition>
</template>

<script>

export default {
  name: 'app',
  data(){
  	return {
  		transitionName:'slideLeft'
  	}
  },
  watch:{
  	'$route'(to,from){
	  if(to.path == '/'){  
    	this.transitionName = 'slide-right';  
	  }else{  
	    this.transitionName = 'slide-left';  
	  }  	 		
  	}
  	//上述写法是'$route':function(){}的简化版本
  }
}
</script>

<style scoped>
.child-view {  
  position: absolute;  
  left: 0;  
  top: 0;  
  width: 100%;  
  height: 100%;  
  transition: transform .5s ease;
  	/*其实是这个 transition带动的*/  
}  
.slide-left-enter, .slide-right-leave-active {   
  transform: translateX(200%);  
}  
.slide-left-leave-active, .slide-right-enter {  
  transform: translateX(-100%); 
} 
/*
  路由进入的组件
-enter 刚进入时的状态
-enter-active 进入过程 
-enter-to 进入后的状态(2.18新增的以前没有)
路由离开的组件
-leave 刚进入时的状态
-leave-active 进入过程 
-leave-to 进入后的状态(2.18新增的以前没有)
如果给组件本身加transition标签enter就是该组件出现时的动画leave就是该组件消失时的动画
*/
</style>

