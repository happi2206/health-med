<template>
  <div></div>
</template>

<script>
export default {
  name: "IndexPage",
  middleware: "login",
  created() {
    this.$router.push(`/patient-registeration`);
  },
};
</script>
