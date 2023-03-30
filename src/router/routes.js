import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';
import Center from '@/pages/Center';
import MyOrder from '@/pages/Center/MyOrder';
import GroupOrder from '@/pages/Center/GroupOrder';
//配置路由
export default [ 
  {
    path: '/center',
    name: 'center',
    component: Center,
    meta: {
      show: true
    },
    children: [
      {
        path: 'myorder',
        component: MyOrder
      },
      {
        path: 'grouporder',
        component: GroupOrder
      },
      {
        path: '/center',
        redirect: '/center/myorder'
      },
    ]
  },
  {
    path: '/paysuccess',
    name: 'paysuccess',
    component: PaySuccess,
    meta: {
      show: true
    }
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay,
    meta: {
      show: true
    }
  },
  {
    path: '/trade',
    name: 'trade',
    component: Trade,
    meta: {
      show: true
    }
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: ShopCart,
    meta: {
      show: true
    }
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: {
      show: true
    }
  },
  {
    path: '/detail/:id',
    component: Detail,
    meta: {
      show: true
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      show: true
    }
  },
  {
    path: '/search/:keyword?',
    name: 'search',
    component: Search,
    meta: {
      show: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      show: false
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      show: false
    }
  },
  {
    path: '/',
    redirect: '/home'
  }
]
