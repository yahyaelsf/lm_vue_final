import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import ShopView from '../views/ShopView.vue';
import CheckoutView from '../views/CheckoutView.vue'
import { useUserStore } from '../stores/user';
import NotFoundView from '../views/NotFoundView.vue';
import CartView from '../views/CartView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        title:'Home Page'
      }
    },
     {
      path: '/login',
      name: 'Login',
      component: LoginView,
       meta:{
        title:'Login Page'
      }
    },
      {
      path: '/register',
      name: 'Register',
      component: RegisterView,
       meta:{
        title:'Shop Page'
      }
    },
    {
      path: '/shop',
      name: 'Shop',
      component: ShopView
    },
     {
      path: '/cart',
      name: 'Cart',
      component: CartView
    },
     {
      path: '/checkout',
      name: 'Checkout',
      component: CheckoutView,
      meta:{
        Auth:true
      }
    },
     {
      path: '/:path(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})
let defaultTitle = "Final Project";
router.afterEach((to)=>{
  document.title = to.meta.title || defaultTitle
})
router.beforeEach((to,from,next)=>{
  const user = useUserStore();
  if(!user.user && to.meta.Auth){
    router.push('/login')
  }
  next()
});

export default router
