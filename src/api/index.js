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