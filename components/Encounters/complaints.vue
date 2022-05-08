<template>
  <div>
    <label class="text-grey text-16">Chief Complaints</label>
    <br />
    <div>
      <textarea
        class="form-control ng-untouched ng-pristine ng-valid"
        cols="40"
        rows="10"
      ></textarea>
    </div>

    <div
      style="height: 38px"
      class="w-100 mt-4 text-16 d-flex justify-content-end"
    >
      <button class="btn text-16 btn-primary">
        <span
          v-if="isLoading"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <slot>Save </slot>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tag: false,
    };
  },
};
</script>

<style>
</style>