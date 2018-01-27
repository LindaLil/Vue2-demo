<template>
	<div class="wrapper">
		<headers></headers>
		<div class="content">
			<ul class="welfare-lists" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
				<list v-for="item in items" :key="item.id" :img="item.url" :publishtime="item.publishedAt"></list>
			</ul>
		</div>
	</div>
</template>
<script>
	import Headers from '../../components/header/header'
	import List from '../../components/list/list'
	export default{
		data(){
			return{
				items:[],
				basy:false,
				page:0
			}
		},
		components:{
			Headers,
			List
		},
		created(){
			// this.axios.get('http://gank.io/api/data/福利/20/1').then((response)=>{
			// 	this.items = response.data.results;
			// 	console.log(response.data.results);
			// })
		},
		methods:{
			//vue-infinite-scroll加载更多
			loadTop:function(){
				this.$store.commit('UPDATE_LOADING',true)
				// this.page = 4;
				this.axios.get(`http://gank.io/api/data/福利/10/${this.page}`).then((response)=>{
					console.log(`${this.page}`);
					//concat()链接两个或多个数组，返回连接数组的副本，不会改变原数组
					this.items = this.items.concat(response.data.results);
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
	.welfare-lists{
		/*display: flex;
		justify-content: space-around;
		align-items: space-around;
		flex-flow:row wrap;*/
		overflow: hidden;
		column-count: 2; /*多列布局，分2列*/
		column-gap: 10px; /*列间距10px*/
		column-width: 100px; /*列的宽度*/


	} 
</style>