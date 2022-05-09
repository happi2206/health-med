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
            class="w-50 form-control px-1 text-16"
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
            :options="clinics"
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
            New patient ({{ item }})
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

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      itemsToShow: [],
      dropdownItem: ["Nurse Vitals"],
      item: 0,
      clinics: [],
      doctor: "",
      fields: [
        { key: "encounter_id", label: "App No.", sortable: true },

        { key: "date", label: "Date & Time", sortable: true },
        { key: "clinic", label: "Clinic", sortable: true },
        { key: "UHID", label: "UHID", sortable: true },
        { key: "name", label: "Patient Name", sortable: true },
        { key: "encounter_type", label: "Encounter Type", sortable: true },
        { key: "provider", label: "Assigned User", sortable: true },
        { key: "status", label: "Status", sortable: true },
        { key: "action", label: "", sortable: false },
      ],
      busy: false,
    };
  },
  watch: {
    doctor() {
      alert();
    },
  },
  mounted() {
    this.getClinics();
    this.getEncounters();
  },
  methods: {
    viewPatientData(e) {
      console.log(e);
      this.$router.push(`/opd/${e.patient.id}`);
    },
    async getEncounters() {
      try {
        this.busy = true;
        let response = await this.$axios.$get(`/encounters/encounter/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem(`HEALTH-TOKEN`)}`,
          },
        });
        let temp = [];
        this.item = response.results.length;
        for (const iterator of await response.results) {
          temp.push(iterator);
        }

        for (const iterator of temp) {
          let x = iterator.patient;

          x = x.firstname + " " + x.lastname;

          this.itemsToShow.push({
            name: x,
            encounter_type: iterator.encounter_type,
            encounter_id: iterator.encounter_id,
            provider: iterator.provider.type,
            clinic: iterator.clinic.type,
            patient: iterator.patient,
            id: iterator.id,
          });
        }
      } catch {
      } finally {
        this.isLoading = false;
        this.busy = false;
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
    optionClicked(e, i) {
      if (i === 0) {
        this.$router.push(`/opd/${e.id}`);
      }
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
.custom-table.table td,
.custom-table.table th {
  padding: 0.5rem 0.5rem;
  vertical-align: middle;
  border: 0;
  font-size: 14px;
  line-height: 100%;
  color: #40484f;
}
</style>