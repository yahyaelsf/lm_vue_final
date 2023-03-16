import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useUserStore = defineStore('user', () => {
  const user = ref(0);
  const cart =ref(0);
  const lang = ref("");
  function setUser(item) {
    user.value =item
  }
  function setCart(item) {
    cart.value =item ?? "en"
  }
  function setLang(item) {
    lang.value =item
  }
  function addToCart(id){
    axios.post('/add-to-cart',{
      porduct_id : id,
      user_id : user.value.id
    }).then(res =>{
      toastr.success("product addedd Successfully to cart")
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
      cart.value = res.data
    })
  }
  function deleteFromCart(id){
     axios.delete('/add-to-cart/'+id).then(res => {
        toastr.success("product deleted successfully")
        getCart()
    })
  }

  return { user, setUser , addToCart , cart , deleteFromCart ,setLang , lang }
})
