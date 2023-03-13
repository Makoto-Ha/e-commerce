import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api"
const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}

const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
  }
}

const actions = {
  async categoryList({commit}) {
    let response = await reqCategoryList();
    if(response.code === 200) commit('CATEGORYLIST', response.data);
  },
  async getBannerList({commit}) {
    let response = await reqGetBannerList();
    if(response.code === 200) commit('GETBANNERLIST', response.data);
  },
  async getFloorList({commit}) {
    let response = await reqGetFloorList();
    if(response.code === 200) commit('GETFLOORLIST', response.data);
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