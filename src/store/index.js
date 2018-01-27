// 组装各个模块并导出store
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import title from './modules/title'


Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	//组合各个模块
	modules:{
		title
	}
})
