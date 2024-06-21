<template>
    <div>
        <div>
            <h1>Client order page</h1>
        </div>

         <div style="padding: 20px" v-for="(order, key) in itemsByOrder" :key="key" >
            Order {{key}}
            <div  v-for="(order, i) in order" :key="i-key" >
                {{ order.name}} {{order.price}} 
                <!-- TO DO REsearch a terniary -->
                {{order.is_complete === 0 ? "Pending" : "Complete"}}
            </div>
           
    
        </div>

    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: 'GetClientOrder',
        components: {
            
        },
       
       data() {
        return {
            is_confirmed: false,
            is_complete: false,
            token: '',
            order_items: [],
            itemsByOrder: {} 
          
        }
       },

       methods: {
        client_order(){
            console.log('This is client order')

            axios.request({
                method: "GET",
                url: "http://209.38.6.175:5000/api/client-order?is_confirmed=false&is_complete=false",

                headers: {
                  "x-api-key": "abcd1234",
                  "token": this.token
                },

                
            })
            .then(this.success)
            .catch(this.failure)
        },

        success: function(response){
            console.log(response)
            if(response.status ===200){
                this.order_items = response.data
                console.log('Maureen', this.order_items)

               let  itemsByOrder = {}

                
                for(let i=0; i < this.order_items.length; i++){
                    let orderItems = this.order_items[i]
                    console.log(orderItems.order_id)
                    itemsByOrder[`${orderItems.order_id}`] = []
                    
                }

                console.log('HAMBURGER', itemsByOrder)

                for(let i=0; i < this.order_items.length; i++){
                    let orderItem = this.order_items[i]
                    console.log(orderItem.order_id)
                    itemsByOrder[`${orderItem.order_id}`].push(orderItem)
                    console.log(itemsByOrder[`${orderItem.order_id}`])
                    
                }

                 console.log('HAMBURGER', itemsByOrder)
                 console.log(Object.keys(itemsByOrder))

                 this.itemsByOrder = itemsByOrder
            }

        },

        failure: function(error){
            console.log(error)
        }

       },


       mounted () {
        this.token = cookies.get('TOKEN')
        console.log(this.token)
          this.client_order();
       },

    }
</script>

<style  scoped>

h1{
    text-align: center;
}


    

</style>