<template>
  <div class='carousel-view'>
    <br>
    <h2> Here are some books I've recently enjoyed</h2>
    <transition-group
      class='carousel'
      tag="div">
      <div
        v-for="slide in slides" 
        class='slide'
        :key="slide.id">
        <img :src="slide.title" rel="preload">  
      </div>
    </transition-group>
    <div class='carousel-controls'>
      <button class='carousel-controls__button' @click="previous">prev</button>
      <button class='carousel-controls__button' @click="next">next</button>
    </div>
  </div>
</template>
<script>
import book from './walkable.png';
import book2 from './master.jpg';
import book3 from './bike.jpg';
import book4 from './prize.jpg';
import book5 from './anti.jpg';

export default {
  data () {
    return {
      slides: [
        {
          title: book,
          id: 1
        },
        {
          title: book2,
          id: 2
        },
        {
          title: book3,
          id: 3
        },
        {
          title: book4,
          id: 4
        },
        {
          title: book5,
          id: 5
        }
      ]
    }
  },
  methods: {
    next () {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous () {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    }
  }
}
</script>
<style>
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
   padding-bottom: 2.5%;
   font-family: 'Arima Madurai';font-size: 18px;
   background: #FFF1F1;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  width: 24em;
  min-height: 25em;

}
.slide {
  flex: 0 0 20em;
  height: 20em;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1em dashed #000;
  border-radius: 100px 100px;
  background: #FFF;
  transition: transform 0.3s ease-in-out;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}
img {
  max-height: 220px;
  margin-left: auto;
  margin-right: auto;
}
</style>