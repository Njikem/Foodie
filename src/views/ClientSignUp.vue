<template>
    <div>
      <h1> Sign Up</h1>

    <div id="signup">

      <div class="first">
       <input  v-model="first_name" placeholder="First Name"/>
      </div>

      <div class="last">
       <input  v-model="last_name" placeholder="Last Name"/>
      </div>

      <div class="image">
       <input  v-model="image_url" placeholder="image_url"/>
      </div>

      <div class="email">
       <input  v-model="email" placeholder="Email"/>
      </div>

      <div class="user">
       <input  v-model="username" placeholder="Username"/>
      </div>

       <div class="pass">
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
        name: 'SignUp',
        components: {

        },

        data() {
            return {
                token: "",
                clientid: "",
                first_name: "",
                last_name: "",
                image_url: "",
                email: "",
                username: "",
                password: ""
        }
    },
       
        methods: {

            signUp: function(){
                console.log("signUp", this.first_name, this.last_name, this.image_url, this.email, this.username, this.password)
              
            

               axios.request({
                   method: "POST",
                    url: 'http://209.38.6.175:5000/api/client',
                    headers: {
                       'x-api-key': 'abcd1234',
                    },
                   data: {
                          email: this.email,
                          first_name: this.first_name,
                           last_name: this.last_name,
                            image_url: this.image_url,
                            username: this.username,
                            password: this.password
                   }, 

                })
                   .then(this.success)
                    .catch(this.failure)
                    
                
            },

            
            success: function(response){
                console.log(response)
                if(response.status === 201){
                     this.token = response.data.token
                    this.clientid = response.data.client_id
                    alert("signUp is successful")
                    cookies.set('TOKEN', this.token)
                    cookies.set('CLIENT_ID', this.clientid)
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
    background-color: green;
    color: white;
    font-weight: 700;
    border: none;
}


</style>