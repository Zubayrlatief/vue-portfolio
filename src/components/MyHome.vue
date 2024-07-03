<template>
<section class="firstSection" id="home">
    <div class="rowFirst">
      <div class="colFirst">
        <h1>HI</h1>
        <h3>I am Zubayr Abdullatief</h3>
        <p>Aspiring Software Developer.</p>
      </div>
      <div class="colFirst">
        <img src="https://zubayrlatief.github.io/portfolio_hostedImages/beach.jpg" class="shadow-pop-tr" alt="porfolio"
          id="smile">
      </div>
    </div>
  </section>
</template>
<script>
export default {
    
}
</script>
<style>
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
</style>