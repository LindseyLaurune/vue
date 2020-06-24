<template>
    <div>
        <!-- lander section -->
        <section class="pic">
              <img alt="logo" class="rounded" src="./../assets/logo.jpeg" style="width:100%;max-width:400px">
        </section>
        <section class="greet">
              <h2 class="is-size-2 has-text-weight-medium">Hi I'm Lindsey. Nice to meet you.</h2>
        </section>
        <section class="section">
            <div class="container-fliud">
                
                <p>I'm an Electrical Engineer turned Software Engineer. I realized over the years that what</p>
                <p>I love the most about engineering is designing for people. Designing for people requires me</p>
                <p>to take a step back from my own needs and experiences, and identify what different users </p>
                <p>might require from a design. With all the modern software tools out there, I found writing</p>
                <p>code to be the most powerful way to create designs that people interact with.</p>
                <br>
                <p>In my free time I enjoy being outdoors, biking, running, and reading books. On this site </p>
                <p>you can find some code I've written, as well as some books I've recently read. Enjoy!</p>
                
            </div>
        </section>
        <footer class="footer">
            <div class="content has-text-centered">
              <p>
                Built using Vue.js and Bootstrap
              </p>
              <p>Updated June 2020</p>
            </div>
      </footer>
    </div>


</template>

<script>
export default {
  name: 'lander',
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.pic,.greet{
  padding-top: .9%;
        padding-bottom: .5%;
        font-family: 'Arima Madurai';font-size: 17px;
        background: #FFF1F1;
        align-items: center;

}
.section{
      
        font-family: 'Arima Madurai';font-size: 14px;
        background: #FFF1F1;
        padding-bottom: 1%;
}
footer{
font-family: 'Arima Madurai';font-size: 12px;
 position: relative;
 bottom: 0;
 width: 100%;
 padding-top: 1.9%;
 flex-direction: column;
 
}
.tab{
  padding-left: .5%;
}
</style>