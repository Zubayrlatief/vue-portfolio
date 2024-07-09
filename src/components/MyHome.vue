<template>
<section id="profile">
      <div class="section__pic-container">
        <img src="https://zubayrlatief.github.io/portfolio_hostedImages/myportfolioimg.jpg" alt="profile picture" loading="lazy">
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Zubayr</h1>
        <p class="section__text__p2">Full Stack Developer</p>
        <div class="btn-container">
         <a href="https://drive.google.com/file/d/1RPOeg9DLwZba40diTmlw1QJc3GfAFHKr/view?usp=sharing" target="_blank">
         <button class="btn btn-color-2">
             Download CV
          </button>
          </a>
          <button class="btn btn-color-1" href="#contact">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <a href="https://za.linkedin.com/in/zubayr-latief-254805280" target="_blank"><img
            src="https://zubayrlatief.github.io/portfolio_hostedImages/icons8-linkedin-120.png" 
            alt="LinkedIn profile"
            class="icon"
          /></a>
          <a href="https://github.com/Zubayrlatief" target="_blank"><img
            src="https://zubayrlatief.github.io/portfolio_hostedImages/icons8-github-120.png"
            alt="Github profile"
            class="icon"
          /></a> 
        </div>
      </div>
    </section>

</template>
<script>
export default {
    
}
</script>

<style>
#profile {
  background: grey;
  display: flex;
  justify-content: center;
  gap: 5rem;
  height: 60vh;
}

.section__pic-container {
  display: flex;
  height: 500px;
  width: 500px;
  margin: auto 0;
}

.section__text {
  align-self: center;
  text-align: center;
}

.section__text p {
  font-weight: 600;
}

.section__text__p1 {
  text-align: center;
}

.section__text__p2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.title {
  font-size: 3rem;
  text-align: center;
}

#socials-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
}

/* ICONS */

.icon {
  cursor: pointer;
  height: 2rem;
}

/* BUTTONS */

.btn-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  font-weight: 600;
  transition: all 300ms ease;
  padding: 1rem;
  width: 8rem;
  border-radius: 2rem;
}

.btn-color-1,
.btn-color-2 {
  border: rgb(53, 53, 53) 0.1rem solid;
}

.btn-color-1:hover,
.btn-color-2:hover {
  cursor: pointer;
}

.btn-color-1,
.btn-color-2:hover {
  background: rgb(53, 53, 53);
  color: white;
}

.btn-color-1:hover {
  background: rgb(0, 0, 0);
}

.btn-color-2 {
  background: none;
}

.btn-color-2:hover {
  border: rgb(255, 255, 255) 0.1rem solid;
}

.btn-container {
  gap: 1rem;
}

</style>