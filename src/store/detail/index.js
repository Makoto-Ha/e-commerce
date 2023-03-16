import { reqGoodsInfo } from "@/api";

const state = {
  goodsInfo: {}
}

const mutations ={
  GETGOODSINFO(state, goodsInfo) {
    state.goodsInfo = goodsInfo;
  }
}

const actions = {
  async getGoodsInfo({commit}, id) {
    let response = await reqGoodsInfo(id);
    if(response.code === 200) commit('GETGOODSINFO', response.data);
  }
}

const getters = {
  categoryView(state) {
    return state.goodsInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodsInfo.skuInfo || {};
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}