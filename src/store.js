import { createStore } from 'vuex';

const store = createStore({
  state: {
    count: 0,  // 定义一个简单的状态
  },
  mutations: {
    increment(state) {
      state.count++;  // 状态增量
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');  // 触发 mutations
    },
  },
  getters: {
    getCount(state) {
      return state.count;  // 获取状态值
    },
  },
});

export default store;
