import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios"

Vue.use(Vuex);

//state是一个状态管理的集合，所有的数据都在这个里面
//mutation是通过事件来进行更改state里面的数据，同步的一定是在mutation中进行修改state中的数据的。
//actions是通过里面的进行异步操作，通过commit来进行处罚mutation中的事件，对state中的数据进行更改。
//

const state = {

}
const mutations = {


}
const actions = {

}

const store = new Vuex.Store({
    state,
    mutations,
    actions
});
export default store