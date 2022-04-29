<template>
  <div>
    <div v-if="isLoading" class="skeleton"></div>
    <div class="bg-light card text-12 border-radius mb-3 margin-fix" v-else>
      <div class="card-body" style="background-color: #e7f0f8">
        <div class="d-flex align-content-center align-items-center">
          <div class="flex-grow-1">
            <div
              class="
                d-flex
                align-items-center
                justify-content-between
                flex-wrap
                mb-3
              "
            >
              <div
                class="class-name mr-1 text-24 text-capitalize"
                style="color: rgb(0, 0, 0) !important"
              >
                Xavier Simmons
              </div>
            </div>
            <hr class="my-0" style="border-color: rgb(0, 0, 0) !important" />
            <div class="mt-3">
              <div class="row">
                <div class="col-md-4 mb-2 text-capitalize">
                  <span
                    class="class-details-data_label"
                    style="color: rgb(0, 0, 0) !important"
                  >
                    EMR/UHID:</span
                  >
                  <span
                    class="class-details-data_value"
                    style="color: rgb(0, 0, 0) !important"
                    >989567876</span
                  >
                </div>

                <div class="col-md-4 mb-2 text-capitalize">
                  <span
                    class="class-details-data_label"
                    style="color: rgb(0, 0, 0) !important"
                  >
                    DOB (Age):</span
                  >
                  <span
                    class="class-details-data_value"
                    style="color: rgb(0, 0, 0) !important"
                    >12th July, 1972 (49 Years)</span
                  >
                </div>
                <div class="col-md-4 mb-2 text-capitalize">
                  <span
                    class="class-details-data_label"
                    style="color: rgb(0, 0, 0) !important"
                  >
                    Payers:</span
                  >
                  <span
                    class="class-details-data_value"
                    style="color: rgb(0, 0, 0) !important"
                    >NHIS</span
                  >
                </div>
                <div class="col-md-4 mb-2 text-capitalize">
                  <span
                    class="class-details-data_label"
                    style="color: rgb(0, 0, 0) !important"
                  >
                    Gender:</span
                  >
                  <span
                    class="class-details-data_value"
                    style="color: rgb(0, 0, 0) !important"
                    >Male</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="ml-4 text-center" style="border: 2px solid #fff">
            <b-avatar
              square
              src="~/assets/images/blackdoctor.jpg"
              size="6rem"
            ></b-avatar>
            <!---->
            <!-- <img
             
              src="/subject-icons/mathematics/mathematics-4.svg"
              class="card-flexed-img"
            /> -->
            <!---->
          </div>
        </div>
      </div>
    </div>
    <base-card-tab>
      <card-tab title="Details">
        <table-component :items="items" />
      </card-tab>
      <card-tab title="Appointment">
        <h1 class="text-18">Yay</h1>
      </card-tab>
      <card-tab title="Bill Estimate">
        <h1 class="text-18">Hello</h1>
        <side />
      </card-tab>
    </base-card-tab>
  </div>
</template>

<script>
import BaseCardTab from "~/components/BaseCardTab.vue";
import CardTab from "~/components/CardTab.vue";
import tableComponent from "~/components/tableComponent.vue";
export default {
  components: { BaseCardTab, tableComponent, CardTab },
  layout: "dashboard",
  data() {
    return {
      items: [],
      isLoading: false,
    };
  },
};
</script>

<style scoped>
.margin-fix {
  margin: 4rem 0 6rem;
  background: #fff;
}
</style>