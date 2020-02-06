<template>
<div class="container">
    <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
                <div class="card-body">
                <h5 class="card-title text-center">Sign In</h5>
                    <form class="form-signin">
                        <div class="form-label-group">
                            <!-- <label for="inputEmail">Email address</label> -->
                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                        </div>

                        <div class="form-label-group">
                            <!-- <label for="inputPassword" class="ml-1">Password</label> -->
                            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                        </div>

                        <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label ml-1" for="customCheck1">Remember password</label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

};
</script>

<style scoped>
.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  color: #636363;
  background: #f2f3f7;
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
  position: relative;
}

.card-signin .card-title:before,
.card-signin .card-title:after {
  content: "";
  height: 2px;
  width: 30%;
  background: #d4d4d4;
  position: absolute;
  top: 50%;
  z-index: 2;
}

.card-signin .card-title:before {
  left: 0;
}

.card-signin .card-title:after {
  right: 0;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
  background: #5cb85c;
  border: none;
  margin-top: 2em;
}

.form-signin .btn:hover {
  background: #28a745;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  height: auto;
  border-radius: 2rem;
}

.form-label-group > input,
.form-label-group > label {
  padding: 0.5em;
}
</style>