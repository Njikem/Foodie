<template>
    <div>
        <div>
            
        </div>

         <div id="skip">
        <div class="pickup">
        <h2>Welcome to Skip</h2>
        <p>More local restaurant than ever before now offer Delivery and Pickup exclusively through skip</p>.
        </div>
            <div id="btn-one">
                <button>Start Your Order</button>
            </div>
    </div>

     <div class="cuisine">
          <div>
             <h3>Cuisines</h3>
           </div>
          
            <div id="items">
                <router-link to="/allitems">
                    <h3>View All</h3>
                </router-link>
            </div>

     </div>
    
        <div class="restaurants-grid">
            
            <div class="restaurant-card" v-for="(restaurant, i) in restaurants" :key="i">
                <router-link :to="`/client/menu/${restaurant.restaurant_id
}`" >
                <div class="restaurant">
                <img :src='restaurant.banner_url' id="logo1"/>
                <p>{{restaurant.name}}</p>
                <p>{{restaurant.price}}</p>
                <p>{{restaurant_id}}</p>
                </div>

                 
            
                
            </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import cookies from 'vue-cookies';
    export default {
        name: 'GetRestaurants',
        components: {

        },

        data() {
            return {
                restaurants: [],
               
            }
        },


        methods: {
            getRestaurants() {
                console.log('This is get restaurant')
                axios.request({
                    method: "GET",
                    url: "http://209.38.6.175:5000/api/restaurants",

                    headers: {
                        'x-api-key': 'abcd1234',
                    },

                   
                })
                
                .then(this.success)
                .catch(this.failure)
            },

            success: function(response){
                 console.log(response)
               if(response.status ===200){
                this.restaurants = response.data
                console.log(this.restaurant)
               }
            },

            failure: function(error){
                 console.log(error)
            },

        },

        mounted () {
            const restaurant_id = cookies.get('RESTAURANT_ID')
            console.log(restaurant_id)
            this.restaurant_id = restaurant_id
            this.getRestaurants()
        },
    }
</script>

<style scoped>
    .restaurant-card {
        border: 1px solid black;

    }

    .restaurants-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;  
    }

    .restaurant img{
        width: 250px;
        height: 250px;
    }


    #skip{
    box-sizing: border-box;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    padding-top: 60px;
    padding-bottom: 40px;
    margin-left: 80px;
}


.pickup{
    box-sizing: border-box;
    padding-left: 120px;
}

.pickup p{
    width: 99%;
    font-family: sans-serif;
    font-size: small;
}

.pickup h2{
    font-family: sans-serif;
    font-size: x-large;
}

.cuisine{
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    
}

.cuisine h3{
    font-weight: 600;
    font-family: sans-serif;
}

#btn-one button{
    padding: 25px 80px;
    background-color: orangered;
    color: #fff;
    font-weight: 800;
    font-family: sans-serif;
    border: none;
    border-radius: 50px;
}




</style>