<template>
    <div>
      <h1>Update Restaurant Login</h1>
      

    <div id="login">

      <div class="email">
       <input  v-model="name" placeholder="Name"/>
      </div>

      
    <div class="email">
       <input  v-model="email" placeholder="email"/>
      </div>

     <div class="email">
       <input  v-model="password" placeholder="Password"/>
      </div>



       <div class="pass">
       <input  v-model="phone" placeholder="Phone Number"/>
      </div>
       

       <div class="pass">
       <input  v-model="address" placeholder="Address"/>
      </div>

      <div class="pass">
       <input  v-model="bio" placeholder="Bio"/>
      </div>

     
       <button @click="updateRestaurant">Update</button>

    </div>
      

      
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: 'RestUpdate',
        components: {

        },

        data() {
            return { 
                token: "",
                name: "",
                phone_number: "",
                address: '',
                bio: ''
        }
    },
       
        methods: {

          updateRestaurant: function(){
                console.log("login", this.name,  this.phone_number, this.address, this.bio)
              
            

              axios.request({
                   method: "PATCH",
                    url: 'http://209.38.6.175:5000/api/restaurantrestaurant_id=27',
                    headers: {
                      'x-api-key': 'abcd1234',
                      'token': this.token
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
                if(response.status === 200){
                     this.token = response.data.token
                   alert("Update is successful")
                    cookies.set('TOKEN', this.token)
                    this.$router.push('/restlogin')
                }
           },
           

           failure: function(error){
                console.log(error)
                document.body.innerHTML = '<h4 style="color:red">Please Sign Up If You Have not Done So! </h4>'  

           },


        },

        mounted () {
            const token = cookies.get('TOKEN');
            this.token = token
          
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