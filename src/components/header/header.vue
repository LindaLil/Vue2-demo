<template>
	<div class="headers">
		<div class="layer" v-show="menuShow" @click="isShow"></div>
		<header @click="isShow" :class="{'show':menuShow}">
			<div class="header-left">
				<span class="iconfont icon-caidan" ></span>
			</div>
			<h3 class="header-title">{{ headerTitle }}</h3>
			<div class="header-right"><span class="iconfont icon-sousuo"></span></div>
		</header>
		<v-menu :show="menuShow"></v-menu>
	</div>
	
</template>
<script>
	// import {mapState} from 'vuex'  ?怎样在组件里mapsate引用模块的state
	import vMenu from '../menu/menu'
	export default{
		data(){
			return {
				show:false
			}
		},
		components:{
			vMenu
		},
		computed:{
			headerTitle(){
				return this.$store.state.title.headerTitle
			},
			menuShow(){
				return this.$store.state.title.menuShow
			}
		},
		methods:{
			isShow(){
				this.$store.commit('UPDATE_MENUSHOW')
			}
		}
	}
</script>
<style scoped>
	@import url(../../assets/css/iconfont.css);
	.layer{
		position:absolute;
		top:0;
		right:0;
		bottom:0;
		left:0;
		z-index: 2;
		width:100%;
		height:100%;
		background:#000;
		opacity: 0.5;
	}
	header{
		position:fixed;
		top:0;
		left:0;
		z-index:1;
		width:100%;
		height:44px;
		line-height: 44px;
		text-align: center;
		display: flex;
		justify-content:space-between;
		background:#5fbf05;
		color:#fff;
		transition: all .5s ease;
		overflow: hidden;
	}
	header.show{transform: translateX(250px); transition: all 0.5s ease;}
	header a{
		color:#fff;
	}
	.header-left,.header-right{
		width: 10%;
	}
	.header-right .icon-sousuo{
		font-size:28px;
	}
</style>