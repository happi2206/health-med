<template>
  <div class="d-flex align-items-center ml-2" style="color: #a8dadc">
    <i
      class="pi pi-chevron-down"
      :class="{ down: isToggled, up: !isToggled }"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    isToggled: {
      default: false,
    },
  },
};
</script>

<style scoped>
.down {
  transform: rotate(0deg);
}
.up {
  transform: rotate(-90deg);
}
</style>