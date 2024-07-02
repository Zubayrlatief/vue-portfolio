<template>
 <div>
 <NavBar/>
 <MyHome/>
 <AboutMe/>
 <MyResume/>
 <MyProjects/>
 <MyTestimonials/>
 <ContactMe/>
 <MyFooter/>
 <router-view/>

 </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import MyFooter from './components/MyFooter.vue'
import MyHome from './components/MyHome.vue'
import MyAbout from './components/MyAbout.vue'
import MyResume from './components/MyResume.vue'
import MyProjects from './components/MyProjects.vue'
import MyTestimonials from './components/MyTestimonials.vue'
import ContactMe from './components/ContanctMe.vue'
export default {
  components:{}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
