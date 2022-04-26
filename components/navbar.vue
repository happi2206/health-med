<template>
  <div class="navigation text-white">
    <div class="d-flex theme-color align-items-center justify-content-between">
      <div class="hospital-logo p-3 text-18">St Mary</div>
      <div>
        <svg
          data-v-477b4466=""
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            data-v-477b4466=""
            d="M15.0007 27.5C16.3757 27.5 17.5007 26.375 17.5007 25H12.5007C12.5007 25.663 12.7641 26.2989 13.2329 26.7678C13.7017 27.2366 14.3376 27.5 15.0007 27.5ZM22.5007 20V13.75C22.5007 9.9125 20.4507 6.7 16.8757 5.85V5C16.8757 3.9625 16.0382 3.125 15.0007 3.125C13.9632 3.125 13.1257 3.9625 13.1257 5V5.85C9.53817 6.7 7.50067 9.9 7.50067 13.75V20L5.88817 21.6125C5.10067 22.4 5.65067 23.75 6.76317 23.75H23.2257C24.3382 23.75 24.9007 22.4 24.1132 21.6125L22.5007 20Z"
            fill="white"
          ></path>
          <circle
            data-v-477b4466=""
            cx="23"
            cy="9"
            r="4"
            fill="#1070B7"
          ></circle>
        </svg>
        <b-dropdown
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          class="p-0 menudropdown"
          no-caret
        >
          <template #button-content>
            <div class="d-flex align-items-center">
              <div class="d-lg-block">
                <b-avatar variant="primary" class="mr-1"></b-avatar>
              </div>
            </div>
          </template>
          <b-dropdown-item href="#" class="items text-14">
            <nuxt-link to="/" class="text-dark"> Sign Out </nuxt-link>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>