<template>
	<div class="wrapper">
		<headers></headers>
		<div class="content">
			<ul class="cardlists" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
				<card v-for="card in cardlists" :key="card.id" :img='card.images' :desc="card.desc" :author="card.who" :time="card.publishedAt"></card>
			</ul>
		</div>
	</div>
</template>
<script>
	import Headers from '../../components/header/header'
	import Card from '../../components/list/card-list'
	export default{
		data(){
			return{
				cardlists:[],
				busy:false,
				page:0
			}
		},
		components:{
			Headers,
			Card
		},
		mounted(){
			// this.axios.get('http://gank.io/api/data/Android/10/1').then((response)=>{
			// 	this.cardlists = response.data.results;
			// 	console.log(this.cardlists);
			// })
		},
		methods:{
			//vue-infinite-scroll加载更多
			loadTop:function(){
				this.$store.commit('UPDATE_LOADING',true)
				// this.page = 4;
				this.axios.get(`http://gank.io/api/data/Android/10/${this.page}`).then((response)=>{
					console.log(`${this.page}`);
					//concat()链接两个或多个数组，返回连接数组的副本，不会改变原数组
					this.cardlists = this.cardlists.concat(response.data.results);
					console.log(response.data.results);
					this.busy = false;
					this.$nextTick(()=>{//在dom重新渲染完后执行
						this.$store.commit('UPDATE_LOADING',false)
					})
				})
			},
			loadMore:function(){
				this.busy = true;
				this.loadTop();
				this.page++;
				
			}
		}
	}
</script>
<style scoped>
	.cardlists{
		width:100%;
		overflow:hidden;
	}
</style>