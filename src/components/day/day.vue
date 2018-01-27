<template>
	<div class="day">
		<h3>{{data.title}}</h3>
		<div v-html="data.content"></div>
	</div>
</template>
<script>
	export default{
		//接收父组件传递的数据
		props:{
			data:{
				type:Object
			}
		},
		//初始化数据
		data(){
			return{
				content:false
			}
		},
		//方法
		methods:{
			clearStyle(){
				this.$nextTick(()=>{
					var imgs = this.$el.getElementsByTagName('img');
					for(let i=0;i<imgs.length;i++){
						imgs[i].removeAttribute('style');
					}
				})
			}
		},
		//创建实例后 钩子
		created(){
			this.clearStyle()
		},
		//渲染数据之后
		mounted(){
			// let day = this.$refs.day;
			// console.log(day);
			// let dayHeight = day.offsetHeight;
			// console.log(dayHeight)
		}
	}
</script>
<style>
	.day{width:100%; height:auto; position: absolute;}
	.day img{width:100%;}
	.day li{margin:10px 0;padding:10px; width:100%; text-align:left; border:1px solid #ddd; border-radius: 5px; box-sizing: border-box;}
	.day h3{margin:5px 0; text-align: left;}
	.day a{margin-bottom:5px; color:#333;}
</style>