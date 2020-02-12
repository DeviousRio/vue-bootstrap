<template>
 <div class="container mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="mt-4">Let's Get In Touch!</h2>
          <hr class="divider my-4">
          <p class="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
        </div>
      </div>
      <div class="row mb-5 mt-4">
        <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
          <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
          <h3>Talk to Sales</h3>
          <h5>Interested in software? Just pick up the phone to chat with a member of our sales team.</h5>
          <div class="text-primary mt-5">+359 555 444 333 222</div>
        </div>

        <div class="col-lg-4 mr-auto text-center">
          <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
          <h3>Contact a specialist</h3>
          <h5>Wondering if VueBootstrap is the right tool for your business? Chat with our team to see if there’s a fit.</h5>
          <!-- Make sure to change the email address in anchor text AND the link below! -->
          <div class="text-primary mt-5">contact@yourwebsite.com</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
  .fa-phone:before,
  .fa-envelope:before {
    color: #0056B3;
  }

  div {
    font-size: 20px;
  }

  div p {
    font-size: 25px;
  }
</style>