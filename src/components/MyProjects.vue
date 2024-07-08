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
              <button
                class="btn btn-color-2 project-btn"
                :href="project.github"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                :href="project.vercel"
              >
                Live Demo
              </button>
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

.color-container {
  border-color: rgb(163, 163, 163);
  background: rgb(250, 250, 250);
}

.project-img {
  border-radius: 2rem;
  width: 90%;
  height: 90%;
}

.project-title {
  margin: 1rem;
  color: black;
}

.project-btn {
  color: black;
  border-color: rgb(163, 163, 163);
}

  </style>
