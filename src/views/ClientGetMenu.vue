<template>
    <div> 
     
     <div id="menu">
        <div>
        <h1>Client  Menu Page</h1>
        </div>
     
        <diV>
            <router-link to="/cart">

            <img src="@/assets/cart-icons.png"/>
            <p>{{cartLength}}</p>
                    
                </router-link>
            
        </diV>

        </div>

   

    <div  v-for="(menu, i) in menu_items" :key="i">
        <div>
        <p>{{menu.description}}</p>
        <p>{{menu.image_url}}</p>
        <p>{{menu.name}}</p>
        <p>{{menu.price}}</p>
        <h1>Hi</h1>
        <button @click="addToCart(menu)">Add To Cart</button>
        </div>

        
   
    
    </div>

    </div>
</template>

<script>

import axios from "axios";
import cookies from "vue-cookies";



    export default {
        name: 'GetMenu',
        component: {
            
        },

        data() {
            return {
               restaurant_id: '',
               menu_items: [],
               cart: []

               

            }
        },
        computed: {

            cartLength: function() {  
                if(this.cart){
                    return this.cart.length
                }
                
                return 0
                
            }
        } ,     

        methods: {
            getMenu() {
                console.log('Get my menu items')
                axios.request({
                    method: 'GET',
                    //my restaurant_id can be 3, 20, 24
                    url: `http://209.38.6.175:5000/api/menu?restaurant_id=${this.restaurant_id}`,
                    headers: {
                        'x-api-key': 'abcd1234',
                    }
                    
                })
                .then(this.success)
                .catch(this.failure)
            },

            success: function(response){
                console.log(response)
                if(response.status ===200){
                    this.menu_items = response.data
                    console.log(this.menu_items)

                   

                }
                
            },

            failure: function(error){
                console.log(error)
            },


            addToCart(menu_item){
                console.log(menu_item)
                this.cart.push(menu_item)
                console.log(this.cart)
                cookies.set('CART', this.cart)
            }

        },

       
      mounted () {
          const cart = cookies.get('CART')
          if(!cart){
            this.cart = []
            cookies.set('CART', [])
          }
          console.log(cart)
          this.cart = cart
          console.log(this.cart)
           
            const restaurant_id = this.$route.params.restaurant_id;
            console.log(restaurant_id)
            this.restaurant_id = restaurant_id;
            this.getMenu();
            
          
        },


    }
</script>

<style  scoped>

#menu img{
    width: 28px;
    box-sizing: border-box;
    padding-top: 28px;
}

#menu{
    display: flex;
    justify-content: space-between;
}


 @media only screen and (min-width: 768px){

    #footer{
        width: 100px;
    }

    #menu{
    display: grid;
   justify-content: center;
   align-content: center;
   grid-template-columns: 1fr 1fr 1fr;
}
 }

</style>