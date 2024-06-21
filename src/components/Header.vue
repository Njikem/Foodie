<template>
    <div>
<div id="header">

    <div id="logo">
       <img src="@/assets/logo.png" id="logo1">
       <div class="order-img">
       <h4>Start Your Order</h4>
        <img src="@/assets/Downward_arrow.png" id="arrow">
       </div>
    </div>

    <div id="input">
       <img src="@/assets/magnifying glass icon.png" id="mag-img">
        <input type="search" v-model="search" placeholder="Search Categories, Places Near You and Items"  id="input-one"/>
    </div> 

 
        <div class="flag">
         <img src="@/assets/chat.png" id="chat">
         <img src="@/assets/canada.png" id="canada"> 
        </div>

         <div id="button">
      <div id="login">
        <router-link
         to="/login"
       >

        <h4>Log In</h4>
       </router-link>
      </div>
        
      <div id="signup_btn">
         <router-link
         to="/signup"
       >

        <button id="signUp">Sign Up</button>
       </router-link>
      </div>

    </div>

    

</div>

    </div>
</template>

<script>
    export default {
        name: "Header",
        component:{

        },

        
    }
</script>

<style  scoped>
   #logo1{
    width: 40px;
    height: 40px;
   
   }

   #arrow{
    width: 20px;
    height: 15px;
    box-sizing: border-box;
    margin-top: 25px;
    padding-left: 6px;

   }

   #mag-img{
    box-sizing: border-box;
    width: 35px;
     position: absolute;
     padding-top: 15px;
     padding-left: 15px;
     
   
   }

   #images{
    width: 30px;
    box-sizing: border-box;
    display: flex;
    margin-right: 100px;
   
   }

   #chat{
    width: 30px;
    height: 30px;
    margin-right: 30px;
    
   }

   #canada{
    width: 30px;
    height: 30px;
   }

   #header{
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
   }

   #logo{
    display: flex;
    box-sizing: border-box;
    padding-left: 30px;
   }

   .order-img{
    display: flex;
    padding-left: 30px;
   }

   #input{
    box-sizing: border-box;
    position: relative;
    padding-top: 12px;
   padding-left: 150px;
    
   }

   .flag{
    display: flex;
    box-sizing: border-box;
    padding-top: 21px;
    padding-left: 290px;
   
   }

   #signUp{
    padding: 6px 10px 6px 10px;
    margin-left: 16px;
    border-radius: 40px;
    background-color: black;
    color: #fff;
    font-weight: 700;
    
   }

   #signup_btn{
      box-sizing: border-box;
      padding-top: 19px;

   }

   #login{
    box-sizing: border-box;
    padding-top: 5px;
   }

  

   #button{
    display: flex;
    padding-right: 50px;
    text-decoration: none;
   }

   #input-one{
    padding: 16px 200px 16px 50px;
   }


   @media only screen and (min-width: 768px){

    .order-img h4{
        width: 90px;
        font-size: 11px;
        font-weight: 900;
        margin-top: 25px;
    }

    #input-one{
        padding: 16px 50px 16px 90px;
        margin-right: 50px;   
    }
 
    #header{
        padding-top: 20px;
    }

    
        .flag{
          padding-left: 150px;
        }
            
   
}



</style>