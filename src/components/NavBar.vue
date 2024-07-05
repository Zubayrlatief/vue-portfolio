<template lang="">
   
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#home">
        <img class="img-fluid w-50 h-50" src="https://iili.io/J4WBofp.jpg">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" href="#home">HOME</a>
          <a class="nav-link" href="#about">ABOUT ME</a>
          <a class="nav-link" href="#resume">RESUME</a>
          <a class="nav-link" href="#projects">PROJECTS</a>
          <a class="nav-link" href="#testimonials">TESTIMONIALS</a>
          <a class="nav-link" href="#mail">CONTACT ME</a>
        <a class="btn btn-primary" href="https://drive.google.com/file/d/1RPOeg9DLwZba40diTmlw1QJc3GfAFHKr/view?usp=sharing" role="button">MY CV</a> 
        </div>
      </div>
    </div>
  </nav>

</template>
<script>
export default {
    
}
</script>
<style scoped>
    .rowFirst{
   display: flex;
   flex-direction: row;
   justify-content: center;
   flex-wrap: wrap;
   align-items: center;
   padding-top: 40px;
   padding-bottom: 40px;
}
.colFirst{
   flex-basis: 50%;
}
.aboutText{
   margin-top: 10%;
}
#smile{
   margin-left: 150px;
   width: 400px;
   height: 530px;
}
</style>