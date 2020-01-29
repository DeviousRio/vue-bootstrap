<template>
  <div class="aboutus-section">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="aboutus">
            <h2 class="aboutus-title">About Us</h2>
            <p
              class="aboutus-text"
            >Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
            <p
              class="aboutus-text"
            >This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="aboutus-banner">
            <img src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg" alt />
          </div>
        </div>
        <div class="col-md-5 col-sm-6 col-xs-12">
          <div class="feature">
            <div class="feature-box">
              <div class="clearfix">
                <div class="feature-content">
                  <h4>Work with heart</h4>
                  <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                </div>
              </div>
            </div>
            <div class="feature-box">
              <div class="clearfix">
                <div class="feature-content">
                  <h4>Reliable services</h4>
                  <p>Donec vitae sapien ut libero venenatis faucibu. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt</p>
                </div>
              </div>
            </div>
            <div class="feature-box">
              <div class="clearfix">
                <div class="feature-content">
                  <h4>Great support</h4>
                  <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.aboutus-section {
  padding: 4em 0 0 0;
  display: flex;
  justify-content: center;
}
.aboutus-title {
  font-size: 30px;
  letter-spacing: 0;
  line-height: 32px;
  margin: 0 0 39px;
  padding: 0 0 11px;
  position: relative;
  text-transform: uppercase;
  color: #000;
}
.aboutus-title::after {
  background: #fdb801 none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  width: 150px;
}
.aboutus-text {
  color: #606060;
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 35px;
}

a:hover,
a:active {
  color: #ffb901;
  text-decoration: none;
  outline: 0;
}
.aboutus-more {
  border: 1px solid #fdb801;
  border-radius: 25px;
  color: #fdb801;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  padding: 7px 20px;
  text-transform: uppercase;
}

.feature {
  margin-left: 5em;
}

.feature .feature-box .feature-content h4 {
  color: #0f0f0f;
  font-size: 26px;
  letter-spacing: 0;
  line-height: 22px;
  margin: 0 0 5px;
}

.feature .feature-box .feature-content {
  float: left;
  width: 78%;
}

.feature .feature-box .feature-content p {
  color: #606060;
  font-size: 16px;
  line-height: 22px;
  padding-top: 1em;
}
</style>