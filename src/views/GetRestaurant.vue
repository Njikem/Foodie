<template>
    <div>
        <div>
            <h2>Restaurant Page</h2>
        </div>

        <div v-for="(restaurant, i) in restaurant" :key="i">

            <p>Address: {{restaurant.address}}</p>
            <p>Banner: {{restaurant.banner_url}}</p>
            <p>Bio: {{restaurant.bio}}</p>
            <p>City: {{restaurant.city}}</p>
            <p>Email: {{restaurant.email}}</p>
            <p>Name: {{restaurant.name}}</p>
            <p>phone_number: {{restaurant.phone_number}}</p>
            <p>Profile_url: {{restaurant.profile_url}}</p>
            <p>Restaurant_id: {{restaurant.restaurant_id}}</p>

            <button @click="deleteRestaurant(restaurant.id)">Delete</button>
            
        </div>

    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: 'GetRestaurant',
        components: {

        },

        data() {
            return {
                restaurant_id: '',
                restaurant: [],
                token: ''
            }
        },


        methods: {
            Restaurant() {
                console.log('This is get restaurant')
                axios.request({
                    method: "GET",
                    url: "http://209.38.6.175:5000/api/restaurant?restaurant_id=28",

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
                this.restaurant = response.data
                console.log(this.restaurant)
               }
            },

            failure: function(error){
                 console.log(error)
            },


           deleteRestaurant(restaurant_id) {
                axios.request({
                    method: "DELETE",
                   url: "http://209.38.6.175:5000/api/restaurant",

                   headers: {
                     'x-api-key': 'abcd1234',
                       'token': this.token
                    },

                    data: {
                         restaurant_id: this.restaurant_id
                  },
               })
                .then(this.successDelete)
                .catch(this.failureDelete)
           },
            successDelete: function(response){
                console.log("This", response)
                if(response.status ===204){
                    const restaurant_id = response.data
                    console.log(restaurant_id)
                    this.Restaurant()
                }
            },
            failureDelete: function(error){
                console.log(error)
            },
        },

        mounted () {
            const restaurant_id = cookies.get('RESTAURANT_ID');
            console.log(restaurant_id)
            this.restaurant_id = restaurant_id
            const token = cookies.get('REST_TOKEN')
            console.log(token)
            this.token = token
            this.Restaurant()
        },
    }
</script>

<style  scoped>

</style>