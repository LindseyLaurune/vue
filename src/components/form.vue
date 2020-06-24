<template>
<div class="whole">
  <div class="title">
    <h3> Recommend me a book :)</h3>
  </div>
  <form @submit="checkForm">
      <div class = "group">
      <div class="col-xs-4 col-lg-offset-4">
        <label for="ex2">Title</label>
        <input class="form-control" id="ex2" type="text">
          <label for="ex2">Author</label>
        <input class="form-control" id="ex2" type="text">
        <br>
        <label for="ex2">Your name (or stay anonymous) </label>
        <input class="form-control" id="ex2" type="text">
        <br>
        <input type="submit" value="Submit">
      </div>
      </div>
  </form>
</div>

</template>
<script>
export default{
  checkForm()
  {

  }

}

</script>
<style>
.group label{
  font-family: 'Arima Madurai';font-size: 17px;
}
h3{
  font-family: 'Arima Madurai';font-size: 17px;
  padding-bottom: 2%;
  padding-top: 3%;
}
input[type=submit]{
    font-family: 'Arima Madurai';font-size: 12px;
}


</style>
