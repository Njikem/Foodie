<template>
    <div>
       <h2>Cart Page</h2>

       <div v-for="(cart_item, i) in cart" :key="i">

        <p>{{cart_item.description}}</p>
        <p>{{cart_item.image_url}}</p>
        <p>{{cart_item.name}}</p>
        <p>{{cart_item.price}}</p>
        <button @click="removeItem(cart_item)">Remove Item</button>
       </div>

     <router-link to="/checkout">
       <button id="checkout">Go To CheckOut</button>
     </router-link>
    </div>
</template>

<script>
import cookies from "vue-cookies";
    export default {
        name: 'CartPage',
        components: {

        },

        data() {
            return {
               cart: [] 
            }
        },

        methods: {
            removeItem(cart_item){
                console.log(cart_item)
              this.cart.splice(this.cart.indexOf(cart_item), 1);
                  cookies.set("CART", this.cart)
            }
        },


        mounted () {
             const cart = cookies.get('CART');
                this.cart = cart 
                console.log(this.cart)
                

                

                
        },
        
    }
</script>

<style  scoped>

#checkout{
    box-sizing: border-box;
    margin-top: 35px;
    background-color: red;
    border: none;
    color: #fff;
    font-family: sans-serif;
    font-weight: 700;
    padding: 10px 16px;
}

</style>