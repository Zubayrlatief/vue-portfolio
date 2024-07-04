<template lang="">
   <section class="secondSection" id="about">
    <div class="container-fluid">
      <h2 class="textAbout d-flex justify-content-center">About Me</h2>
      </div>
      <div class="row d-flex justify-content-evenly flex-wrap">
        <div class="col d-flex justify-content-center">
          <img src="https://iili.io/J46fQsf.md.jpg" class="shadow-pop-bl w-65 h-75" loading="lazy" alt="about1">
        </div>
        <div class="col">
          <p class="aboutText">{{$store.state.aboutMe}}</p>
        </div>
      </div>
  </section>
</template>
<script>
export default {
    computed :{
      getAboutMe(){
        return this.$store.dispatch('getAboutMe')
      }
    },
    mounted(){
      this.getAboutMe
    },
}
</script>
<style scoped>
.aboutText{
   margin-top: 10%;
}
#smile{
   margin-left: 150px;
   width: 400px;
   height: 530px;
}
.textAbout{
   margin-bottom: 5%;
}
    
</style>