<template>
    <div >
        <h2>This is CheckOut</h2>

        <div  id="cart_items">

        <div v-for="(cart_item, i) in cart" :key="i" >
         <p>{{cart_item.name}}</p>
         <p>{{cart_item.price}}</p>
        
        </div>

        <div>
            <h4>Total Price: {{total}}</h4> 

        </div>

        <div id="btn">
         <button @click="cartOrder">Order</button>
     </div>

        
    <div class="card" >
        <input v-model="email" placeholder="Email"/>
        <input v-model="name" placeholder="Name"/>
        <input v-model="card_number" placeholder="Card Number"/>
        <input v-model="expiry_date" placeholder="mm/yy"/>
        <input v-model="cvv" placeholder="CVV"/>

        
    </div>

        </div>

     

    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {

        name: 'CheckOutPage',
        components: {

        },

        data() {
            return {
                cart: [],
                email: '',
                name: '',
                card_number: '',
                expiry_date: '',
                cvv: '',
                total: '',
                token: '',
                menu_items: '',
                restaurant_id: ''
            }
        },

        methods: {
            cartOrder() {
                console.log('card',  this.email, this.name, this.card_number, this.cvv)
                axios.request({
                    method: "POST",
                    url: "http://209.38.6.175:5000/api/client-order",

                    headers: {
                        "x-api-key": "abcd1234",
                        "token": this.token

                    },

                    data: {
                        menu_items: [61, 62, 63],
                        restaurant_id: 43
                    }
                })

                .then(this.success)
                .catch(this.failure)

            },

            success: function(response){
                 console.log(response)
                 if(response.status ===201){
                    const order = response.data
                    console.log(this.order)
                    this.$router.push('/')
                 }
            },

            failure: function(error){
                console.log(error)
            }
        },


        mounted () {
             const cart = cookies.get('CART');
                this.cart = cart 
                console.log(this.cart);
                

                const token = cookies.get('TOKEN')
                 console.log(token)
                 this.token = token
                 console.log(this.token)

                let total = 0;
                for(let i=0; i < this.cart.length; i++){
                    const cart_item = this.cart[i]
                    console.log(cart_item.price)
                    total = total + cart_item.price
                   
                }

                 console.log(total)
                 this.total = total

                 
        },
        
    }
</script>

<style  scoped>
   .cart{
    display: flex;
    justify-content: space-between;
   }

   h2{
    text-align: center;

   }

   #cart_items{
    padding-left: 25px;
   }

   #btn{
    display: grid;
    justify-items: center;
    align-items: center;  
   }

   button{
    padding: 10px 35px;
    background-color: red;
    color:#fff;
    font-weight: 800;
    border: none;

   }

   .card{
     box-sizing: border-box;
     padding-top: 20px;
     padding-bottom: 20px;
     display: grid;
     justify-items: center;
     align-items: center;
     gap: 10px;
   }

   input{
     padding: 10px 25px;
   }

</style>