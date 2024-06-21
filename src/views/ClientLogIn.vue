<template>
    <div>
      <h1>Log In</h1>
      

    <div id="login">

      <div class="email">
       <input  v-model="email" placeholder="Email"/>
      </div>

       <div class="pass">
       <input  v-model="password" placeholder="Password"/>
      </div>
       
       <button @click="login">LogIn</button>

      <div>
        <router-link
         to="/signup"
       >

        <h4>SignUp</h4>
       </router-link>
      </div>

    </div>
      

      
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: 'ClientLogIn',
        components: {

        },

        data() {
            return { 
                token: "",
                clientid: "",
                email: "",
                password: ""
        }
    },
       
        methods: {

            login: function(){
                console.log("login", this.email,  this.password)
              
            

               axios.request({
                   method: "POST",
                    url: 'http://209.38.6.175:5000/api/client-login  ',
                    headers: {
                      'x-api-key': 'abcd1234',
                    },
                   data: {
                        email: this.email,
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
                   alert("Login is successful")
                    cookies.set('TOKEN', this.token)
                    cookies.set('CLIENT_ID', this.clientid)
                    this.$router.push('/')
                }
           },
           

           failure: function(error){
                console.log(error)
                document.body.innerHTML = '<h4 style="color:red">Please Sign Up If You Have not Done So! </h4>'  

           },


        },

        
    }
</script>

<style  scoped>


#login{
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