        
<template>
    <div>
      <h2>Restaurant order page</h2>

      <div  style="padding: 20px" v-for="(order, key) in restOrder" :key="key">

        order{{key}}

        <div v-for="(order, i) in orders" :key="i-key">
            {{order.name}} {{order.price}}
             {{order.is_complete === 0 ? "Pending" : "Complete"}}
     
        </div>

      </div>


    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {

        name: 'RestaurantOrder',
        components: {

        },

        data() {
            return {
                token: '',
                orders: [],
               restOrder: {}

            }
        },

        methods: {
            Rest_Order() {
               console.log('this is restaurant order page')
                axios.request({
                    method: "GET",
                    url: "http://209.38.6.175:5000/api/restaurant-order?is_confirmed=false&is_complete=false",

                    headers: {
                        'x-api-key': 'abcd1234',
                        'token': this.token
                    }
                })
                .then(this.success)
                .catch(this.failure)
                
            },


            success: function(response){
                  console.log(response)
               if(response.status ===200){
                  this.orders = response.data   
                  console.log('BREAD', this.orders)

               let restOrder = {}

               for(let i=0; i < this.orders.length; i++){
                let order_items = this.orders[i]
                console.log('Meal', order_items.order_id)
                restOrder[`${order_items.order_id}`] = []
                
               }

               console.log('RICE', restOrder)

               for(let i=0; i < this.orders.length; i++){
                let orderItem = this.orders[i]
                console.log('ONION', orderItem.order_id)
                restOrder[`${orderItem.order_id}`].push(orderItem)
                console.log('Yam', restOrder[`${orderItem.order_id}`])
               }

               console.log('Potatoes', restOrder)
               console.log('RED', Object.keys(restOrder))

               this.restOrder = restOrder



             
               }  
            },

            failure: function(error){
                console.log(error)
            }
        },


        mounted () {
            this.token = cookies.get('REST_TOKEN');
            console.log(this.token)
            this.Rest_Order()
        },


        
    }
</script>

<style  scoped>

</style>