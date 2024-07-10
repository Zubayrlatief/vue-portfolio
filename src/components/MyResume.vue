<template>
<section id="resume">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience</h1>
        <div class="about-containers">
          <div class="details-container">
            <div class="article-container" v-if="getExperience()">
              <article v-for="experience in $store.state.experience" :key="experience.placeOfInstitution">
                <img
                   :src="experience.image"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>{{ experience.placeOfInstitution }}</h3>
                  <p>{{ experience.description }}</p>
                </div>
              </article>
        </div>
        </div>
      </div>
  <div class="row-sm-10">
  <div class="row-sm-10">
<div class="card-deck w-100" v-for="codingSkills in $store.state.codingSkills" :key="codingSkills.name">
  <div class="card">
    <img class="card-img-top d-flex" :src="codingSkills.image" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ codingSkills.name }}</h5>
      <p class="card-text">{{ codingSkills.ability }}</p>
    </div>
  </div>
  </div>
</div>
</div>
    </section>
</template>

<script>
export default {
  methods: {
    getExperience() {
      this.$store.state.codingSkills;
    }
  },
  computed:{
    getData(){
      return this.$store.dispatch('getAboutMe')
    }
  },
  mounted() {
      this.getData
    },
}
</script>
<style>
#resume {
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
.card{
  width: 400px;
  background-color: grey;
}
.card-img-top{
  width: 500px;
  height: 600px;
  justify-content: center;

}
.card-title{
  justify-content: center;
  text-align: center;
}
.card-text{
  justify-content: center;
  text-align: center;
}
.card-deck{
  background-color: grey;
}
</style>