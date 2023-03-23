import { reqGetCode, reqUserRegister,reqUserLogin } from "@/api";
const state = {
  code: ''
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  }
};
const actions = {
  async getCode({commit}, phone) {
    let response = await reqGetCode(phone);
    if(response.code === 200) {
      commit('GETCODE', response.data);
      return 'ok';
    }else {
      return Promise.reject(new Error('failed'));
    }
  },
  async userRegister(_, user) {
    let response = await reqUserRegister(user);
    if(response.code === 200) {
      return 'ok'
    }else {
      return Promise.reject(new Error('failed'));
    }
  },
  async userLogin({commit}, data) {
    let response = await reqUserLogin(data);
    commit('USERLOGIN', response.data?.token)
    if(response.code === 200) {
      return 'ok';
    }else {
      return Promise.reject(new Error('登入失敗'));
    }
  }
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}