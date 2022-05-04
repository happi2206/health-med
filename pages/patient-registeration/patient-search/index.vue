<template>
  <div>
    <!-- <sidebar /> -->
    <template>
      <div class="margin-fix p-4 mb-3">
        <div class="font20 d-flex align-items-center click">
          <h4 class="text-grey">Patient Search</h4>
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
            <small class="text-grey text-12">Marital status</small
            ><input
              @keyup.enter="getPatients"
              v-model="marital_status"
              type="text"
              placeholder="Marital status"
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">Gender</small
            ><input
              @keyup.enter="getPatients"
              v-model="gender"
              type="text"
              placeholder="Gender"
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">Nationlity</small
            ><input
              @keyup.enter="getPatients"
              v-model="nationality"
              type="text"
              placeholder="Nationality"
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12">
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
          </div>
          <div
            class="
              col-lg-12
              d-flex
              justify-content-center
              pt-3
              col-md-6 col-sm-12
              text-14
            "
          >
            <div
              @click.prevent="getPatients"
              class="btn text-14 btn-outline-primary mr-5"
            >
              <div class="mt-1">Search</div>
            </div>
            <div @click.prevent="clear" class="btn text-14 btn-outline-danger">
              <div class="mt-1">Clear</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="table_container table-responsive mt-2 pt-2">
          <table-component
            :paginate="true"
            :busy="busy"
            :items="itemsToShow"
            :dropdownItem="dropdownItem"
            :fields="fields"
            @page-changed="handlePage"
            :perPage="perPage"
            :totalItems="totalItems"
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
                    @click="$emit(dropdown, row.item)"
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
  methods: {
    async getPatients() {
      try {
        this.busy = true;
        let uri = `/patient/patients/?firstname=${this.firstname}&gender=${this.gender}&lastname=${this.lastname}&limit=${this.limit}&marital_status=${this.marital_status}&middlename=${this.middlename}&nationality=${this.nationality}&offset=${this.offset}&ordering=${this.ordering}&religion=${this.religion}`;

        const response = await this.$axios.$get(uri, {
          headers: {
            Authorization: `Token ${localStorage.getItem(`HEALTH-TOKEN`)}`,
          },
        });

        this.itemsToShow = response.results;
      } catch (error) {
        console.log(error);
      } finally {
        this.busy = false;
      }
    },
    clear() {
      this.itemsToShow = [];
      this.firstname = "";
      this.gender = "";
      this.lastname = "";
      this.limit = 50;
      this.marital_status = "";
      this.middlename = "";
      this.nationality = "";
      this.offset = 0;
      this.ordering = "";
      this.religion = "";
    },
    populate() {
      this.itemsToShow = [
        {
          UHID: "8966353",
          name: "Mike Simons",
          dob: "17/2/1992",
          phone: "09050383673",
          city: "Abuja",
          branch: "Lugbe",
          action: "",
        },
        {
          UHID: "8966353",
          name: "Mike Simons",
          dob: "17/2/1992",
          phone: "09050383673",
          city: "Abuja",
          branch: "Lugbe",
          action: "",
        },
        {
          UHID: "8966353",
          name: "Mike Simons",
          dob: "17/2/1992",
          phone: "09050383673",
          city: "Abuja",
          branch: "Lugbe",
          action: "",
        },
      ];
    },
  },
  data() {
    return {
      busy: false,
      itemsToShow: [],
      dropdownItem: ["Clear", "Out patient visit"],
      fields: [
        { key: "UHID", label: "UHID", sortable: true },
        { key: "firstname", label: "First Name", sortable: true },
        { key: "lastname", label: "Last Name", sortable: true },
        { key: "date_of_birth", label: "D.O.B", sortable: true },
        { key: "gender", label: "Gender", sortable: true },
        { key: "marital_status", label: "Marital Status", sortable: true },
        { key: "action", label: "", sortable: false },
      ],

      firstname: "",
      gender: "",
      lastname: "",
      limit: 50,
      marital_status: "",
      middlename: "",
      nationality: "",
      offset: 0,
      ordering: "",
      religion: "",
    };
  },
};
</script>

<style scoped>
.margin-fix {
  margin: 4rem 0 6rem;
  background: #fff;
}
.table_container {
  /* border-radius: 10px; */
  background-color: #fff;
  padding: 0 10px 5px 20px;
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

.table th {
  color: #8f9aa3;
}
</style>