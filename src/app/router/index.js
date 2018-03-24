import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import LoginBox from '../components/login/LoginBox.vue';
import CartList from '../components/cart/CartList.vue';
import ProductList from '../components/product/ProductList.vue';
import ProductItem from '../components/product/ProductItem.vue';
import FourOhFour from '../components/FourOhFour.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/products'
    },
    {
      path:'/login',
      component:LoginBox,
      beforeEnter:(to,from,next)=>{
        const token=localStorage.getItem("token");
        if(token) next('/products');
        else next();
      }
    },
    {
      path: '/products',
      component: ProductList
    },
    {
      name:'product-by-id',
      path:'/products/:id',
      component:ProductItem,
      props:true,
      beforeEnter:(to,from,next)=>{
        const id = to.params.id;
        let productItemIds=[];
        store.state.product.productItems.map(productItem=>{
          productItemIds.push(productItem.id);
        });
        if(productItemIds.includes(id)) next();
        else next('/not-found')
      }
    },
    {
      path: '/cart',
      component: CartList
    },
    {
      path:'*',
      component:FourOhFour
    }
  ]
})

router.beforeEach((to,from,next)=>{
  const token = localStorage.getItem("token");
  if(!token && to.path!=='/login') 
  {
    next('/login');
  }else 
  {
    next();
  }
})

export default router;