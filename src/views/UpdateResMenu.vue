<template>
<div>
    <div >
      <h1>Update Menu</h1>
    </div>

     <div id="login">

      <div class="email">
       <input  v-model="description" placeholder="Description"/>
      </div>

       <div class="pass">
       <input  v-model="image_url" placeholder="Image_url"/>
      </div>

       <div class="pass">
       <input  v-model="name" placeholder="Name"/>
      </div>

       <div class="pass">
       <input  v-model="menu_id" placeholder="Menu_id"/>
      </div>

       <div class="pass">
       <input  v-model="price" placeholder="Price"/>
      </div>
       
       <button @click="UpdateMenu">Update</button>

      

     </div>

</div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';

    export default {
        name: 'UpdateResMenu',
        components: {
            
        },
        
        data() {
            return {
                description: '',
                image_url: '',
                name: '',
                price: '',
                token: '',
                menu_id: '',
                menu: ''
              
            }
        },

        methods: {
            UpdateMenu() {
                axios.request({

                   method: 'PATCH',
                    url: 'http://209.38.6.175:5000/api/menu',

                    headers: {
                        'x-api-key': 'abcd1234',
                        'token': this.token,
                       
                    },

                    data: {
                        description: this.description,
                        image_url: this.image_url,
                        name: this.name,
                        price: this.price,
                        menu_id: this.menu_id,

                       

                    },

                }) 
                .then(this.success)
                .catch(this.failure)      
                   
            },

            success: function(response){
                console.log(response)
                if(response.status ===200){
                    this.menu = response.data
                    console.log(this.menu)
                     this.$router.push('/menu')
                    
                }
            },

            failure: function(error){
                console.log(error)
            }
        },

        mounted () {
     this.token = cookies.get('REST_TOKEN') 
         console.log(this.token)
       
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