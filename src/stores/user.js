import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useUserStore = defineStore('user', () => {
  const user = ref(0);
  const cart =ref(0);
  function setUser(item) {
    user.value =item
  }
  function setCart(item) {
    cart.value =item
  }
  function addToCart(id){
    axios.post('/add-to-cart',{
      porduct_id : id,
      user_id : user.value.id
    }).then(res =>{
      getCart()
    })
  }
  //  axios.get(`/add-to-cart/?user_id=${user.value.id}`)
  function getCart(){
    axios.get('/add-to-cart',{
      params:{
        user_id:user.value.id
      }
    }).then(res =>{
      console.log(res.data);
      cart.value = res.data
    })
  }

  return { user, setUser , addToCart , cart }
})
