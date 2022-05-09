<template>
  <div>
    <!-- <sidebar /> -->
    <template>
      <div class="margin-fix p-4 mb-3">
        <div class="font20 d-flex align-items-center click">
          <h4 class="text-grey text-24">Patient Search</h4>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">First Name</small
            ><input
              @keyup.enter="getPatients"
              v-model="firstname"
              type="text"
              placeholder="First Name"
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">Last Name</small
            ><input
              @keyup.enter="getPatients"
              v-model="lastname"
              type="text"
              placeholder="Last Name"
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">Middle Name</small
            ><input
              @keyup.enter="getPatients"
              v-model="middlename"
              type="text"
              placeholder="Middle Name"
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">Date of Birth</small>
            <!-- <v-select
              v-model="marital_status"
              @change="getPatients"
              class="style-chooser text-grey"
              placeholder="Marital status"
              :options="marital"
            ></v-select> -->
            <input
              type="date"
              v-model="date_of_birth"
              placeholder="D.o.B"
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">Gender</small>
            <v-select
              v-model="gender"
              class="style-chooser text-grey"
              placeholder="Gender"
              :options="genders"
            ></v-select>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">Phone Number</small>
            <!-- <v-select
              v-model="nationality"
              class="style-chooser text-grey"
              placeholder="Nationlity"
              :options="nations"
            ></v-select> -->

            <input
              type="Phone"
              v-model="phone_number"
              placeholder="Phone Number"
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div>
          <!-- <div
              type="button"
              ref="runValidation"
              id="runValidation"
              @click="validate"
            ></div> -->

          <!-- <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">Offset</small>
            <input
              @keyup.enter="getPatients"
              v-model="offset"
              type="text"
              placeholder="offset"
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">Ordering</small
            ><input
              @keyup.enter="getPatients"
              v-model="ordering"
              type="text"
              placeholder="Ordering "
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">religion</small
            ><input
              @keyup.enter="getPatients"
              v-model="religion"
              type="text"
              placeholder="Religion"
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div> -->

          <div
            class="
              col-lg-12
              d-flex
              justify-content-center
              pt-3
              col-md-12 col-sm-12
              text-14
            "
          >
            <button
              @click.prevent="getPatients"
              :disabled="hellNo"
              class="btn text-14 mr-5"
              style="background: #00a859; color: #fff"
            >
              <div class="mt-1">Search</div>
            </button>
            <div @click.prevent="clear" class="btn text-grey btn-light text-14">
              <div class="mt-1">Clear</div>
            </div>
          </div>
        </div>
      </div>

      <b-modal
        id="Add-encounter"
        title="Add Encounter"
        centered
        hide-footer
        ref="encounterModal"
      >
        <!-- <div>
          <h4 class="text-20">Patient Details</h4>
          <hr />
        </div> -->
        <ValidationObserver v-slot="{ validate }">
          <form class="mx-3">
            <div class="mt-4">
              <div class="w-100 d-flex flex-wrap">
                <div class="mb-2 col-lg-6 pl-0 pr-2 col-md-6 col-sm-6 w-100">
                  <small class="text-grey text-12">UHID</small>

                  <input
                    type="text"
                    placeholder="UHID"
                    class="form-control ng-untouched ng-pristine ng-valid"
                  />
                </div>
                <div class="mb-2 col-lg-6 px-0 col-md-6 col-sm-6">
                  <small class="text-grey text-12">Patient Name</small>

                  <input
                    type="text"
                    disabled
                    v-model="name"
                    placeholder="Patient Name"
                    class="form-control ng-untouched ng-pristine ng-valid"
                  />
                </div>
                <div class="mb-2 col-lg-6 pl-0 pr-2 col-md-6 col-sm-6">
                  <small class="text-grey text-12">D.o.B</small>

                  <input
                    type="text"
                    disabled
                    v-model="presetData.date_of_birth"
                    placeholder="D.O.B"
                    class="form-control ng-untouched ng-pristine ng-valid"
                  />
                </div>
                <div class="mb-2 col-lg-6 px-0 pl-0 col-md-6 col-sm-6">
                  <small class="text-grey text-12">Age (Y-M-D)</small>
                  <div class="d-flex">
                    <div class="px-1">
                      <input
                        type="text"
                        disabled
                        v-model="age.year"
                        placeholder="Year"
                        class="form-control ng-untouched ng-pristine ng-valid"
                      />
                    </div>
                    <div class="px-1">
                      <input
                        type="text"
                        disabled
                        v-model="age.month"
                        placeholder="M"
                        class="form-control ng-untouched ng-pristine ng-valid"
                      />
                    </div>
                    <div class="px-1">
                      <input
                        type="text"
                        disabled
                        v-model="age.day"
                        placeholder="D"
                        class="form-control ng-untouched ng-pristine ng-valid"
                      />
                    </div>
                  </div>
                </div>

                <div class="mb-2 col-lg-6 pr-2 pl-0 col-md-6 col-sm-6">
                  <small class="text-grey text-12">Phone No.</small>

                  <input
                    type="text"
                    v-model="presetData.phone_number"
                    disabled
                    placeholder="Phone No."
                    class="form-control ng-untouched ng-pristine ng-valid"
                  />
                </div>

                <div class="mb-2 col-lg-6 px-0 col-md-6 col-sm-6">
                  <small class="text-grey text-12">Gender</small>

                  <v-select
                    class="style-chooser text-grey text-14"
                    placeholder="Gender"
                    v-model="presetData.gender"
                    :options="genders"
                  ></v-select>
                </div>

                <!-- <div class="mb-2 col-lg-6 pl-0 pr-2 col-md-6 col-sm-6">
                  <small class="text-grey text-12">Appointment Type *</small>
                  <validation-provider rules="required" v-slot="{ errors }">
                    <v-select
                      class="style-chooser text-grey text-14"
                      placeholder="Appointment Type"
                      :options="['xyz']"
                    ></v-select>
                    <span class="text-12" style="color: red">{{
                      errors[0]
                    }}</span>
                  </validation-provider>
                </div> -->

                <div class="mb-2 col-lg-6 pl-0 pr-2 col-md-6 col-sm-6">
                  <small class="text-grey text-12">Clinic *</small>
                  <validation-provider rules="required" v-slot="{ errors }">
                    <v-select
                      class="style-chooser text-grey text-14"
                      v-model="encounterData.clinic.type"
                      placeholder="Clinic"
                      :options="clinics"
                    ></v-select>
                    <span class="text-12" style="color: red">{{
                      errors[0]
                    }}</span>
                  </validation-provider>
                </div>

                <div class="mb-2 col-lg-6 px-0 col-md-6 col-sm-6">
                  <small class="text-grey text-12">Encounter Type *</small>
                  <validation-provider rules="required" v-slot="{ errors }">
                    <v-select
                      class="style-chooser text-grey text-14"
                      v-model="encounterData.encounter_type"
                      placeholder="Encounter Type"
                      :options="['Walk in']"
                    ></v-select>
                    <span class="text-12" style="color: red">{{
                      errors[0]
                    }}</span>
                  </validation-provider>
                </div>
                <!-- <div class="mb-2 col-lg-6 px-0 col-md-6 col-sm-6">
                  <small class="text-grey text-12">Status *</small>
                  <validation-provider rules="required" v-slot="{ errors }">
                    <v-select
                      class="style-chooser text-grey text-14"
                      v-model="encounterData.status"
                      placeholder="Status"
                      :options="['active']"
                    ></v-select>
                    <span class="text-12" style="color: red">{{
                      errors[0]
                    }}</span>
                  </validation-provider>
                </div> -->

                <div class="mb-2 col-lg-6 pl-0 pr-2 col-md-6 col-sm-6">
                  <small class="text-grey text-12">Provider</small>

                  <v-select
                    v-model="encounterData.provider.type"
                    class="style-chooser text-grey text-14"
                    placeholder="Provider"
                    :options="['Dr Sanjay']"
                  ></v-select>
                </div>
              </div>
            </div>

            <div class="my-3 d-flex justify-content-center">
              <button
                @click.prevent="closeModal"
                class="btn btn-light text-grey mr-5 text-14"
                style="height: 38px; width: 5rem; text-align: center"
              >
                Cancel
              </button>
              <button
                @click.prevent="startEncounterData"
                class="
                  btn
                  text-white text-14
                  mainbtndashboard
                  medbrownparagraph
                "
                style="
                  height: 38px;
                  width: 5rem;
                  text-align: center;
                  background: #00a859;
                "
              >
                <span v-if="isbusy">
                  <b-spinner
                    label="loading"
                    variant="primary"
                    style="width: 1.5rem; height: 1.5rem"
                    class="text-center"
                  >
                  </b-spinner>
                </span>
                <span v-else>Save</span>
              </button>
            </div>
            <div
              type="button"
              ref="runValidation"
              id="runValidation"
              @click="validate"
            ></div>
          </form>
        </ValidationObserver>
      </b-modal>
      <div>
        <div class="table_container table-responsive mt-2 pt-2">
          <table-component
            :paginate="true"
            :busy="busy"
            :items="itemsToShow"
            @row-clicked="viewPatientData"
            :dropdownItem="dropdownItem"
            @dropdown="getDataForPatientByID"
            :fields="fields"
          >
            <template #action="{ data: { item } }">
              <b-dropdown
                variant="link"
                toggle-class="text-decoration-none text-center"
                no-caret
              >
                <div class="d-none">
                  {{ item }}
                </div>
                <template class="p-0 mx-auto text-center" #button-content>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      style="color: #000"
                      class="bi bi-three-dots-vertical"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                      />
                    </svg>
                  </div>
                </template>
                <template v-if="dropdownItem.length > 0">
                  <b-dropdown-item
                    v-for="(dropdown, index) in dropdownItem"
                    right
                    :key="index"
                    class="text-capitalize text-14"
                    @click="optionClicked(item, index)"
                    >{{ dropdown.split("_").join(" ") }}</b-dropdown-item
                  >
                </template>
              </b-dropdown>
            </template>
          </table-component>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      busy: false,
      isbusy: false,
      itemsToShow: [],
      dropdownItem: ["View", "Add Encounter"],
      fields: [
        { key: "UHID", label: "UHID", sortable: true },
        { key: "firstname", label: "First Name", sortable: true },
        { key: "lastname", label: "Last Name", sortable: true },
        { key: "date_of_birth", label: "D.o.B", sortable: true },
        { key: "gender", label: "Gender", sortable: true },
        { key: "marital_status", label: "Marital Status", sortable: true },
        { key: "action", label: "", sortable: false },
      ],

      firstname: "",
      isbusy: false,
      gender: null,
      lastname: "",
      limit: 50,
      marital_status: null,
      middlename: "",
      nationality: null,
      date_of_birth: "",
      phone_number: "",
      offset: 0,
      ordering: "",
      religion: "",
      id: "",
      patientList: [],
      genders: [],
      marital: [],
      nations: ["Nigeria"],
      presetData: {
        phone_number: "",
      },
      name: "",
      year: "",
      month: "",
      day: "",
      age: {
        year: 0,
        month: 0,
        day: 0,
      },
      year: 0,
      encounterData: {
        clinic: {
          type: "",
        },
        status: "",
        time_log: {},
        chart: {},
        provider: {
          type: "",
        },
        patient: {},
        is_active: true,
        encounter_type: "",
        date_and_time: {},
      },
      temp: {},
      clinics: [],
    };
  },
  watch: {
    // "age.month": {
    //   handler(e) {
    //     console.log("from watcyer", e);
    //   },
    // },
    // gender() {
    //   if (this.gender !== null) {
    //     this.getPatients();
    //   }
    // },
    // nationality() {
    //   if (this.nationality !== null) {
    //     this.getPatients();
    //   }
    // },
    // marital_status() {
    //   if (this.marital_status !== null) {
    //     this.getPatients();
    //   }
    // },
  },
  mounted() {
    this.getGender();
    this.getMaritalStatus();
    this.getCountries();
    this.getClinics();
  },
  methods: {
    async startEncounterData() {
      if (this.$refs.runValidation) {
        this.$refs.runValidation.click();
      }
      if (
        this.encounterData.encounter_type &&
        this.encounterData.provider.type &&
        this.encounterData.clinic.type
      ) {
        try {
          this.isbusy = true;
          let response = await this.$axios.$post(
            "encounters/encounter/",
            this.encounterData,
            {
              headers: {
                Authorization: `Token ${localStorage.getItem(`HEALTH-TOKEN`)}`,
              },
            }
          );
          if (response.encounter_id) {
            this.$toast.success(`Encounter created`);
            this.$bvModal.hide("Add-encounter");
          }
        } catch {
          this.$toast.error(`Unable to create encounter`);
        } finally {
          this.isbusy = false;
        }
      }
    },
    async getClinics() {
      try {
        let response = await this.$axios.$get(`/encounters/clinic/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem(`HEALTH-TOKEN`)}`,
          },
        });

        for (const iterator of await response.results) {
          this.clinics.push(iterator.name);
        }
      } catch {
      } finally {
        this.isLoading = false;
      }
    },
    async getPatientRecord(e) {
      try {
        let response = await this.$axios.$get(`patient/patients/${e}`, {
          headers: {
            Authorization: `Token ${localStorage.getItem(`HEALTH-TOKEN`)}`,
          },
        });

        console.log(response);
      } catch {
      } finally {
        this.isLoading = false;
      }
    },
    async getPatients() {
      try {
        this.busy = true;
        let uri = `/patient/patients/?firstname=${this.firstname}&gender=${
          this.gender ? this.gender : ""
        }&lastname=${this.lastname}&limit=${this.limit}&marital_status=${
          this.marital_status ? this.marital_status : ""
        }&middlename=${this.middlename}&nationality=${
          this.nationality ? this.nationality : ""
        }&offset=${this.offset}&ordering=${this.ordering}&religion=${
          this.religion
        }`;

        const response = await this.$axios.$get(uri, {
          headers: {
            Authorization: `Token ${localStorage.getItem(`HEALTH-TOKEN`)}`,
          },
        });

        this.itemsToShow = response.results;
        for (const iterator of await response.results) {
          this.patientList.push(iterator.firstname + " " + iterator.lastname);
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.busy = false;
      }
    },
    async getGender() {
      try {
        let response = await this.$axios.$get(`core/gender/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem(`HEALTH-TOKEN`)}`,
          },
        });

        for (const iterator of await response.results) {
          this.genders.push(iterator.gender);
        }
      } catch {
      } finally {
      }
    },
    async getMaritalStatus() {
      try {
        let response = await this.$axios.$get(`core/marital-status/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem(`HEALTH-TOKEN`)}`,
          },
        });

        for (const iterator of await response.results) {
          this.marital.push(iterator.marital_status);
        }
      } catch {
      } finally {
      }
    },
    async getCountries() {
      try {
        let response = await this.$axios.$get(`core/countries/?limit=249`, {
          headers: {
            Authorization: `Token ${localStorage.getItem(`HEALTH-TOKEN`)}`,
          },
        });

        for (const iterator of await response.results) {
          this.nations.push(iterator.country);
        }
        this.nations.splice(159, 1);
      } catch {
      } finally {
      }
    },
    getDataForPatientByID(e) {
      this.$router.push(`patient-registeration/patient-search/${e.id}`);
    },
    viewPatientData(e) {
      this.$router.push(`/patient-registeration/patient-search/${e.id}`);
    },
    optionClicked(e, i) {
      if (i === 0) {
        this.$router.push(`/patient-registeration/patient-search/${e.id}`);
      }
      if (i === 1) {
        this.$bvModal.show("Add-encounter");
        this.presetData = e;

        this.encounterData.patient = e;
        console.log(this.presetData.phone_number);
        this.name = this.presetData.firstname + " " + this.presetData.lastname;
        this.temp = e.is_baby;
        this.calcAge(e);
      }
    },
    calcAge(e) {
      // **********calc year***********
      let presentDate = new Date().getFullYear();
      let yearOfBirth = e.date_of_birth.substring(0, 4);

      let diff = presentDate - yearOfBirth;
      let x = parseInt(diff);
      console.log(x);
      if (x === 0) {
        this.age.year = 0;
        this.age.month = 0;
      } else {
        this.age.year = x;
      }

      if (monthOfBirth < month) {
        this.age.year;
      } else {
        if (this.age.year === 0) {
          this.age.year;
        } else {
          this.age.year--;
        }
      }

      // **************calc month***********
      let tempMonth;
      let month = new Date().getMonth();
      let monthOfBirth = parseInt(e.date_of_birth.substring(5, 7));
      // tempMonth = monthOfBirth - month
      if (presentDate === yearOfBirth) {
        this.age.month = 0;
      } else {
        tempMonth = 12 - monthOfBirth;
      }

      if (monthOfBirth <= month) {
        this.age.month = month - monthOfBirth;
      } else {
        this.age.month = tempMonth + month;
      }

      // **************calc day**************
      this.age.day = new Date().getDate();

      // *********************************
    },
    closeModal() {
      this.$bvModal.hide("Add-encounter");
      this.presetData = {};
    },
    clear() {
      this.itemsToShow = [];
      this.firstname = "";
      this.gender = " ";
      this.lastname = "";
      this.limit = 50;
      this.marital_status = "";
      this.middlename = " ";
      this.nationality = " ";
      this.offset = 0;
      this.ordering = "";
      this.religion = "";
    },
  },

  computed: {
    hellNo() {
      if (
        this.firstname.length === 0 &&
        this.middlename.length === 0 &&
        this.lastname.length === 0 &&
        this.gender === null &&
        this.date_of_birth.length === 0 &&
        this.phone_number.length === 0
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
.btn.btn-primary {
  background: #1070b7;
  border: 1px solid #1070b7;
  color: #fff;
}
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #00a859;
  border-color: #00a859;
}
hr {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.margin-fix {
  margin: 4rem 0 6rem;
  background: #fff;
}
.table_container {
  /* border-radius: 10px; */
  background-color: #fff;
  padding: 0 10px 5px 10px;
}
.table-responsive,
[class*="table-responsive-"] {
  margin-bottom: 1rem;
}
.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  /* border-top: 1px solid #dee2e6; */
}

td {
  cursor: pointer;
}

.table th {
  color: #8f9aa3;
}
</style>