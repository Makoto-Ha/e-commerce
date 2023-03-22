import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
import getUUID from '@/utils/uuid_token';

const state = {
  goodsInfo: {},
  uuid_token: getUUID
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
  },
  async addOrUpdateShopCart(_, {id, skuNum}) {
    let response = await reqAddOrUpdateShopCart(id, skuNum);
    return response.code === 200 ? 'ok' : Promise.reject(new Error('failed'));
  }
}

const getters = {
  categoryView(state) {
    return state.goodsInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodsInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodsInfo.spuSaleAttrList || [];
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}