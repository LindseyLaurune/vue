<template>
    <div>
      <Carousel/>
      <Form/>
    </div>
</template>
<script>
  import Carousel from './Carousel'
  import Form from './form'

  export default {
    name: 'About',
    components: {
      Carousel,
      Form
    }
}

</script>

<style>
carousel{
    padding: 3%;
    background: #FFF1F1;


}

</style>