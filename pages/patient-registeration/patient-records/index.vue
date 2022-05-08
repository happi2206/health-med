<template>
  <div>
    <!-- <sidebar /> -->
    <template>
      <!-- <div class="personal-details row">
        <div class="col-md-4">
          <div class="my-2">
            <label for="" class="d-block text-14 graytext">First Name</label>
            <select class="w-100" v-model="patient.title" name="title" id="">
              <option value="">Title</option>
              <option value="">Baby</option>
              <option value="">Mr</option>
              <option value="">Mrs</option>
              <option value="">Miss</option>
              <option value="">Dr</option>
              <option value="">Ms</option>
              <option value="">Prof</option>
            </select>
            <input type="text" v-model="patient.name" class="form-control" />
          </div>
          <div class="my-2">
            <label for="" class="d-block text-14 graytext">First Name</label>
            <v-date-picker
              v-model="patient.dob"
              :model-config="modelConfig"
              mode="date"
            >
              <template #default="{ togglePopover }">
                <span @click="togglePopover()">
                  <input
                    v-model="patient.dob"
                    class="form-control form-control-md"
                    style="background: #fbfdfe"
                    placeholder="D.O.B"
                  />
                </span>
              </template>
            </v-date-picker>
          </div>
          <div class="my-2">
            <label for="" class="d-block text-14 graytext">First Name</label>
            <v-select
              :options="['a', 'b']"
              label="firstname"
              placeholder="Select instructor"
            >
            </v-select>
          </div>
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
      </div> -->
      <ValidationObserver v-slot="{ validate }">
        <form>
          <div class="bg-white border-radius mb-5 p-4 margin-fix">
            <h4 class="text-grey mb-4 text-24">Personal Details</h4>
            <div class="d-flex align-items-center">
              <small class="text-grey text-12">New Born</small>
              <input v-model="patient.is_baby" type="checkbox" class="ml-2" />
            </div>
            <div>
              <div class="">
                <div class="col-lg-12 col-md-12 col-sm-12 mb-3">
                  <div>
                    <div class="row vw-100">
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="text-grey text-12"> First Name *</small>
                        <div class="d-flex">
                          <div class="col-md-4 p-0">
                            <validation-provider
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <div class="w-100">
                                <select
                                  class="form-control w-100"
                                  v-model="patient.salutation"
                                  name="title"
                                  id=""
                                >
                                  <option value="">Title</option>
                                  <option
                                    v-for="(salute, index) in salutations"
                                    :key="index"
                                    :value="salute"
                                  >
                                    {{ salute }}
                                  </option>
                                </select>
                              </div>

                              <span class="text-12" style="color: red">{{
                                errors[0]
                              }}</span>
                            </validation-provider>
                          </div>

                          <div class="col-md-8 p-0">
                            <validation-provider
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <input
                                v-model="patient.firstname"
                                type="text"
                                placeholder="First Name*"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-valid
                                "
                              />
                              <span class="text-12" style="color: red">{{
                                errors[0]
                              }}</span>
                            </validation-provider>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="text-grey text-12">Middle Name</small>

                        <input
                          v-model="patient.middlename"
                          type="text"
                          placeholder="Middle Name"
                          class="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="text-grey text-12">Last Name *</small>
                        <validation-provider
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <input
                            v-model="patient.lastname"
                            type="text"
                            placeholder="Last Name*"
                            class="
                              form-control
                              ng-untouched ng-pristine ng-valid
                            "
                          />
                          <span class="text-12" style="color: red">{{
                            errors[0]
                          }}</span>
                        </validation-provider>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="text-grey text-12">Date of Birth *</small>
                        <!-- <v-date-picker
                        v-model="patient.date_of_birth"
                        mode="date"
                        @dayclick="toggleCalender2 = false"
                      >
                        <template #default="{ togglePopover }">
                          <span @click="togglePopover()">
                            <input
                              class="form-control"
                              :placeholder="patient.date_of_birth | date"
                            />
                          </span>
                        </template>
                      </v-date-picker> -->
                        <validation-provider
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <input
                            v-model="date_of_birth"
                            type="date"
                            class="w-100 form-control"
                          />
                          <span class="text-12" style="color: red">{{
                            errors[0]
                          }}</span>
                        </validation-provider>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="text-grey text-12">Age</small>
                        <div class="d-flex">
                          <div class="px-1">
                            <input
                              v-model="age.year"
                              type="number"
                              class="w-100 form-control"
                              placeholder="Year"
                            />
                          </div>
                          <div class="px-1">
                            <input
                              v-model="age.month"
                              type="number"
                              class="w-100 form-control"
                              placeholder="Month"
                            />
                          </div>
                          <div class="px-1">
                            <input
                              v-model="age.day"
                              type="number"
                              class="w-100 form-control"
                              placeholder="Day"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3 mt-1">
                        <small class="text-grey text-12">Gender *</small>
                        <validation-provider
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <v-select
                            v-model="patient.gender"
                            class="style-chooser"
                            placeholder="Gender"
                            label="grade_name"
                            :options="gender"
                          ></v-select>
                          <span class="text-12" style="color: red">{{
                            errors[0]
                          }}</span>
                        </validation-provider>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3 mt-1">
                        <small class="text-grey text-12"
                          >Marital Status *</small
                        >
                        <validation-provider
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <v-select
                            v-model="patient.marital_status"
                            class="style-chooser"
                            placeholder="Marital Status"
                            label="marital_status"
                            :options="marital_status"
                          ></v-select>
                          <span class="text-12" style="color: red">{{
                            errors[0]
                          }}</span>
                        </validation-provider>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="text-grey text-12">Occupation</small
                        ><input
                          v-model="patient.occupation"
                          type="text"
                          placeholder="Occupation"
                          class="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                      <!-- <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="text-grey text-12">Language</small
                        ><v-select
                          class="style-chooser"
                          placeholder="Language"
                          label="marital_status"
                          :options="[
                            'English',
                            'French',
                            'Khmer',
                            'Mandarin',
                            'Russian',
                          ]"
                        ></v-select>
                      </div> -->
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="text-grey text-12">Religion *</small>
                        <validation-provider
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <v-select
                            v-model="patient.religion"
                            class="style-chooser"
                            placeholder="Religion"
                            label="religion"
                            :options="religions"
                          ></v-select>
                          <span class="text-12" style="color: red">{{
                            errors[0]
                          }}</span>
                        </validation-provider>
                      </div>

                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="text-grey text-12">Nationality *</small>
                        <validation-provider
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <v-select
                            @input="searchState"
                            v-model="patient.nationality"
                            class="style-chooser"
                            placeholder="Nationality"
                            :options="countryList"
                          ></v-select>
                          <span class="text-12" style="color: red">{{
                            errors[0]
                          }}</span>
                        </validation-provider>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="text-grey text-12">Email Address</small>
                        <validation-provider
                          rules="required|email"
                          v-slot="{ errors }"
                        >
                          <input
                            type="email"
                            v-model="patient.email"
                            placeholder="Email Address"
                            class="
                              form-control
                              ng-untouched ng-pristine ng-valid
                            "
                          />
                          <span class="text-12" style="color: red">{{
                            errors[0]
                          }}</span>
                        </validation-provider>
                      </div>

                      <div class="mello col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="mb-0 text-grey text-grey text-12"
                          >State of Origin *</small
                        >
                        <v-select
                          class="style-chooser"
                          placeholder="Type to search"
                          label="state_name"
                          v-model="patient.state"
                          :options="states"
                          @input="changeLga"
                        ></v-select>
                      </div>
                      <div class="mello col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="mb-0 text-grey">Identity No.</small>
                        <div class="d-flex">
                          <select
                            v-model="patient.identity.type"
                            class="form-control w-50"
                            name="title"
                            id=""
                          >
                            <option value="Driving License">
                              Driving License
                            </option>
                            <option value="Employee Id">Employee Id</option>
                            <option value="Passport and Visa No">
                              Passport and Visa No
                            </option>
                            <option value="Passport No">Passport No</option>

                            <option value="Visa No">Visa No</option>
                          </select>
                          <!-- <v-select
                          v-model="patient.identity_no"
                          class="style-chooser w-50"
                          placeholder="Select identity"
                          label="state_name"
                          :options="[
                            'Driving License',
                            'Employee Id',
                            'Passport and Visa No.',
                            'Passport No',
                            'Visa No.',
                          ]"
                        ></v-select> -->
                          <input
                            v-model="patient.identity.no_"
                            type="text"
                            class="w-50 form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="text-grey text-12">Visa Validity</small
                        ><input
                          type="date"
                          class="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                      <div class="col-lg-4 col-md-5 col-sm-12 mb-3">
                        <small class="text-grey text-12">LGA</small>
                        <input
                          v-model="patient.lga"
                          type="text"
                          placeholder="Local Government Area"
                          class="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                      <!-- <div class="row" style="margin: 0; width: 100%">
                      <div class="mb-3 col-12">
                        <small class="text-grey text-12">Family (optional)</small>

                        <v-select
                          v-model="patient.family"
                          class="style-chooser"
                          placeholder="Select Family"
                          label="family_name"
                          :options="familyList"
                        ></v-select>
                      </div>
                    </div> -->

                      <hr />
                      <div class="row pt-3" style="margin: 0; width: 100%">
                        <div class="col-9">
                          <h4 class="text-24">Home Address</h4>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                          <small class="text-grey text-12"
                            >Address/Village *</small
                          >

                          <input
                            type="text"
                            v-model="patient.home_address.address"
                            placeholder="Address/Village"
                            class="
                              form-control
                              ng-untouched ng-pristine ng-valid
                            "
                          />
                        </div>

                        <div class="mello col-lg-4 col-md-6 col-sm-12 mb-3">
                          <small class="mb-0 text-grey">Country</small>
                          <v-select
                            v-model="patient.home_address.country"
                            class="style-chooser"
                            placeholder="Type to search"
                            label="Country"
                            :options="countryList"
                          ></v-select>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                          <small class="text-grey text-12">City</small
                          ><input
                            v-model="patient.home_address.city"
                            type="text"
                            placeholder="City"
                            class="
                              form-control
                              ng-untouched ng-pristine ng-valid
                            "
                          />
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                          <small class="text-grey text-12">Postal Code</small
                          ><input
                            v-model="patient.home_address.postal_code"
                            type="text"
                            placeholder="Postal Code"
                            class="
                              form-control
                              ng-untouched ng-pristine ng-valid
                            "
                          />
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                          <small class="text-grey text-12">Phone Number</small>
                          <validation-provider
                            rules="digits"
                            v-slot="{ errors }"
                          >
                            <input
                              v-model="patient.home_address.mobile_number"
                              type="text"
                              placeholder="Phone Number"
                              class="
                                form-control
                                ng-untouched ng-pristine ng-valid
                              "
                            />
                            <span class="text-12" style="color: red">{{
                              errors[0]
                            }}</span>
                          </validation-provider>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h3 class="text-24">Nearest Relative</h3>
                    <div class="row">
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="text-grey text-12">Relative Name</small
                        ><input
                          v-model="patient.next_of_kin.nok_name"
                          type="text"
                          placeholder="Relative Name"
                          class="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3 mt-1">
                        <small class="text-grey">Relation </small>
                        <v-select
                          v-model="patient.next_of_kin.relation"
                          class="style-chooser"
                          placeholder="Relation"
                          label="name"
                          :options="relation"
                        ></v-select>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="text-grey text-12">Phone Number</small>
                        <validation-provider
                          rules="required|digits"
                          v-slot="{ errors }"
                        >
                          <input
                            v-model="patient.next_of_kin.mobile_number"
                            type="text"
                            placeholder="Phone Number"
                            class="
                              form-control
                              ng-untouched ng-pristine ng-valid
                            "
                          />
                          <span class="text-12" style="color: red">{{
                            errors[0]
                          }}</span>
                        </validation-provider>
                      </div>

                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="text-grey text-12">Address/Village</small
                        ><input
                          v-model="patient.next_of_kin.address"
                          type="text"
                          placeholder="Address/Village"
                          class="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>

                      <div class="mello col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="mb-0 text-grey">Country</small>
                        <v-select
                          v-model="patient.next_of_kin.country"
                          class="style-chooser"
                          placeholder="Type to search"
                          label="Country"
                          :options="countryList"
                        ></v-select>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="text-grey text-12">City</small
                        ><input
                          v-model="patient.next_of_kin.city"
                          type="text"
                          placeholder="City"
                          class="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>

                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="text-grey text-12">Postal Code</small
                        ><input
                          v-model="patient.next_of_kin.postal_code"
                          type="text"
                          placeholder="Postal Code"
                          class="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                    </div>

                    <hr />
                    <h3 class="text-24">Payer Information</h3>

                    <div
                      class="mello col-lg-4 col-md-6 col-sm-12 mb-0 text-grey"
                    >
                      <small class="mb-0 text-grey text-grey">Payer</small>
                      <v-select
                        class="style-chooser"
                        placeholder="Type to search"
                        label="Country"
                        :options="countryList"
                      ></v-select>
                    </div>

                    <div
                      class="mello col-lg-4 col-md-6 col-sm-12 mb-0 text-grey"
                    >
                      <small class="mb-0 text-grey">Sponsor</small>
                      <v-select
                        class="style-chooser"
                        placeholder="Type to search"
                        label="Country"
                        :options="countryList"
                      ></v-select>
                    </div>

                    <div
                      class="mello col-lg-4 col-md-6 col-sm-12 mb-0 text-grey"
                    >
                      <small class="mb-0 text-grey">Network</small>
                      <v-select
                        class="style-chooser"
                        placeholder="Type to search"
                        label="Country"
                        :options="['Antigua and Barbuda', 'General', 'Kongo']"
                      ></v-select>
                    </div>

                    <div class="my-5 text-16 d-flex justify-content-end">
                      <div class="btn text-16 btn-light btn-md mx-3">
                        Cancel
                      </div>

                      <button
                        @click.prevent="createPatient"
                        class="btn text-16 btn-primary"
                      >
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
                </div>

                <div
                  type="button"
                  ref="runValidation"
                  id="runValidation"
                  @click="validate"
                ></div>
                <!-- <div class="col-lg-2 col-md-4 col-sm-12 mb-3">
                      <div class="profile-picture-container">
                        <div class="profiles">
                          <b-avatar
                            size="6rem"
                            icon="person-fill"
                            :src="avatar"
                            badge
                            badge-variant="primary"
                          >
                            <template #badge>
                              <span>
                                <b-icon
                                  id="dropdownMenuButton"
                                  icon="camera"
                                  class="dropdown-toggle"
                                  type="button"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                ></b-icon>
                                <div
                                  class="
                                    dropdown-menu dropdown-menu
                                    text-center
                                  "
                                  aria-smallledby="dropdownMenuButton"
                                >
                                  <button class="dropdown-item" href="#">
                                    Capture Image
                                  </button>
                                  <button
                                    class="dropdown-item"
                                    href="#"
                                    @click="onClickFileUpload_"
                                  >
                                    Upload Image
                                  </button>
                                </div>
                              </span>
                            </template>
                          </b-avatar>
                        </div>
                        <input
                          ref="fileInput"
                          class="invisible"
                          type="file"
                          name="imagesArray"
                          @change="onChange"
                        />
                        <div v-if="showCropper">
                          <image-cropper
                            @saved="savedImage"
                            @cancelled="cancelImage"
                          />
                        </div>
                      </div>
                    </div> -->
              </div>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </template>
  </div>
