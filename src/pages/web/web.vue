<template>
	<div class="wrapper">
		<headers></headers>
		<div class="content">
			<ul class="cardlists">
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
				cardlists:[]
			}
		},
		components:{
			Headers,
			Card
		},
		mounted(){
			this.axios.get('http://gank.io/api/data/前端/20/1').then((response)=>{
				this.cardlists = response.data.results;
				console.log(this.cardlists);
			})
		}
	}
</script>
<style scoped>
	.cardlists{
		width:100%;
		overflow:hidden;
	}
</style>