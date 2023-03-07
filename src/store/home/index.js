import { reqCategoryList } from "@/api"
const state = {
  categoryList: []
}

const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  }
}

const actions = {
  async categoryList({commit}) {
    let response = await reqCategoryList();
    if(response.code === 200) commit('CATEGORYLIST', response.data);
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