<template>
  <div>
      <div class= "flexi">
          <div class="between">
              <div class="inset"><img src="./autocomplete.gif" alt="this slowpoke moves"  width=250/>
              <br><br>Autofill built in Java<br><p class ="pset">I built this to learn more about the Trie<br> data structure</p>
              <a href="https://github.com/LindseyLaurune/AutoFill" target="_blank" class="button">Repository</a>
              </div>

          </div>
          <div class="between"><div class="inset"><img src="./paint.gif" alt="this slowpoke moves"  height=450 width=300/><br><br>Generative art built in java<br><p class="pset">Made for a demo to engage<br>elementary school kids in code</p><a href="https://github.com/LindseyLaurune/paint" target="_blank" class="button">Repository</a></div></div>

          <div class="between"><div class="inset"><img src="./recording.gif" alt="this slowpoke moves"  height=450 width=300/><br><br>Chat-app built in Node.js and Express.js<br><p class="pset">A simple project to teach myself websockets</p><a href="https://github.com/LindseyLaurune/chatapp" target="_blank" class="button">Repository</a></div></div>

         
      </div>
          
  </div>
</template>
<script>
export default {
  name: 'chunk'
  
}
</script>
<style>
.flexi{
  display: flex;
  justify-content: center;
  padding-top: 10%;
 }
 p.pset{
    font-family: 'Arima Madurai';font-size: 12px;
    font-weight: normal;

 }
 .inset {
    border-style: inset;
    border-color: #FFF1F1;
    height: 400px;
    font-family: 'Arima Madurai';font-size: 19px;
    font-weight: bold;
    
 } 
 div.between{
  width: 400px;
  
  padding-left: 3%;
    padding-right: 3%;
 }
 a.button {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
     width: 105px;
    height: 25px;
    background: #FFF;
    text-decoration: none;
    color: black;
}
</style>