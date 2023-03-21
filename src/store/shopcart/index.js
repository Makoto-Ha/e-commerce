import {reqCartList} from '@/api';
const state = {
  cartList: []
};
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  }
};
const actions = {
  async getCartList({commit}) {
    let response = await reqCartList();
    if(response.code === 200) commit('GETCARTLIST', response.data);
  }
};
const getters = {
  cartList(state) {
    return state.cartList[0] || [];
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}