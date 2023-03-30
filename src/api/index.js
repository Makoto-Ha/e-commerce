import requests from './request';
import mockRequests from './mockAjax';

export const reqCategoryList = () => {
  return requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
  });
}

export const reqGetBannerList = () => {
  return mockRequests({
    url: '/banner',
    method: 'get'
  });
}

export const reqGetFloorList = () => {
  return mockRequests({
    url: '/floor',
    method: 'get'
  });
}

export const reqGetSearchInfo = params => {
  return requests({
    url: '/list',
    method: 'post',
    data: params
  });
};

export const reqGoodsInfo = id => {
  return requests({
    url: `/item/${id}`,
    method: 'get'
  });
}

export const reqAddOrUpdateShopCart = (id, skuNum) => {
  return requests({
    url: `/cart/addToCart/${id}/${skuNum}`,
    method: 'post'
  });
} 

export const reqCartList = () => {
  return requests({
    url: '/cart/cartList',
    method: 'get'
  });
}

export const reqDeleteCartById = id => {
  return requests({
    url: `/cart/deleteCart/${id}`,
    method: 'delete'
  });
}

export const reqUpdateCheckedById = (id, isChecked) => {
  return requests({
    url: `/cart/checkCart/${id}/${isChecked}`,
    method: 'get'
  });
}

export const reqGetCode = phone => {
  return requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
  });
}

export const reqUserRegister = data => {
  return requests({
    url: `/user/passport/register`,
    method: 'post',
    data
  });
}

export const reqUserLogin = data => {
  return requests({
    url: `/user/passport/login`,
    method: 'post',
    data
  }); 
}

export const reqUserInfo = () => {
  return requests({
    url: `/user/passport/auth/getUserInfo`,
    method: 'get'
  });
}

export const reqLogout = () => {
  return requests({
    url: `/user/passport/logout`,
    method: 'get'
  });
}

export const reqAddressInfo = () => {
  return requests({
    url: `/user/userAddress/auth/findUserAddressList`,
    method: 'get'
  });
}

export const reqOrderInfo = () => {
  return requests({
    url: `/order/auth/trade`,
    method: 'get'
  });
}

export const reqSubmitOrder = (tradeNo, data) => {
  return requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: 'post',
    data
  });
}

export const reqPayInfo = orderId => {
  return requests({
    url: `/payment/weixin/createNative/${orderId}`,
    method: 'get'
  });
}
 
export const reqPayStatus = orderId => {
  return requests({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: 'get'
  });
}

export const reqMyOrderList = (page, limit) => {
  return requests({
    url: `/order/auth/${page}/${limit}`,
    method: 'get'
  });
}