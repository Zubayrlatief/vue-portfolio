<template lang="">
   <section id="mail">
    <h2 class="text-center" id="whatsupbrother2">Contact Me</h2>
    <div class="row d-flex justify-content-center flex-wrap">
      <div class="col d-flex justify-content-center">
        <form action="https://formspree.io/f/maygaowg" target="_blank" method="post">
          <div class="contact-form p-1">
            <input class="border border-black" type="text" placeholder="Enter your Name" required id="FirstName"
              name="FirstName">
          </div>
          <div class="contact-form p-1">
            <input class="border border-black" type="text" placeholder="Enter your Surname" required id="SurName"
              name="SurName">
          </div>
          <div class="contact-form p-1">
            <input class="border border-black" type="email" placeholder="Enter your Email Adress" required id="emailAdd"
              name="emailAdd">
          </div>
          <div class="contact-form p-1">
            <textarea class="border border-black" name="message" id="message"
              placeholder="Please Enter Your Message"></textarea>
          </div>
          <div>
            <button class="btn btn-secondary ms-5" type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div class="col">
        <h4 class="text-center p-1"><i class="fa-solid fa-location-dot"> Crawford, Cape Town</i></h4>
        <h4 class="text-center p-1"><i class="fa-solid fa-phone"> 068 507 0088</i></h4>
        <h4 class="text-center p-1"><i class="fa-solid fa-envelope"></i> zubayrlatie007@gmail.com</h4>
      </div>
    </div>

  </section>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>