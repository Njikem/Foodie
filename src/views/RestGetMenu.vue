<template>
    <div> 
     
     <div>
        <h1>Restaurant  Menu Page</h1>
        </div>

    <div  v-for="(menu, i) in menu_items" :key="i">
        <div>
        <p>{{menu.description}}</p>
        <p>{{menu.image_url}}</p>
        <p>{{menu.name}}</p>
        <p>{{menu.price}}</p>
         <button @click="deleteMenu(menu.id)">Delete</button>
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
               restaurantid: '',
               menu_items: [],
               

               
            }
        },

        methods: {
            getMenu() {
                console.log('Get my menu items')
                axios.request({
                    method: 'GET',
                    //my restaurant_id can be 3, 20, 24
                    url: 'http://209.38.6.175:5000/api/menu?restaurant_id=24',
                    headers: {
                        'x-api-key': 'abcd1234',
                    },
                    params: {
                        restaurant_id: this.restaurantid
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


            deleteMenu(menu_id) {
                axios.request({
                    method: "DELETE",
                    url: "http://209.38.6.175:5000/api/menu",

                    headers: {
                         'x-api-key': 'abcd1234',
                         'token': this.token
                    },

                    data: {
                         menu_id: menu_id
                    },
                })
                .then(this.successDelete)
                .catch(this.failureDelete)
            },
            successDelete: function(response){
                console.log("This", response)
                if(response.status ===204){
                    this.getMenu()
                }
            },
            failureDelete: function(error){
                console.log(error)
            },
        },

       
      mounted () {
            const restaurant_id = cookies.get('RESTAURANT_ID');
            console.log(restaurant_id)
            this.restaurantid = restaurant_id;
            this.token = cookies.get('REST_TOKEN')
            console.log(this.token)
            this.getMenu()
  
          
        },


    }
</script>

<style  scoped>

</style>