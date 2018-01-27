// title模块
import * as types from '../mutation-type'
const MENUS = ['welfare','android','ios','web','recommend'];

const state = {
	'headerTitle':'福利',//默认显示标题为福利
	'menus': MENUS, //设置menus数据
	'menuShow':false,//menu页默认不显示
	'loadingShow':false //默认不显示加载更多
};

const getters = {
	getHeaderTitle: state => state.headerTitle
};

const mutations = {
	UPDATE_TITLE(state,title){
		console.log(title);
		state.headerTitle = title
	},
	UPDATE_MENUSHOW(state){
		state.menuShow = !state.menuShow
	},
	UPDATE_LOADING(state,data){
		state.loadingShow = data
	}

};

export default{
	state,
	mutations,
	getters
}