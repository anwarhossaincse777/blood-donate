

<script setup>

</script>


<template>
    <section class="ftco-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center mb-5">
                    <h2 class="heading-section">Login</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-10">
                    <div class="wrap d-md-flex">
                        <div
                            class="img"
                            style="background-image: url(img/bg-1.jpg)"
                        ></div>
                        <div class="login-wrap p-4 p-md-5">
                            <div class="d-flex">
                                <div class="w-100">
                                    <h3 class="mb-4">Sign In</h3>
                                </div>
                                <div class="w-100">
                                    <p class="social-media d-flex justify-content-end">
                                        <a
                                            href="#"
                                            class="social-icon d-flex align-items-center justify-content-center"
                                        ><span class="fa fa-facebook"></span
                                        ></a>
                                        <a
                                            href="#"
                                            class="social-icon d-flex align-items-center justify-content-center"
                                        ><span class="fa fa-twitter"></span
                                        ></a>
                                    </p>
                                </div>
                            </div>
                            <form id="form" action="#" class="signin-form">
                                <div class="inputBox">
                                    <div class="form-group mb-3">
                                        <label class="label" for="name">Full Name</label>
                                        <input
                                            type="text"
                                            id="email"
                                            class="form-control"
                                            placeholder="Full Name"
                                        />
                                    </div>
                                </div>
                                <div class="inputBox">
                                    <div class="form-group mb-3">
                                        <label class="label" for="name">Email Address</label>
                                        <input
                                            type="text"
                                            id="email"
                                            class="form-control"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="password">Password</label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="password">Confirm Password</label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        placeholder="Confirm Password"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <button
                                        type="submit"
                                        class="form-control btn btn-primary rounded submit px-3"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </form>
                            <p class="text-center m-4">
                                As a member?
                                <a data-toggle="tab" href="login.html">Log In</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<style scoped>

</style>
