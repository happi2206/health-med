<template>
  <div>
    <sidebar />
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

      <form @submit.prevent="handleSubmit(submitForm)">
        <div class="bg-white border-radius mb-5 p-4 margin-fix">
          <div class="font20 d-flex align-items-center click">
            <h4 class="text-grey">Patient Registeration</h4>
          </div>

          <div class="row mt-3">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <small>UHID</small
              ><input
                v-model="student.UHID"
                type="text"
                placeholder="UHID"
                class="form-control ng-untouched ng-pristine ng-valid"
              />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <small>UHID Date</small
              ><input
                v-model="student.UHID_Date"
                type="date"
                placeholder="UHID Date"
                class="form-control ng-untouched ng-pristine ng-valid"
              />
            </div>
            <div
              class="
                col-lg-4
                d-flex
                justify-content-between
                align-items-center
                col-md-6 col-sm-12
              "
            >
              <div class="w-50 d-flex align-items-center">
                <small>New Born</small>
                <input v-model="newBorn" class="ml-2 mt-1" type="checkbox" />
              </div>

              <input
                type="file"
                ref="uploadAvatar"
                @change="handleFileUpload"
                class="form-control d-none ng-untouched ng-pristine ng-valid"
              />
              <div class="touch" @click.prevent="uploadImage">
                <b-avatar
                  variant="primary"
                  :src="avatar"
                  size="5rem"
                  class="mr-1"
                ></b-avatar>
              </div>
            </div>
          </div>

          <hr />
          <h4 class="mb-4">Personal Details</h4>
          <div>
            <div class="row">
              <div class="col-lg-10 col-md-8 col-sm-12 mb-3">
                <div>
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small> First Name </small>
                      <div class="d-flex">
                        <select
                          class="form-control w-50"
                          v-model="patient.title"
                          name="title"
                          id=""
                        >
                          <option value="">Title</option>
                          <option value="">Baby</option>
                          <option value="">Mr</option>
                          <option value="">Mrs</option>
                          <option value="">Miss</option>
                          <option value="">Dr</option>
                          <option value="">Ms</option>
                          <option value="">Prof</option>
                        </select>
                        <input
                          v-model="student.first_name"
                          type="text"
                          placeholder="First Name*"
                          class="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small>Middle Name</small
                      ><input
                        v-model="student.middle_name"
                        type="text"
                        placeholder="Middle Name"
                        class="form-control ng-untouched ng-pristine ng-valid"
                      />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small>Last Name</small
                      ><input
                        v-model="student.last_name"
                        type="text"
                        placeholder="Last Name*"
                        class="form-control ng-untouched ng-pristine ng-valid"
                      />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small>Date of Birth</small>
                      <!-- <v-date-picker
                        v-model="student.date_of_birth"
                        mode="date"
                        @dayclick="toggleCalender2 = false"
                      >
                        <template #default="{ togglePopover }">
                          <span @click="togglePopover()">
                            <input
                              class="form-control"
                              :placeholder="student.date_of_birth | date"
                            />
                          </span>
                        </template>
                      </v-date-picker> -->
                      <input type="date" class="w-100 form-control" />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small>Gender</small>
                      <div class="d-flex">
                        <input
                          type="text"
                          class="w-100 form-control"
                          placeholder="Year"
                        />
                        <input
                          type="text"
                          class="w-100 form-control"
                          placeholder="Month"
                        />
                        <input
                          type="text"
                          class="w-100 form-control"
                          placeholder="Day"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3 mt-1">
                      <small>Gender</small>
                      <v-select
                        v-model="student.gender"
                        class="style-chooser"
                        placeholder="Gender"
                        label="grade_name"
                        :options="['Male', 'Female']"
                      ></v-select>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3 mt-1">
                      <small>Marital Status</small>
                      <v-select
                        v-model="student.marital_status"
                        class="style-chooser"
                        placeholder="Marital Status"
                        label="marital_status"
                        :options="['Married', 'Divorced', 'Single', 'Widowed']"
                      ></v-select>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small>Occupation</small
                      ><input
                        v-model="student.occupation"
                        type="text"
                        placeholder="Occupation"
                        class="form-control ng-untouched ng-pristine ng-valid"
                      />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small>Language</small
                      ><v-select
                        v-model="student.language"
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
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small>Religion</small
                      ><v-select
                        v-model="student.religion"
                        class="style-chooser"
                        placeholder="Religion"
                        label="religion"
                        :options="[
                          'Buddhism',
                          'Christian',
                          'Hinduism',
                          'Islamic',
                          'Russian',
                        ]"
                      ></v-select>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small>Nationality</small>
                      <v-select
                        v-model="student.nationality"
                        class="style-chooser"
                        placeholder="Nationality"
                        :options="countryList"
                      ></v-select>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small>Email Address</small
                      ><input
                        v-model="student.email"
                        type="email"
                        placeholder="Email Address"
                        class="form-control ng-untouched ng-pristine ng-valid"
                      />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small>Loyalty Name</small
                      ><v-select
                        v-model="student.loyalty"
                        class="style-chooser"
                        placeholder="Loyalty Name"
                        label="loyalty"
                        :options="[
                          'Yellow Card',
                          'Blue Card',
                          'Silver Member',
                          'Khema Baby',
                        ]"
                      ></v-select>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small>Expiry Date</small
                      ><input
                        v-model="student.expiryDate"
                        type="text"
                        class="form-control ng-untouched ng-pristine ng-valid"
                      />
                    </div>
                    <div class="mello col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small class="mb-0">State of Origin</small>
                      <v-select
                        v-model="student.state_of_origin"
                        class="style-chooser"
                        placeholder="Type to search"
                        label="state_name"
                        :options="states"
                        @input="changeLga"
                      ></v-select>
                    </div>
                    <div class="mello col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small class="mb-0">Identity No.</small>
                      <div class="d-flex">
                        <select
                          class="form-control w-50"
                          v-model="patient.title"
                          name="title"
                          id=""
                        >
                          <option value="">Driving License</option>
                          <option value="">Employee Id</option>
                          <option value="">Passport and Visa No</option>
                          <option value="">Passport No</option>
                          <option value="">Miss</option>
                          <option value="">Visa No</option>
                        </select>
                        <!-- <v-select
                          v-model="student.identity_no"
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
                        <input type="text" class="w-50 form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small>Visa Validity</small
                      ><input
                        v-model="student.validity"
                        type="date"
                        class="form-control ng-untouched ng-pristine ng-valid"
                      />
                    </div>
                    <div class="col-lg-4 col-md-5 col-sm-12 mb-3">
                      <small>LGA</small>
                      <input
                        v-model="student.lga"
                        type="text"
                        placeholder="Local Government Area"
                        class="form-control ng-untouched ng-pristine ng-valid"
                      />
                    </div>
                    <!-- <div class="row" style="margin: 0; width: 100%">
                      <div class="mb-3 col-12">
                        <small>Family (optional)</small>

                        <v-select
                          v-model="student.family"
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
                        <h4>Home Address</h4>
                      </div>

                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small>Address/Village</small
                        ><input
                          v-model="student.address"
                          type="text"
                          placeholder="Address/Village"
                          class="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>

                      <div class="mello col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small class="mb-0">Country</small>
                        <v-select
                          v-model="student.country"
                          class="style-chooser"
                          placeholder="Type to search"
                          label="Country"
                          :options="['Antigua and Barbuda', 'General', 'Kongo']"
                        ></v-select>
                      </div>

                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small>City</small
                        ><input
                          v-model="student.city"
                          type="text"
                          placeholder="City"
                          class="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small>Postal Code</small
                        ><input
                          v-model="student.postal_code"
                          type="text"
                          placeholder="Postal Code"
                          class="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <small>Phone Number</small
                        ><input
                          v-model="student.phone_number"
                          type="text"
                          placeholder="Phone Number"
                          class="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <h3>Nearest Relative</h3>
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small>Relative Name</small
                      ><input
                        v-model="relative.relative_name"
                        type="text"
                        placeholder="Relative Name"
                        class="form-control ng-untouched ng-pristine ng-valid"
                      />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3 mt-1">
                      <small class="redd">Relation </small>
                      <v-select
                        v-model="relative.relation"
                        class="style-chooser"
                        placeholder="Relation"
                        label="name"
                        :options="relation"
                      ></v-select>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small>Phone Number</small
                      ><input
                        v-model="relative.relative_phone_number"
                        type="text"
                        placeholder="Phone Number"
                        class="form-control ng-untouched ng-pristine ng-valid"
                      />
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small>Address/Village</small
                      ><input
                        v-model="relative.address"
                        type="text"
                        placeholder="Address/Village"
                        class="form-control ng-untouched ng-pristine ng-valid"
                      />
                    </div>

                    <div class="mello col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small class="mb-0">Country</small>
                      <v-select
                        v-model="relative.country"
                        class="style-chooser"
                        placeholder="Type to search"
                        label="Country"
                        :options="['Antigua and Barbuda', 'General', 'Kongo']"
                      ></v-select>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small>City</small
                      ><input
                        v-model="relative.city"
                        type="text"
                        placeholder="City"
                        class="form-control ng-untouched ng-pristine ng-valid"
                      />
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <small>Postal Code</small
                      ><input
                        v-model="relative.postal_code"
                        type="text"
                        placeholder="Postal Code"
                        class="form-control ng-untouched ng-pristine ng-valid"
                      />
                    </div>
                  </div>

                  <hr />
                  <h3>Payer Information</h3>

                  <div class="mello col-lg-4 col-md-6 col-sm-12 mb-0">
                    <small class="mb-0">Payer</small>
                    <v-select
                      v-model="relative.country"
                      class="style-chooser"
                      placeholder="Type to search"
                      label="Country"
                      :options="['Antigua and Barbuda', 'General', 'Kongo']"
                    ></v-select>
                  </div>

                  <div class="mello col-lg-4 col-md-6 col-sm-12 mb-0">
                    <small class="mb-0">Sponsor</small>
                    <v-select
                      v-model="relative.country"
                      class="style-chooser"
                      placeholder="Type to search"
                      label="Country"
                      :options="['Antigua and Barbuda', 'General', 'Kongo']"
                    ></v-select>
                  </div>

                  <div class="mello col-lg-4 col-md-6 col-sm-12 mb-0">
                    <small class="mb-0">Network</small>
                    <v-select
                      v-model="relative.country"
                      class="style-chooser"
                      placeholder="Type to search"
                      label="Country"
                      :options="['Antigua and Barbuda', 'General', 'Kongo']"
                    ></v-select>
                  </div>

                  <div class="my-5 d-flex justify-content-end">
                    <button class="btn btn-light btn-md mx-3">Cancel</button>

                    <button class="btn btn-primary" :disabled="isLoading">
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
  data() {
    return {
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
      title: "",
      patient: {
        name: "",
        dob: "",
      },
      newBorn: false,
      relative: {
        relative_name: "",
        relation: "",
        relative_phone_number: "",
        address: "",
        country: "",
        city: "",
        postal_code: "",
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
      states: [
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "FCT - Abuja",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara",
      ],
      avatarImage: "",
      showCropper: false,
      avatar: "",
      version: 1,
      newFamily: {
        family_name: "",
        email: "",
        primary_contact: "",
        phone: "",
        address: "",
      },

      states2: [],
      Statess: "sss",
      countries: [],
      familyList: [],
      gradeList: [],
      academicYears: [],
      imagesArray: "",
      selectedState: "",
      selected: "State",
      mello: "yoo",
      newDate: null,
      student: {
        first_name: "",
        last_name: "",
        middle_name: "",
        gender: "",
        phone_number: "",
        email: "",
        marital_status: "",
        occupation: "",
        language: "",
        religion: "",
        loyalty: "",
        country: "",
        city: "",
        postal_code: "",
        relative_name: "",
        relative_phone_number: "",
        date_of_birth: "",
        nationality: "",
        state_of_origin: "",
        lga_name: "",
        address: "",
        grade: "",
        admission_date: new Date(),
        family: "",
        application_date: "",
        application_status: "Declined",
        application_academic_year: "",
        present_academic_year: "",
        present_level: "",
        admission_number: "",

        application_level: "jss 2",
        differentiation: null,

        avatar: null,
      },
      countryList: [
        "Afghanistan",
        "Åland Islands",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan (Province of China)",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
      ],
    };
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
  },
  computed: {
    allStates() {
      if (this.student.nationality === "Nigeria") {
        return this.states;
      } else {
        return [];
      }
    },

    localGovts() {
      return this.states.filter((state) => {
        return state.id === this.student.state_of_origin;
      });
      // return this.sta
    },
    lga() {
      if (this.student.state_of_origin) {
        return this.student.state_of_origin.lgas;
      } else {
        return "";
      }
    },
  },
  watch: {
    "student.family": {
      handler(newValue) {
        if (newValue.family_name === "Add Family") {
          this.$bvModal.show("modal-add-family");
        }
      },
    },
  },
};
</script>

<style>
.margin-fix {
  margin: 6rem 0rem;
}
.style-chooser {
  height: 38px;
}
.touch {
  cursor: pointer;
}
</style>