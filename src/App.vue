<template>
 <div>
 <NavBar/>
 <MyHome/>
 <MyAbout/>
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
  components:{
    NavBar,
    MyFooter,
    MyHome,
    MyAbout,
    MyProjects,
    MyResume,
    MyTestimonials,
    ContactMe,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 #home, #about, #projects, #testimonials, #resume, #contact  {
   background-color: grey;
   overflow-x: hidden;
   font-family: "Roboto Slab", serif;
 }
 #footer{

 }
 section{
    width: 100%;
    padding: 80px 12%;
 }
 
</style>
