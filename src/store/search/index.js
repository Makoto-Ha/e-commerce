import { reqGetSearchInfo } from "@/api";

const state = {
  searchList: {}
}

const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  }
}

const actions = {
  async getSearchList({commit}, params={}) {
    let response = await reqGetSearchInfo(params);
    if(response.code === 200) commit('GETSEARCHLIST', response.data);
  }
}

const getters = {
  attrsList(state) {
    return state.searchList.attrsList || [];
  },
  goodsList(state) {
    return state.searchList.goodsList || [];
  },
  trademarkList(state) {
    return state.searchList.trademarkList || [];
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}