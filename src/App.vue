<template>
  <div id="app">
      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
     
        <div class="navbar-end">
          <router-link to="/" class="navbar-item">
            About
          </router-link>
          <router-link to="/books" class="navbar-item">
           Books
          </router-link>
          <router-link to="/home" class="navbar-item">
           Code
          </router-link>
          <router-link to="/portfolio" class="navbar-item">
           Contact
          </router-link>
       </div>
     </div>
   <router-view />
 
</div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return{
        showNav: false
      }
    },
  };
</script>

<style>

#app {

  text-align: center;
 

  background: ##fff;
  margin-top: 0px;
   overflow: hidden;
  display: block;
  position: relative;
   padding-bottom: 210px; /* height of your footer */
}
.navbar-end{
  font-family: 'Arima Madurai';font-size: 18px;
  background: ##ffff;
  color:black;



}
.navbar-item{
  padding-left: 3%;
  background: ##fff;
  color:black;

}
.navbar-menu{
  font-family: 'Arima Madurai';font-size: 18px;
  width: 100%;
   margin-top: 5px;

  align-items: center;
  background: ##fff;
  padding-top: 2%;
  padding-bottom: 2%;


}
</style>