</template>

<script>
// import Calendar from "v-calendar/lib/components/calendar.umd";
// import DatePicker from "v-calendar/lib/components/date-picker.umd";
export default {
  // components: {
  //   Calendar,
  //   DatePicker,
  // },
  layout: "dashboard",
  middware: "login",
  data() {
    return {
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
      relation: [
        "Brother",
        "Brother-in-law",
        "Daughter",
        "Daughter-in-law",
        "Father",
        "Father-in-law",
        "Friend",
        "Grandfather",
        "Grandmother",
        "Husband",
        "Mother",
        "Mother-in-law",
        "Self",
        "Sister",
        "Sister-in-law",
        "Son",
        "Son-in-law",
        "Uncle",
        "Wife",
      ],

      isLoading: false,
      date_of_birth: "",
      age: {
        year: null,
        month: null,
        day: null,
      },
      patient: {
        is_baby: false,
        salutation: "",
        firstname: "",
        lastname: "",
        middlename: "",
        email: "",
        gender: "",
        marital_status: "",
        religion: "",
        date_of_birth: "",
        age: {
          year: null,
          month: null,
          day: null,
        },
        nationality: "",
        state_id: {},
        identity: {
          type: "",
          no_: "",
        },
        state: "",
        lga: "",
        home_address: {
          address: "",
          country: "",
          city: "",
          postal_code: "",
          mobile_number: "",
        },
        next_of_kin: {
          nok_name: "",
          relation: "",
          mobile_number: "",
          address: "",
          country: "",
          city: "",
          postal_code: "",
        },
      },
      countryList: ["Nigeria"],
      gender: [],
      marital_status: [],
      occupations: [],
      religions: [],
      salutations: [],
      states: [],
      id: "",
    };
  },
  mounted() {
    this.getCountries();
    this.getGender();
    this.getMaritalStatus();
    this.getOccupations();
    this.getReligions();
    this.getSalutations();
    this.getStates();
  },

  methods: {
    uploadImage() {
      this.$refs.uploadAvatar.click();
    },
    handleFileUpload(event) {
      console.log(event);
      this.avatar = event.target.files[0].file;
      console.log(event.target.files[0].file);
    },
    async createPatient() {
      if (this.$refs.runValidation) {
        this.$refs.runValidation.click();
      }
      if (
        this.patient.salutation &&
        this.patient.firstname &&
        this.patient.lastname &&
        this.patient.gender &&
        this.patient.marital_status &&
        this.patient.religion &&
        this.patient.date_of_birth &&
        this.patient.nationality
      ) {
        try {
          this.isLoading = true;
          let response = await this.$axios.$post(
            "patient/patients/",
            this.patient,
            {
              headers: {
                Authorization: `Token ${localStorage.getItem(`HEALTH-TOKEN`)}`,
              },
            }
          );
          console.log(response);
          this.id = response.id;
          this.$router.push(`patient-registeration/patient-search/${this.id}`);
        } catch {
        } finally {
          this.isLoading = false;
        }
      }
    },
    changeLga(value) {
      console.log(value);
    },
    async getCountries() {
      try {
        let response = await this.$axios.$get(`core/countries/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem(`HEALTH-TOKEN`)}`,
          },
        });

        for (const iterator of await response.results) {
          this.countryList.push(iterator.country);
        }
        this.countryList.splice(159, 1);
      } catch {
      } finally {
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
          this.gender.push(iterator.gender);
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
          this.marital_status.push(iterator.marital_status);
        }
      } catch {
      } finally {
      }
    },
    async getOccupations() {
      try {
        let response = await this.$axios.$get(`core/occupations/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem(`HEALTH-TOKEN`)}`,
          },
        });

        for (const iterator of await response.results) {
          this.occupations.push(iterator.occupations);
        }
      } catch {
      } finally {
      }
    },
    async getReligions() {
      try {
        let response = await this.$axios.$get(`core/religion/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem(`HEALTH-TOKEN`)}`,
          },
        });

        for (const iterator of await response.results) {
          this.religions.push(iterator.religion);
        }
      } catch {
      } finally {
      }
    },
    async getSalutations() {
      try {
        let response = await this.$axios.$get(`core/salutations/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem(`HEALTH-TOKEN`)}`,
          },
        });

        for (const iterator of await response.results) {
          this.salutations.push(iterator.salutations);
        }
      } catch {
      } finally {
      }
    },
    searchState() {
      console.log("yay");
    },

    async getStates() {
      try {
        let response = await this.$axios.$get(
          `core/states/?country=${160}&limit=100&offset=0`,
          {
            headers: {
              Authorization: `Token ${localStorage.getItem(`HEALTH-TOKEN`)}`,
            },
          }
        );

        for (const iterator of await response.results) {
          this.states.push(iterator.state);
        }
      } catch {
      } finally {
      }
    },
  },
  computed: {},
};
</script>

<style scoped>
.margin-fix {
  margin: 4rem 0rem 6rem;
}
.style-chooser {
  height: 38px;
}
.touch {
  cursor: pointer;
}
.vw-100 {
  width: 86vw !important;
}
@media screen and (max-width: 1115px) {
  .vw-100 {
    width: 80vw !important;
  }
}
@media screen and (max-width: 875px) {
  .vw-100 {
    width: 70vw !important;
  }
}
@media screen and (max-width: 591px) {
  .vw-100 {
    width: 60vw !important;
  }
}
@media screen and (max-width: 454px) {
  .vw-100 {
    width: 55vw !important;
  }

  .p-4 {
    padding: 0.5rem !important;
  }
}
</style>