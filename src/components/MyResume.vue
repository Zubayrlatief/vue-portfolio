<template lang="">

  <section id="resume">
 <div class="card mb-3" style="max-width: 540px;">
  <div v-for="education in $store.state.education" :key="education.placeOfInstitution" class="row g-0">
    <div class="col-md-4">
      <img :src="education.image" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ education.placeOfInstitution }}</h5>
        <p class="card-text">{{ education.description }}</p>
        <p class="card-text">{{ education.year }}</p>
      </div>
    </div>
  </div>
</div>
</section>

<section id="resume">
  <div class="card mb-3" style="max-width: 540px;">
  <div v-for="experience in $store.state.experience" :key="experience.placeOfInstitution" class="row g-0">
    <div class="col-md-4">
      <img :src="experience.image" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ experience.placeOfInstitution }}</h5>
        <p class="card-text">{{ experience.description }}</p>
        <p class="card-text">{{ experience.year }}</p>
      </div>
    </div>
  </div>
</div>
</section>

  <section id="resume">
  <div class="card mb-3" style="max-width: 540px;">
  <div v-for="softSkills in $store.state.softSkills" :key="softSkills.name" class="row g-0">
    <div class="col-md-4">
      <img :src="softSkills.image" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ softSkills.name }}</h5>
        <p class="card-text">{{ softSkills.description }}</p>
      </div>
    </div>
  </div>
</div>
</section>

  <section id="resume">
  <div class="card mb-3" style="max-width: 540px;">
  <div v-for="codingSkills in $store.state.codingSkills" :key="codingSkills.name" class="row g-0">
    <div class="col-md-4">
      <img :src="codingSkills.image" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ codingSkills.name }}</h5>
        <p class="card-text">{{ codingSkills.ability }}</p>
        <p class="card-text">{{ codingSkills.year }}</p>
      </div>
    </div>
  </div>
</div>
</section>
</template>

<script>
export default {
  
}
</script>
<style lang="">
    
</style>