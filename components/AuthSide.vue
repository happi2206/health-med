<template>
  <div
    class="
      col-6
      d-lg-flex d-none
      h-100
      text-center
      justify-content-center
      flex-column
    "
  >
    <div
      class="
        position-relative
        custom-background
        bg-gradient-primary
        h-100
        p-1
        px-7
        border-radius-lg
        d-flex
        flex-column
        justify-content-center
        overflow-hidden
        h-100
      "
    >
      <span class="mask bg-gradient-primary opacity-6"></span>
      <!-- <h4 class="mt-5 text-black font-weight-bolder position-relative">
        Chat with anyone
      </h4>
      <p class="text-black position-relative">The most intuitive chat app</p> -->
      <img class="img-fluid" src="~/assets/images/blackdoctor.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.custom-background {
  /* background-image: url("~assets/images/blackdoctor.jpg");
  background-size: cover; */
  min-height: 100vh;
}
.img-fluid {
  max-width: 98%;
  height: 98.5vh;
  border-radius: 3px;
}
</style>