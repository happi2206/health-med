<template>
  <div class="">
    <navbar />
    <topmenu />
    <sidebar />
    <Transition name="slide-fade">
      <p v-if="toggle">nnbn</p>
      <main class="site-container height">
        <Nuxt />
      </main>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
    };
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 5s ease-out;
}

.slide-fade-enter,
.slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>