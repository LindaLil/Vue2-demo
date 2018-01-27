<template>
	<div class="menu" :class="{'show':show}">
		<div class="userinfro">
			<div class="imgbox"><img src="../../assets/images/user.jpg" height="300" width="300"></div>
			<h4>用户昵称昵称</h4>
		</div>
		<ul class="menulist">
			<li v-for="menu in menus" @click="updateHeader(MENU_LIST[menu],menu)">
				<router-link :to="'/'+ menu" >
					<span :class="'iconfont icon-'+ menu"></span>
					<p>{{MENU_LIST[menu]}}</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
// import {mapState} from 'vuex'
const MENU_LIST = {'welfare':'福利','android':'Android', 'ios':'IOS', 'web':'前端','recommend':'瞎推荐'};
export default{
	props: {
	        show: {
	          type: Boolean
	        }
 	},
	data(){
		return{
			MENU_LIST:MENU_LIST
		}
	},
	computed:{
		menus(){
			return this.$store.state.title.menus
		}
	},
	methods:{
		updateHeader(title,menu){
			this.$store.commit('UPDATE_TITLE',title);
			this.$store.commit('UPDATE_MENUSHOW');
		}
	}
}	
</script>
<style scoped>
	@import url("../../assets/css/iconfont.css");
	.menu{
		position:fixed;
		top:0;
		bottom:0;
		left:-250px;
		z-index:99;
		width:250px;
		height:100%;
		padding:20px 10px;
		background:yellowgreen;
		color:#fff;
		/*position:absolute;
		left:0;
		top:0;*/
		/*transform: translateX(-250px);*/
		/**/
		transition: all .5s ease;
		box-sizing: border-box;
	}
	.show{transform: translateX(250px); transition: all .5s ease;}
	.userinfro{
		width:100%;
		margin-bottom: 20px;
		display: flex;
		justify-content: center;
		align-content: center;
		flex-wrap: wrap;
		/*overflow: hidden;*/
	}
	.imgbox{
		width:40%; 
		height: 40%;
		margin-bottom: 20px;
		border-radius:100%;
		/*border:1px solid #fff;*/
		overflow: hidden;
	}
	.imgbox img{
		width:100%;
		height: 100%;
	}
	.userinfro h4{
		width:100%;
	}
	.menulist{
		width:100%;
		overflow: hidden;
	}
	li{
		width:100%;
		padding:10px;
		text-align: left;
		border-bottom:1px solid #f3f3f3;
		box-sizing: border-box;
		font-size: 18px;
	}
	li a{
		display: block;
		color:#fff;
	}
	li span{
		display: inline-block;font-size: 20px!important;
	}
	p{display: inline-block;}
</style>