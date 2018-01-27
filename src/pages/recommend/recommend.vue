<template>
	<div class="wrapper">
		<headers></headers>
		<div class="content">
			<ul class="tab-title">
				<li v-for="(title,index) in tab_title" :class="{ active:index==nowIndex }" @click="tabClick(index)">{{title}}</li>
			</ul>
			<div class="swiper" ref="swiper">
				<transition-group name="slide-fade" tag="div">
					<day  v-for="(slide,index) in sliders" ref="day" :key="index" :data="slide" v-show="nowIndex===index"></day>
				</transition-group>
			</div>
		</div>
	</div>
</template>
<script>
	import Headers from '../../components/header/header'
	import Day from '../../components/day/day'
	export default{
		data(){
			return{
				nowIndex:0,//默认显示第一个为活动状态
				sliders:[],
				tab_title:['今天','昨天','前天','前三天','前四天'],
			}
		},
		components:{
			Headers,
			Day
		},
		methods:{
			// getHei(){
			// 	let day = this.$refs.day;
			// 	console.log(day);
			// 	let dayHei = day[0].$el.offsetHeight;//获取子组件的高度
			// 	let swiper = this.$refs.swiper;
			// 	swiper.style.height = dayHei + 'px';
			// 	console.log(swiper.style.height)
			// },		
			tabClick(index){
				this.nowIndex = index;
				console.log(this.nowIndex);
				// return this.nowIndex;
				 //在下次dom更新循环结束之后执行延迟回调，在修改数据之后立即使用这个函数，获取更新后的dom
				this.$nextTick(()=>{
					let day = this.$refs.day;
					console.log(day);
					let dayHei = day[this.nowIndex].$el.offsetHeight;
					console.log(dayHei);
					let swiper = this.$refs.swiper;
					swiper.style.height = dayHei + 'px';
					console.log(swiper.style.height)
				})
			}
				
		},
		created(){
			
		},
		mounted(){
			this.axios.get("http://gank.io/api/history/content/5/1").then((response)=>{
				this.sliders = response.data.results;
				console.log(this.sliders);
			});

		}
	}
</script>
<style>
	.tab-title{
		margin-bottom: 10px;
		width:100%;
		background:#ccc;
		display: flex;
		justify-content: space-around;
		align-content: center;
		box-sizing: border-box;
	}
	.tab-title li{
		padding:15px 5px;
		border-bottom:1px solid #ccc;
	}
	.tab-title li.active{
		border-bottom: 1px solid #5fbf05;
		color:#5fbf05;
	}
	.swiper{
		position: relative;
		width: 100%;
		height:1500px;
	}
	.slide-fade-enter-active,.slide-fade-leave-active{
		transition: all 1s;
	}
	.slide-fade-enter{
		opacity: 0;
		transform: translateX(100%);
	}
	.slide-fade-leave-active{
		opacity:0;
		transform: translateX(-100%);
	}
</style>