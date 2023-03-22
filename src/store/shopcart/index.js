import {reqCartList, reqDeleteCartById, reqUpdateCheckedById} from '@/api';
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
    if(response.code === 200) {
      commit('GETCARTLIST', response.data);
      return response.data;
    };
  },
  async deleteCartListById(_, id) {
    let response = await reqDeleteCartById(id);
    if(response.code === 200) {
      return 'ok';
    }else {
      return Promise.reject(new Error('failed'));
    }
  },
  async updateCheckedById(_, {id, isChecked}) {
    let response = await reqUpdateCheckedById(id, isChecked);
    if(response.code === 200) {
      return 'ok';
    }else {
      return Promise.reject(new Error('failed'));
    }
  },
  async deleteAllCheckedCart({dispatch, getters}) {
    let selectedCarts = getters.cartList.cartInfoList.filter(({isChecked}) => isChecked === 1);
    let deleteAll = selectedCarts.map(({skuId}) => {
      return dispatch('deleteCartListById', skuId);
    });
    return await Promise.all(deleteAll);
  },
  async udpateAllCartIsChecked({dispatch, state}, isChecked) {
    let promiseAll = [];
    let carts = state.cartList[0].cartInfoList;
    carts.forEach(cart => {
      let promise = dispatch('updateCheckedById',{id:cart.skuId, isChecked});
      promiseAll.push(promise);
    });
    return await Promise.all(promiseAll); 
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