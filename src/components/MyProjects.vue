<template>

      <div id="projects" class="col">
        <h1 class="text-center" id="whatsupbrother">My Projects</h1>
        <div class="row d-flex justify-content-evenly flex-wrap" v-for="project in $store.state.projects" :key="project.name">
          <div class="col" >
            <div class="card text-center">
              <a href="https://keyboard1.vercel.app/">
                <img :src="project.image"  class="card-img-top" alt="...">
              </a>
              <div class="card-body">
                <h5 class="card-title">{{ project.name }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <a :href="project.github" target="_blank" class="btn btn-primary">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a :href="project.vercel" target="_blank" class="btn btn-primary">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> 
    
  </template>
  
  <script>
  export default {
    
  }
  </script>
  <style scoped>
  #whatsupbrother{
   padding-bottom: 120px;
}
#whatsupbrother2{
   padding-bottom: 70px;
}
.card-img-top{
   block-size: 300px;
}
  </style>
