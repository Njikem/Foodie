<template>
    <div>
      <h1>Restaurant SignUp</h1>

    <div id="signup">

      <div class="first">
       <input  v-model="email" placeholder="Email"/>
      </div>

      <div class="last">
       <input  v-model="name" placeholder="Name"/>
      </div>

      <div class="last">
       <input  v-model="address" placeholder="Address"/>
      </div>

      <div class="image">
       <input  v-model="phone_number" placeholder="Phone Number"/>
      </div>

      <div class="email">
       <input  v-model="bio" placeholder="Bio"/>
      </div>

      <div class="user">
       <input  v-model="city" placeholder="City"/>
      </div>

       <div class="pass">
       <input  v-model="profile_url" placeholder="Profile_url"/>
      </div>

      <div class="last">
       <input  v-model="banner_url" placeholder="Banner_url"/>
      </div>

      <div class="last">
       <input  v-model="password" placeholder="Password"/>
      </div>
       
       <button @click="signUp">SignUp</button>

    </div>
      

      
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: 'SignUpRestaurant',
        components: {

        },

        data() {
            return {
                token: "",
                restaurantid: "",
                email: "",
                name: "",
                address: "",
                phone_number: "",
                bio: "",
                city: "",
                profile_url: "",
                banner_url: "",
                password: ""
        }
    },
       
        methods: {

            signUp: function(){
                console.log("signUp", this.email, this.name, this.address, this.phone_number, this.bio, this.city, this.Profile_url, this.banner_url, this.password)

             const body =  {
                          email: this.email,
                          name: this.name,
                           address: this.address,
                           phone_number: this.phone_number,
                           bio: this.bio,
                            city: this.city,
                            profile_url: this.profile_url,
                            banner_url: this.banner_url,
                           password: this.password
                   }
                
                
                console.log(body)
                
                axios.request({
                   method: "POST",
                    url: 'http://209.38.6.175:5000/api/restaurant',
                    headers: {
                       'x-api-key': 'abcd1234',
                    },
                   data: body

               })
                   .then(this.success)
                   .catch(this.failure)
                    
                
            },

            success: function(response){
              
                if(response.status === 201){
                    console.log(response)
                    this.token = response.data.token
                    this.restaurantid = response.data.restaurant_id
                    alert("signUp is successful")
                    cookies.set('REST_TOKEN', this.token)
                    cookies.set('RESTAURANT_ID', this.restaurantid)
                    this.$router.push('/')
                }
            },
           

           failure: function(error){
           console.log(error)

           },


        },

        
    }
</script>

<style  scoped>


#signup{
   box-sizing: border-box;
   display: grid;
   justify-items: center;
   align-items: center;
   grid-auto-flow: row;
   margin-top: 30px;  
   
}

h1{
    text-align: center;
    padding-top: 30px;
}

input{
    padding: 15px 50px 15px 30px;
  
}

.first{
    margin-top: 20px;
}

.last{
    margin-top: 20px;
}

.image{
    margin-top: 20px;
}

.user{
    margin-top: 20px;
}

.email{
    margin-top: 20px;
}

.pass{
    margin-top: 20px;
}

button{
    margin-top: 20px;
    padding: 8px 100px 8px 100px;
    background-color: orangered;
    color: white;
    font-weight: 700;
    border: none;
}


</style>