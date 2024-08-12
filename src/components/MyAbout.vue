<template>
  <section class="section"> 
    <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
    <div class="container">
        <img src="https://zubayrlatief.github.io/hosted-images/beachpicwithsurfboard.jpg" alt="Profile picture"
          class="about-pic" />
          <div class="details-container">

            <h3>A little bit about me</h3>
            <p>{{ $store.state.aboutMe }}</p>

        </div>
      </div>

  </section>
</template>
<script>
export default {
  computed: {
    getAboutMe() {
      return this.$store.dispatch('getAboutMe')
    }
  },
  mounted() {
    this.getAboutMe
  },
}
</script>
<style scoped>
.section{
  background-color: rgb(149, 142, 142);
 
}
.container{
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: row;
}
</style>