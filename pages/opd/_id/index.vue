<template>
  <div>
    <div v-if="isLoading" class="skeleton">
      <b-row>
        <b-col cols="12" class="pt-5 mt-5">
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
    <div class="bg-light text-12 border-radius mb-3 margin-fix" v-else>
      <div
        style="border-radius: 4px"
        class="
          p-3
          pt-3
          mt-5
          bg-white
          d-flex
          flx-wrap
          align-items-center
          justify-content-between
          pt-3
          mb-2
        "
      >
        <h4 class="pl-2 text-24 mb-0 text-grey">Patient Visits</h4>
        <div class="d-flex align-items-center">
          <div class="px-2">
            <p class="text-14 mb-0 text-grey">UHID: 6478393485</p>
          </div>
          <div class="px-2">
            <p class="text-14 mb-0 text-grey">
              Name:
              {{ patientData.firstname + " " + patientData.lastname }}
            </p>
          </div>
          <div class="px-2">
            <p class="text-14 mb-0 text-grey">
              Age: {{ age }} {{ age === 0 ? " year" : " years" }}
            </p>
          </div>
          <div class="px-2">
            <p class="text-14 mb-0 text-grey">
              Gender: {{ patientData.gender }}
            </p>
          </div>
          <div class="px-2">
            <div id="button-2">
              <b-avatar style="border: 4px solid #fff" size="4rem" />

              <b-tooltip target="button-2" placement="left">
                <div class="d-block">
                  baby: {{ patientData.is_baby }}
                  <br />
                  {{ patientData.salutation }}:
                  {{
                    patientData.firstname +
                    " " +
                    patientData.middlename +
                    " " +
                    patientData.lastname
                  }}
                  <br />
                  Gender: {{ patientData.gender }}
                  <br />
                  Nationality: {{ patientData.nationality }}
                </div>
              </b-tooltip>
            </div>
          </div>
        </div>
      </div>
      <TabView class="tabview-custom">
        <TabPanel>
          <template #header>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-clipboard2-pulse"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"
              />
              <path
                d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"
              />
              <path
                d="M9.979 5.356a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.926-.08L4.69 10H4.5a.5.5 0 0 0 0 1H5a.5.5 0 0 0 .447-.276l.936-1.873 1.138 3.793a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h.5a.5.5 0 0 0 0-1h-.128L9.979 5.356Z"
              />
            </svg>
            <span class="ml-2">Consultation</span>
          </template>
          <EncountersConsultation />
        </TabPanel>

        <TabPanel>
          <template #header>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-activity"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
              />
            </svg>
            <span class="ml-2">Medical Records</span>
          </template>
        </TabPanel>
        <TabPanel>
          <template #header>
            <i class="pi pi-user"></i>
            <span class="ml-2">Previous Medicine</span>
          </template>
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",

  data() {
    return {
      items: [],
      isLoading: false,
      patientData: {},
      age: 0,
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
          `encounters/encounter/${this.$route.params.id}`,
          {
            headers: {
              Authorization: `Token ${localStorage.getItem(`HEALTH-TOKEN`)}`,
            },
          }
        );

        this.patientData = response.patient;
        console.log(this.patientData);
      } catch {
      } finally {
        this.isLoading = false;
        this.calcAge();
      }
    },
    calcAge() {
      let presentDate = new Date().getFullYear();
      let yearOfBirth = this.patientData.date_of_birth;
      yearOfBirth;
      let temp = yearOfBirth.substring(0, 4);
      let x = presentDate - temp;
      this.age = x;
    },
  },
};
</script>

<style scoped>
.site-sidebar .nav-item.active,
.nuxt-link-exact-active,
.site-sidebar .nav-item::after,
.site-sidebar .nav-item:hover {
  /* background: rgba(16, 112, 183, 0.1); */
}
.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
  background: #ffffff;
  border-color: #2196f3;
  color: #00a859;
}
li {
  cursor: pointer;
  border: 0.5px solid #fff;
}
.margin-fix {
  margin: 1rem 0 6rem;
  background: #fff;
}
</style>