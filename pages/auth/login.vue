<template >
  <div class="bg-white">
    <div class="d-flex flex-wrap bg-white w-100 justify-content-center">
      <div
        style="background: #161e40"
        class="vh-100 m-wit vw-100 col-4 text-center p-5"
      >
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
            <div class="d-flex justify-content-end push">
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
          <div class="h-50 mb-4 d-flex ye">
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
            <img
              class="img-fluid"
              src="~/assets/images/blackdoctor.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        style="background: #f5f6f7"
        class="
          text-16
          d-flex
          pt-0
          pb-3
          order-2
          col-8
          flex-column
          mx-lg-0 mx-auto
        "
      >
        <div class="w-50 pb-0 my-auto mx-auto">
          <div class="pb-0 text-start">
            <h4 class="font-weight-bolder text-32">Sign In</h4>
            <p class="mb-3 text-grey text-14">
              Enter your username and password to sign In
            </p>
          </div>
          <div class="">
            <ValidationObserver v-slot="{ validate }">
              <form role="form">
                <div class="mb-3">
                  <label class="text-12 text-grey">Username</label>
                  <validation-provider rules="required" v-slot="{ errors }">
                    <input
                      v-model="formDetail.username"
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Username"
                    />
                    <span class="text-12" style="color: red">{{
                      errors[0]
                    }}</span>
                  </validation-provider>
                </div>
                <div class="my-2">
                  <label for="" class="d-block text-14 graytext"
                    >Password</label
                  >
                  <validation-provider rules="required" v-slot="{ errors }">
                    <div class="d-flex">
                      <input
                        :type="password ? 'text' : 'password'"
                        v-model="formDetail.password"
                        required
                        style="min-height: 39px"
                        placeholder="**************"
                        class="form-control text-16"
                      />
                      <div @click.prevent="toggle">
                        <div
                          v-if="show"
                          class="
                            bg-white
                            d-flex
                            align-items-center
                            justify-content-center
                            transit
                          "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            class="bi bi-eye"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                            />
                            <path
                              d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                            />
                          </svg>
                        </div>
                        <div
                          v-else
                          class="
                            bg-white
                            d-flex
                            align-items-center
                            justify-content-center
                            transit
                          "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            class="bi bi-eye-slash"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
                            />
                            <path
                              d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
                            />
                            <path
                              d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <span class="text-12" style="color: red">{{
                      errors[0]
                    }}</span>
                  </validation-provider>

                  <div
                    type="button"
                    ref="runValidation"
                    id="runValidation"
                    @click="validate"
                  ></div>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label class="form-check-label" for="rememberMe"
                    >Remember me</label
                  >
                </div>
                <div class="text-center">
                  <button
                    @click.prevent="Authentication"
                    type="button"
                    class="btn btn-primary text-16 w-100 mt-4 mb-3"
                  >
                    <span v-if="isbusy">
                      <b-spinner
                        label="loading"
                        variant="primary"
                        style="width: 1.5rem; height: 1.5rem"
                        class="text-center"
                      >
                      </b-spinner>
                    </span>
                    <span v-else>Sign in</span>
                  </button>
                </div>

                <div
                  type="button"
                  ref="runValidation"
                  id="runValidation"
                  @click="validate"
                ></div>
              </form>
            </ValidationObserver>
          </div>

          <!-- <div class="text-center pt-0 px-lg-2 px-1">
            <p class="mb-4 text-sm mx-auto">
              Don't have an account?

              <NuxtLink
                to="/patient-registeration/patient-records"
                class="text-primary text-gradient font-weight-bold"
                style="cursor: pointer"
                >Sign up</NuxtLink
              >
            </p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      show: false,
      password: false,
      isbusy: false,
      formDetail: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      Authentication: "loginUser",
    }),
    toggle() {
      this.show = !this.show;
      this.password = !this.password;
    },
    async Authentication() {
      if (this.$refs.runValidation) {
        this.$refs.runValidation.click();
      }

      try {
        this.isbusy = true;
        await this.$store.dispatch("loginUser", this.formDetail);
      } catch (error) {
        ("yay");
      } finally {
        this.isbusy = false;
        if (this.$store.getters.token) {
          this.$router.push("/patient-registeration");
        } else {
          this.$router.push("/auth/login");
        }
      }
    },
  },
};
</script>

<style scoped>
.transit {
  display: flex;
  background: #fff;
  height: 39px;
  width: 45px;
  border-radius: 0;
  position: relative;
  right: 0px;
  cursor: pointer;
}
.col-8 {
  flex: 0 0 66.666667%;
  max-width: 66.6633%;
}
.fullheight {
  /* min-height: 100vh; */
}
.custom-background {
  /* background-image: url("~assets/images/blackdoctor.jpg");
  background-size: cover; */
  /* min-height: 100vh; */
}
.col-4 {
  flex: 0 0 33.333333%;
  /* max-width: 33.333333%; */
}
.img-fluid {
  width: 70%;
  max-height: 15rem;
  min-height: 10rem;
  border-radius: 8px;
  border: 4px solid #e7e8eb;
}
.form-control {
  background: #e8f0fe;
  border: 1px solid #e7e8eb;
  border-radius: 4px;
  color: #40484f;
  font-size: 14px;
  line-height: 100%;
}
/* .form-control {
  background: #fff;
  border: 1px solid #e7e8eb;
  border-radius: 4px;
  color: #40484f;
  font-size: 14px;
  line-height: 100%;
} */
.card-footer {
  padding: 0.75rem 1.25rem;
  /* background-color: rgba(0, 0, 0, 0.03); */
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.hit {
  min-height: 100vh;
}
.m-wit {
  min-width: 300px;
}
@media screen and (max-width: 900px) {
  .order-2 {
    order: 1;
  }
  .w-50 {
    width: 75% !important;
  }
  .col-8 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .pt-0 {
    padding-top: 3rem;
  }
  .pb-0 {
    padding-bottom: 3rem;
  }
  .ml-auto,
  .mx-auto {
    /* margin-left: auto !important; */
  }
  .mr-auto,
  .mx-auto {
    /* margin-right: auto !important; */
  }
  .mr-aut0,
  .mx-auto {
    /* margin-right: auto !important; */
    padding-top: 3rem;
  }
  .push {
    margin-right: 4rem;
  }
  .ye {
    margin-left: 4rem;
  }
  .img-fluid {
    max-width: 10rem;
    max-height: 10rem;
    min-height: 5rem;
    border-radius: 8px;
    border: 4px solid #e7e8eb;
  }
  .m-wit {
    min-width: 100%;
  }
  .vh-100 {
    min-height: 105vh;
  }
}
@media screen and (max-width: 760px) {
  .vh-100 {
    height: 80vh !important;
  }
  .p-5 {
    padding: 2rem !important;
  }
  .mt-0 {
    margin-bottom: 1rem;
  }
  .col-4 {
    flex: 0 0 33.333333%;
    max-width: 100%;
  }

  .col-4 {
    /* flex: 0 0 33.333333%; */
    /* max-width: 33.333333%; */
  }
}
</style>