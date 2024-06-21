<template>
    <div>
     
       <Header/>
       <GetRestaurants/>  
       <Body/>
      <MainFooter/>
     



    </div>
</template>

<script>



import Header from '@/components/Header.vue' 
import GetRestaurants from '@/components/GetRestaurants.vue' 
import Body from '@/components/Body.vue' 
import MainFooter from '@/components/MainFooter.vue'


export default {
    name: 'Home',
    components: {
       Header,
       GetRestaurants,
       Body,
       MainFooter

    },
     
}

</script>

<style scoped>


</style>