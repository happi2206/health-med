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
            <small class="text-grey text-12">UHID</small
            ><input
              v-model="patient.UHID"
              type="text"
              placeholder="UHID"
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">Patient Name</small
            ><input
              v-model="patient.name"
              type="text"
              placeholder="Patient Name"
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">D.O.B</small
            ><input
              v-model="patient.dob"
              type="date"
              placeholder="Date of birth"
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">Phone Number</small
            ><input
              v-model="patient.number"
              type="text"
              placeholder="Phone Number"
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">City</small
            ><input
              v-model="patient.city"
              type="text"
              placeholder="City"
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">Branch</small>
            <v-select
              v-model="patient.branch"
              class="style-chooser"
              placeholder="Branch"
              label="grade_name"
              :options="['Mount St. John’s Medical Center', 'Clarehall clinic']"
            ></v-select>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">Member No.</small
            ><input
              v-model="patient.member_no"
              type="text"
              placeholder="Member No."
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <small class="text-grey text-12">Policy No.</small
            ><input
              v-model="patient.policy_no"
              type="text"
              placeholder="Policy No."
              class="form-control ng-untouched ng-pristine ng-valid"
            />
          </div>
          <div
            class="
              col-lg-4
              d-flex
              justify-content-center
              pt-3
              col-md-6 col-sm-12
              text-14
            "
          >
            <div
              @click.prevent="populate"
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
    clear() {
      this.itemsToShow = [];
      this.patient = {
        UHID: "",
        name: "",
        dob: "",
        phone: "",
        city: "",
        branch: "",
        member_no: "",
        policy_no: "",
      };
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
        { key: "name", label: "Patient Name", sortable: true },
        { key: "dob", label: "D.O.B", sortable: true },
        { key: "phone", label: "Mobile Number", sortable: true },
        { key: "city", label: "City", sortable: true },
        { key: "branch", label: "Branch Name", sortable: true },
        { key: "action", label: "", sortable: false },
      ],
      patient: {
        UHID: "",
        name: "",
        dob: "",
        phone: "",
        city: "",
        branch: "",
        member_no: "",
        policy_no: "",
      },
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