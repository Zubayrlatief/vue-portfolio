<template>
 <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container" v-for="project in $store.state.projects" :key="project.name">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                :src="project.image"
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">{{ project.name }}</h2>
            <div class="btn-container">
              <a :href="project.github" target="blank" rel="noopener noreferrer">
              <button
                class="btn btn-color-2 project-btn">
                Github
              </button>
            </a>
            <a :href="project.vercel" target="_blank" rel="noopener noreferrer">
                <button class="btn btn-color-2 project-btn">
              Live Demo
             </button>
            </a>
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
  <style scoped>
  #projects {
  position: relative;
}
.details-container{
  background-color: grey;
}

.color-container {
  border-color: grey;
  background: grey;
}

.project-img {
  border-radius: 2rem;
  width: 90%;
  height: 90%;
}

.project-title {
  margin: 1rem;
  color: black;
  text-align: center;
}

.project-btn {
  color: black;
  border-color: grey;
}
.article-container{
   background-color: grey;
}
.details-container {
  background-color: grey!important;
}

.color-container {
  border-color: grey;
  background: grey!important;
}

.article-container {
  background-color: grey!important;
}
  </style>
