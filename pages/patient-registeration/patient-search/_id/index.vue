<template>
  <div>
    <div v-if="isLoading" class="skeleton">
      <b-row>
        <b-col cols="12" class="">
          <b-skeleton animation="wave" width="85%"></b-skeleton>
          <b-skeleton animation="wave" width="55%"></b-skeleton>
          <b-skeleton animation="wave" width="70%"></b-skeleton>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="">
          <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <div class="bg-light card text-12 border-radius mb-3 margin-fix">
        <div class="card-body" style="background-color: #c7f9cc">
          <div class="d-flex align-content-center align-items-center">
            <div class="flex-grow-1">
              <div
                class="
                  d-flex
                  align-items-center
                  justify-content-between
                  flex-wrap
                  mb-2
                "
              >
                <div
                  class="class-name mr-1 text-24 text-capitalize"
                  style="color: rgb(0, 0, 0) !important"
                >
                  {{
                    patientData.firstname ? patientData.firstname : "-"
                  }}&nbsp;{{
                    patientData.lastname ? patientData.lastname : "-"
                  }}
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
                      DOB:</span
                    >
                    <span
                      class="class-details-data_value"
                      style="color: rgb(0, 0, 0) !important"
                      >{{ patientData.date_of_birth }} ({{
                        (age = 0 || -1 ? "0" : age + "years")
                      }})</span
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
                      >{{ patientData.gender ? patientData.gender : "-" }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="ml-4 text-center" style="border: 2px solid #fff">
              <b-avatar
                style="color: #fff"
                square
                variant="#e7f0f8"
                size="6rem"
              ></b-avatar>
              <!---->
              <!-- <img
             src="~/assets/images/blackdoctor.jpg"
              src="/subject-icons/mathematics/mathematics-4.svg"
              class="card-flexed-img"
            /> -->
              <!---->
            </div>
          </div>
        </div>
      </div>
      <base-card-tab>
        <card-tab title="Consultations">
          <table-component :items="items" />
        </card-tab>
        <card-tab title="Appointment">
          <h1 class="text-18">Yay</h1>
        </card-tab>
        <card-tab title="Bill Estimate">
          <h1 class="text-18">Hello</h1>
        </card-tab>
      </base-card-tab>
    </div>
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
      patientData: {
        dob: "2022-05-11",
      },
      age: "",
    };
  },
  mounted() {
    this.getPatientRecord();
  },
  methods: {
    async getPatientRecord() {
      try {
        this.isLoading = true;
        let response = await this.$axios.$get(
          `patient/patients/${this.$route.params.id}`,
          {
            headers: {
              Authorization: `Token ${localStorage.getItem(`HEALTH-TOKEN`)}`,
            },
          }
        );

        this.patientData = response;
        this.age = getAge();

        function getAge(dateString) {
          var today = new Date();
          var birthDate = new Date(response.date_of_birth);
          var age = today.getFullYear() - birthDate.getFullYear();
          var m = today.getMonth() - birthDate.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
          }
          return age;
        }

        console.log(this.age);
      } catch {
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.margin-fix {
  margin: 4rem 0 6rem;
  background: #fff;
}
.skeleton {
  padding: 20vh 0 38vh;
}
</style>