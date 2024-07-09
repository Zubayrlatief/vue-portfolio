<template>
<section id="resume">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience</h1>
        <div class="about-containers">
          <div class="details-container">
            <div class="article-container" v-if="getExperience()">
              <article v-for="experience in getExperience()" :key="experience">
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
      <div class="card">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
</style>