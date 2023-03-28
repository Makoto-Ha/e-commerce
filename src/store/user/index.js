import { reqGetCode, reqUserRegister,reqUserLogin, reqUserInfo, reqLogout } from "@/api";
const state = {
  code: '',
  token: localStorage.getItem('TOKEN'),
  userInfo: {}
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  USERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  USERLOGOUT(state) {
    state.token = '';
    state.userInfo = {};
    localStorage.setItem('TOKEN', '');
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
    if(response.code === 200) {
      commit('USERLOGIN', response.data?.token)
      localStorage.setItem('TOKEN', response.data?.token);
      return 'ok';
    }else {
      return Promise.reject(new Error('登入失敗'));
    }
  },
  async getUserInfo({commit}) {
    let response = await reqUserInfo();
    if(response.code === 200) commit('USERINFO', response.data);
  },
  async userLogout({commit}) {
    let response = await reqLogout();
    if(response.code === 200) {
      commit('USERLOGOUT');
      return 'ok'
    }else {
      return Promise.reject(new Error('falied'));
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