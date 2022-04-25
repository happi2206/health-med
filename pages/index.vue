<template>
  <div></div>
</template>

<script>
export default {
  name: "IndexPage",
  created() {
    this.$router.push(`/auth/login`);
  },
};
</script>
