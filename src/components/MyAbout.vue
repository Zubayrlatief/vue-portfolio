<template lang="">
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
        <div class="section__pic-container">
          <img
            src="https://zubayrlatief.github.io/portfolio_hostedImages/beachpicwithsurfboard.jpg"
            alt="Profile picture"
            class="about-pic"
          />
        </div>
          <div class="about-containers">
            <div class="details-container">
            
              <h3>A little bit about me</h3>
              <p>{{$store.state.aboutMe}}</p>
            
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
#about {
  position: relative;
}

.about-containers {
  gap: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.about-details-container {
  justify-content: center;
  flex-direction: column;
}

.about-containers,
.about-details-container {
  display: flex;
}

.about-pic {
  border-radius: 2rem;
}

.arrow {
  position: absolute;
  right: -5rem;
  bottom: 2.5rem;
}

.details-container {
  padding: 1.5rem;
  flex: 1;
  background: white;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  text-align: center;
}

.section-container {
  gap: 4rem;
  height: 80%;
}

.section__pic-container {
  height: 400px;
  width: 400px;
  margin: auto 0;
}

/* EXPERIENCE SECTION */

#experience {
  position: relative;
}

.experience-sub-title {
  color: rgb(85, 85, 85);
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 2rem;
}

.experience-details-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.article-container {
  display: flex;
  text-align: initial;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2.5rem;
  justify-content: space-around;
}

article {
  display: flex;
  width: 10rem;
  justify-content: space-around;
  gap: 0.5rem;
}

article .icon {
  cursor: default;
}
    
</style>