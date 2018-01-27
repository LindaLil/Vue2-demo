<template>
	<li class="card">
		<router-link to="/detail">
			<div class="imgbox"><img :src="img?img:imgUrl" ></div>
			<div class="infro">
				<h5>{{desc}}</h5>
				<p><span>{{author?author:who}}</span><span>{{time | formate}}</span></p>
			</div>
		</router-link>
	</li>
</template>
<script>
//import {imgs} from '../../assets/images/404.png'
import {formateDate} from '../../assets/js/date.js'
	export default{
		props:['img','desc','author','time'],
		data(){
			return{
				imgUrl : require('../../assets/images/404.png'),  //加载本地图片
				who : '未知作者'
			};
		},
		filters:{
			formate(time){
				let date = new Date(time);
				return date.Format('yyyy-MM-dd'); //日期格式化
			}
		}
	}
</script>
<style scoped>
	.card{
		margin-bottom: 10px;
		padding:10px;
		width:100%;
		border-radius:3px;
		border:1px solid #ddd;
		box-sizing: border-box; 
	}
	.card a{
		display: block;
	}
	.imgbox{
		width:100%;
		height:200px;
		overflow: hidden;
	}
	.imgbox img{
		width:100%;
	}
	.infro{
		width:100%;
		padding:5px;
		color:#fff;
		background:#6e6b6b;
		box-sizing: border-box;
	}
	.infro h5{
		width:100%;
		text-align: left;
		font-weight: normal;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.infro p{
		padding:10px 0 0;
		display: flex;
		justify-content: space-between;
	}
</style>