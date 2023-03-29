import { reqAddressInfo, reqOrderInfo } from "@/api";

const state = {
  address: [],
  orderInfo: {}
}

const mutations = {
  GETADDRESSINFO(state, address) {
    state.address = address;
  },
  GETORDERINFO(state, orderInfo) {
    state.orderInfo = orderInfo;
  }
}

const actions = {
  async getAddressInfo({commit}) {
    let response = await reqAddressInfo();
    if(response.code === 200) commit('GETADDRESSINFO', response.data);
  },
  async getOrderInfo({commit}) {
    let response = await reqOrderInfo();
    if(response.code === 200) commit('GETORDERINFO', response.data);
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}