<template>
  <div v-if="active" class="" role="" aria-labelledby="pills-class-board-tab">
    <!-- <h1>Hello Tabs</h1>
    <h1>Hello Tabs</h1>

    <h1>Hello Tabs</h1>

    <h1>Hello Tabs</h1> -->

    <slot>
      <h1>Hello Tabs</h1>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped></style>
