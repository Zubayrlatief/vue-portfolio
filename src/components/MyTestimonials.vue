<template>
<section id="testimonials" class="container-fluid">
    <h2 class="text-center" id="whatsupbrother2">TESTIMONIALS</h2>
    <div class="d-flex justify-content-evenly flex-wrap"  v-for="testimonials in $store.state.testimonials" :key="testimonials.name">
      <div class="col m-2" >
        <div class="card">
          <img :src="testimonials.image" class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h4>{{ testimonials.name }}</h4>
            <h6>{{ testimonials.role }}</h6>
            <p class="card-text">{{ testimonials.comment }}
            </p>
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
<style lang="">
    
</style>