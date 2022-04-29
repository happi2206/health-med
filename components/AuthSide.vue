<template>
  <div>
    <div style="background: #161e40" class="vh-100 col-4 text-center p-5">
      <div
        class="
          position-relative
          custom-background
          border-radius-lg
          d-flex
          flex-wrap flex-column
        "
      >
        <div class="h-50 mb-4">
          <div class="d-flex justify-content-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              fill="#fff"
              class="bi bi-heart-pulse"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Zm8.252-6.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z"
              />
            </svg>
          </div>
        </div>
        <div class="h-50 mb-4 d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="#fff"
            class="bi bi-people-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
            <path
              fill-rule="evenodd"
              d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
            />
            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
          </svg>
        </div>
        <div class="h-50 mt-3">
          <img class="img-fluid" src="~/assets/images/blackdoctor.jpg" alt="" />
        </div>
      </div>
    </div>

    <div
      style="background: #e7e8eb"
      class="text-16 d-flex col-8 flex-column mx-lg-0 mx-auto"
    >
      <div class="w-50 my-auto mx-auto">
        <div class="pb-0 text-start">
          <h4 class="font-weight-bolder text-32">Sign In</h4>
          <p class="mb-2">Enter your email and password to sign In</p>
        </div>
        <div class="">
          <form role="form">
            <div class="mb-3">
              <input
                type="email"
                class="form-control form-control-lg"
                placeholder="Email"
                aria-label="Email"
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control form-control-lg"
                placeholder="Password"
                aria-label="Password"
              />
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="rememberMe" />
              <label class="form-check-label" for="rememberMe"
                >Remember me</label
              >
            </div>
            <div class="text-center">
              <button
                type="button"
                class="btn btn-lg btn-primary btn-lg mt-4 mb-0"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div class="card-footer text-center pt-0 px-lg-2 px-1">
          <p class="mb-4 text-sm mx-auto">
            Don't have an account?

            <NuxtLink
              to="/patient-registeration/patient-records"
              class="text-primary text-gradient font-weight-bold"
              style="cursor: pointer"
              >Sign up</NuxtLink
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>