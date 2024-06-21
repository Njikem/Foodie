<template>
    <div>


<div id="footer">

    <div class="about">
        <h5>About Us</h5>
        <h5>FAQ</h5>
        <h5>Gifts Cards</h5>
        <h5>Skip For Business</h5>
        <h5>Media and Community</h5>
        <h5>Partner Success Guide</h5>
        <h5>Food Wiki</h5>
    </div>

    <div class="career">
        <h5>Partners</h5>
        <h5>Become A Courier </h5>
        <h5>Careers</h5>
        <h5>Rewards</h5>
        <h5>Skip Express Lane</h5>
        <h5>Browse by City</h5>
        <h5>Responsible Business</h5>
    </div>

    <div class="image">
        <div>
        <h5>Invite Friends, Get $5</h5>
        </div>
      <div>
        <img src="@/assets/facebook2.png">
        <img src="@/assets/twitter-icon1.png">
        <img src="@/assets/green-instagram.png">
        <img src="@/assets/youtube-icon1.png">
      </div>
    </div>

    </div>

<section class="btm-section">
    <div id="line">
        <p>Terms Of Service</p>
        <p>Privacy Policy</p>
        <p>Skip Social Code</p>
        <p>Accessibility Policy</p>
        <p>Account Security</p>
        <p>Coronavirus Update</p>
        <p>Rewards Conditions</p>
    </div>

</section>


<div id="arrow">

    <div id="canada">
<div id="canada1">
    <img src="@/assets/canada.png"/>
   </div>
     
   <div>
     <h2>Canada</h2>
   </div>

   <div id="arrow1">
    <img src="@/assets/downward-arrow.png"/>
   </div>

</div>

   <div id="copy">
      <h3>&copy;SkipTheDishes</h3>
   </div>

</div>


     

     
    </div>
</template>

<script>
    export default {
        name: 'MainFooter',
        component: {

        },
        
    }
</script>

<style  scoped>

#footer{
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 60px;
    background-color: darkslategray;
    color: #fff;


}

.image img{
  padding-top: 160px;
    width: 20px;
    padding-left: 15px;
   
}

.about h5{
    font-family: sans-serif;
    font-weight: 600;
}


.career h5{
    font-family: sans-serif;
    font-weight: 600;
}

.image{
    position: relative;
}

.image h5{
    font-family: sans-serif;
    font-weight: 600;
    box-sizing: border-box;
    
}

#line{
   
     display: flex;
    width: 80%;
     background-color: darkslategray;
     color: #fff;
     border-top: 1px solid white;

}

.btm-section{
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: darkslategray;
    padding-top: 30px;

}

#line p{
    box-sizing: border-box;
    margin-left: 90px;
    font-size: xx-small;
    font-family: sans-serif;
    margin-top: 20px;
    padding-bottom: 60px;
}

#arrow{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding-top: 50px;
    background-color: rgba(47, 79, 79, 0.941);
    color: #fff;
}


#canada {
    display: flex;
    box-sizing: border-box;
    margin-left: 180px;
    gap: 8px;
}

#canada img{
    width: 18px;

    
}

#canada h2{
    font-size: small;
    font-weight: 900;
    font-family: sans-serif;

}


#copy{
    box-sizing: border-box;
    padding-right: 180px;
    font-size: x-small;
    font-weight: 600;   
    font-family: sans-serif; 
}

#arrow1 img{
    width: 12px;
    padding-top: 14px;
     color: #fff;
}
#canada1 img{
    width: 15px;
    padding-top: 10px;
}


</style>