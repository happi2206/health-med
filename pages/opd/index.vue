<template>
  <div>
    <div class="margin-fix p-4 mb-3">
      <div class="font20 d-flex align-items-center click">
        <h4 class="text-grey text-24">Visit Dashboard</h4>
      </div>
      <div class="row">
        <div
          style="height: 35px"
          class="mt-4 col-lg-3 d-flex col-md-6 col-sm-12"
        >
          <!-- <small class="text-grey text-12">First Name</small
          > -->
          <select
            class="w-50 form-control text-16"
            style="height: 35px"
            name="patient search"
            id=""
          >
            <option value="">Out Patient</option>
            <option value="">In Patient</option>
            <option value="">Emergency Patient</option>
          </select>
          <input
            type="text"
            placeholder="Admission No."
            class="form-control w-50 ng-untouched ng-pristine ng-valid"
          />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <small class="text-grey text-12">Doctor</small>
          <v-select
            class="style-chooser text-16 text-grey"
            placeholder="Doctor"
            v-model="doctor"
            :options="['Bayo', 'Ade']"
          ></v-select>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <small class="text-grey text-12">Clinic</small>
          <v-select
            class="style-chooser text-grey text-16"
            placeholder="Clinic"
          ></v-select>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <small class="text-grey text-12">Patient Type</small>
          <select
            class="form-control text-grey text-16"
            name="patient type"
            id=""
          >
            <option value="">Patient Search by</option>
            <option value="">Visit No.</option>
            <option value="">Admission No.</option>
            <option value="">Patient Name</option>
          </select>
        </div>
      </div>

      <div class="text-16 pt-3 row status bar">
        <div class="col-md-2 col-sm-2">
          <div
            class="m-2 py-2 progress-bar text-14"
            style="background: #ffd166; color: #8d99ae"
          >
            New patient (0)
          </div>
        </div>
        <div class="col-md-2 col-sm-2">
          <div
            class="m-2 py-2 progress-bar text-14"
            style="background: #64dfdf"
          >
            Nurse Seen (0)
          </div>
        </div>
        <div class="col-md-2 col-sm-2 text-14">
          <div class="m-2 py-2 progress-bar" style="background: #e5383b">
            Doctor Seen (0)
          </div>
        </div>
        <div class="col-md-2 col-sm-2 text-14">
          <div class="m-2 py-2 progress-bar" style="background: #52b788">
            Visit Complete (0)
          </div>
        </div>
      </div>
    </div>
    <div class="pt-3 px-2 bg-white">
      <table-component
        :paginate="true"
        :busy="busy"
        :items="itemsToShow"
        @row-clicked="viewPatientData"
        :fields="fields"
      >
      </table-component>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      itemsToShow: [],
      doctor: "",
      fields: [
        { key: "App No", label: "App No.", sortable: true },
        { key: "Visit No", label: "Visit No", sortable: true },
        { key: "date", label: "Date & Time", sortable: true },
        { key: "clinic", label: "Clinic", sortable: true },
        { key: "UHID", label: "UHID", sortable: true },
        { key: "name", label: "Patient Name", sortable: true },
        { key: "age", label: "Age", sortable: true },
        { key: "user", label: "Assigned User", sortable: true },
        { key: "status", label: "Status", sortable: true },
      ],
      busy: false,
    };
  },
  watch: {
    doctor() {
      alert();
    },
  },
  methods: {
    viewPatientData(e) {
      this.$router.push(`/opd/${e.id}`);
    },
  },
};
</script>

<style scoped>
.progress-bar {
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s;
  max-width: 125px;
  min-width: 124px;
}
.progress-bar:hover {
  /* opacity: 0.7; */
  transform: scale(1.1);
}
.margin-fix {
  margin: 3rem 0 6rem;
  background: #fff;
}
</style>