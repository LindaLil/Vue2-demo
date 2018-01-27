<template>
	<li class="list">
		<router-link to="/detail">
			<div class="imgbox">
				<img v-lazy="imgUrl" lazy="loading" class="bg-img">
			</div>
			<p>{{publishtime | formate }}</p>
		</router-link>
	</li>
</template>
<script>
	import {formateDate} from '../../assets/js/date'
	export default{
		props:['img','publishtime'],
		computed:{
			imgUrl(){
				return `${this.img}?imageView2/0/w/200`
			}
		},
		filters:{
			formate(publishtime){
				let date = new Date(publishtime);
				return date.Format('yyyy/MM/dd'); //日期格式化
			}
		}
	}
</script>
<style scoped>
	.list{
		/*width:49%;*/
		width:100%;
		padding:5px;
		margin-bottom:10px;
		box-sizing: border-box;
		border:1px solid #ddd;
		break-inside: avoid; /*判断对象何时断行*/
	}
	.list a{
		display: block;
		color:#333;
	}
	.list:hover{
		border-color:#5fbf05;
	}
	.list a:hover{
		color:#5fbf05;
	}
	.imgbox{
		width:100%;
	}
	@keyframes fade{
		0%{
			opacity:0;
		}
		100%{
			opacity:1;
		}
	}
	img[lazy=loading]{
		margin:auto;
	}
	img[lazy=error]{

	}
	img[lazy=loaded]{
		animation:fade .5s;
	}
	.bg-img{
		background-size:cover;
		padding-bottom: 50%;
	}
	.bg-img[lazy=loading]{
		background-size: 8%;
		background-position: 50%;
		background-repeat: no-repeat;
	}
	.bg-img[lazy=loaded]{
		background-size:cover;
		animation:all .5s;
		padding-bottom: 0;
	}
	.imgbox img{
		width:100%;
		transition:all .5s;
	}
	.list p{
		width:100%; 
		height: 28px;
		line-height: 28px;
		text-align: right;
		background: #fff;
	}
</style>