<template>
  <section id="testimonials">
  <div class="row">
  <div class="col-md-4" v-for="testimonials in $store.state.testimonials" :key="testimonials.name">
    <div class="card">
      <div class="card-body">
        <img :src="testimonials.image" class="card-img">
        <h5 class="card-title">{{ testimonials.name }}</h5>
        <h6 class="card-title-1">{{ testimonials.role }}</h6>
        <p class="card-text">{{ testimonials.comment }}</p>
        <p></p>
      </div>
    </div>
  </div>
  </div>
</section>
</template>
<script>
export default {
  computed :{
      getTestimonials(){
        return this.$store.dispatch('getTestimonials')
      }
    },
    mounted(){
      this.Testimonials
    },
}
</script>
<style>
    .card-img{
      width: 10px;
      justify-content: center;
    }
    .card-title-1{
      text-align: center;
    }
</style>