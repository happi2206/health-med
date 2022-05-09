<template>
  <div>
    <div
      style="max-width: 93%; cursor: pointer"
      class="d-flex sleek justify-content-end"
      @click.prevent="hideVitalsForm = true"
    >
      <div id="button-1">
        <span
          title="Tooltip directive content"
          class="iconify"
          data-icon="akar-icons:plus"
          style="color: #112b70"
          data-width="28"
          data-height="24"
        ></span>
        <!-- <b-col md="4" class="py-4">
          <b-button id="button-2" variant="outline-success">Html chat</b-button>
        </b-col> -->

        <b-tooltip target="button-1" placement="bottom"> Add Vitals </b-tooltip>
      </div>
    </div>
    <transition name="slide-fade">
      <div
        v-if="hideVitalsForm"
        style="max-width: 98%"
        class="trans pl-3 row px-2"
      >
        <div class="col-lg-3 col-md-4 col-sm-6">
          <small class="text-grey text-12">Weight (kg)</small
          ><input
            type="number"
            v-model="vitals.weight"
            placeholder="Weight"
            class="form-control ng-untouched ng-pristine ng-valid"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 w-100">
          <small class="text-grey text-12">Height (cm)</small
          ><input
            type="number"
            v-model="vitals.height"
            placeholder="Height"
            class="form-control ng-untouched ng-pristine ng-valid"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 w-100">
          <small class="text-grey text-12">BMI (kg/m<sup>2</sup>)</small
          ><input
            disabled
            type="number"
            v-model="vitals.bmi"
            placeholder="BMI"
            class="form-control ng-untouched ng-pristine ng-valid"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 w-100">
          <small class="text-grey text-12">Systolic B.P</small
          ><input
            type="number"
            v-model="vitals.systolic"
            placeholder="Systolic B.P"
            class="form-control ng-untouched ng-pristine ng-valid"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 w-100">
          <small class="text-grey text-12">Diastolic B.P</small
          ><input
            type="number"
            v-model="vitals.diastolic"
            placeholder="Systolic B.P"
            class="form-control ng-untouched ng-pristine ng-valid"
          />
        </div>

        <div class="col-lg-3 col-md-4 col-sm-6 w-100">
          <small class="text-grey text-12">Temperature °F</small
          ><input
            type="number"
            v-model="vitals.temperature"
            placeholder="Temperature"
            class="form-control ng-untouched ng-pristine ng-valid"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 w-100">
          <small class="text-grey text-12">Respiratory Rate (/min)</small
          ><input
            type="number"
            v-model="vitals.respiratory"
            placeholder="Respiratory Rate"
            class="form-control ng-untouched ng-pristine ng-valid"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 w-100">
          <small class="text-grey text-12">Heart Rate (BPM)</small
          ><input
            type="number"
            v-model="vitals.heart_rate"
            placeholder="Heart Rate"
            class="form-control ng-untouched ng-pristine ng-valid"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 w-100">
          <small class="text-grey text-12">Urine Output</small
          ><input
            type="number"
            v-model="vitals.urine_output"
            placeholder="Urine Output"
            class="form-control ng-untouched ng-pristine ng-valid"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 w-100">
          <small class="text-grey text-12">Blood Sugar (F)</small
          ><input
            type="number"
            v-model="vitals.blood_sugar_f"
            placeholder="Blood Sugar (F)"
            class="form-control ng-untouched ng-pristine ng-valid"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 w-100">
          <small class="text-grey text-12">Blood Sugar (R)</small
          ><input
            type="number"
            v-model="vitals.blood_sugar_r"
            placeholder="Blood Sugar (R)"
            class="form-control ng-untouched ng-pristine ng-valid"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 w-100">
          <small class="text-grey text-12">SPO2</small
          ><input
            type="number"
            v-model="vitals.spo2"
            placeholder="SPO2"
            class="form-control ng-untouched ng-pristine ng-valid"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 w-100">
          <small class="text-grey text-12">AVPU</small
          ><v-select
            v-model="vitals.avpu"
            class="style-chooser"
            placeholder="AVPU"
          ></v-select>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 w-100">
          <small class="text-grey text-12">Trauma</small
          ><v-select
            v-model="vitals.trauma"
            class="style-chooser"
            placeholder="Trauma"
          ></v-select>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 w-100">
          <small class="text-grey text-12">Mobility</small
          ><v-select
            v-model="vitals.mobility"
            class="style-chooser"
            placeholder="Mobility"
          ></v-select>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 w-100">
          <small class="text-grey text-12">Oxygen Supplementation</small
          ><v-select
            class="style-chooser"
            v-model="vitals.oxygen"
            placeholder="Oxygen Supplementation"
          ></v-select>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 w-100">
          <small class="text-grey text-12">Intake</small
          ><v-select
            v-model="vitals.intake"
            class="style-chooser"
            placeholder="Intake"
          ></v-select>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 w-100">
          <small class="text-grey text-12">Output</small
          ><v-select
            v-model="vitals.output"
            class="style-chooser"
            placeholder="Output"
          ></v-select>
        </div>
        <div
          style="height: 38px"
          class="
            col-lg-6 col-md-12 col-sm-12
            w-100
            mt-4
            text-16
            d-flex
            justify-content-end
          "
        >
          <button
            @click="hideVitalsForm = false"
            class="btn mr-5 text-14 btn-light"
          >
            Cancel
          </button>
          <button class="btn text-14 btn-primary">
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
    </transition>

    <div class="pt-3 transit" style="max-width: 93%">
      <div>
        <h4 class="pl-2 text-24 mb-0 text-grey">Patient Vitals</h4>
      </div>
      <div class="table-fix">
        <table-component
          :paginate="true"
          :busy="busy"
          :items="itemsToShow"
          :fields="fields"
        >
        </table-component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vitals: {
        bmi: 0,
        height: null,
        weight: null,
      },

      time: "",
      hideVitalsForm: false,
      busy: false,
      isLoading: false,
      itemsToShow: [],
      fields: [
        { key: "select", label: "Select", sortable: true },
        { key: "score", label: "Score", sortable: true },
        { key: "date/time", label: "Date/Time", sortable: true },
        { key: "vitals", label: "Vital TimeTaken", sortable: true },
        { key: "sbp", label: "SBP", sortable: true },
        { key: "dpb", label: "DBP", sortable: true },
        { key: "temp", label: "Temp", sortable: true },
        { key: "rr", label: "RR", sortable: true },
        { key: "hr", label: "HR", sortable: true },
        { key: "urine_OP", label: "Urine OP", sortable: true },
        { key: "bS_f", label: "BS(F)", sortable: true },
        { key: "bS_r", label: "BS(R)", sortable: true },
        { key: "avpu", label: "AVPU", sortable: true },
        { key: "trauma", label: "Trauma", sortable: true },
        { key: "", label: "Trauma", sortable: true },
        { key: "trauma", label: "Trauma", sortable: true },
      ],
    };
  },

  methods: {
    calc() {
      let meter = this.height / 100;
      this.bmi = this.weight / meter;
    },
    getDateTime() {
      let day = new Date().toISOString();
      this.time = day;
    },
  },
  mounted() {
    this.getDateTime();
  },
  watch: {
    height() {
      this.calc();
    },
    weight() {
      this.calc();
    },
  },
};
</script>

<style scoped>
.site-container {
  width: calc(100vw - var(--sidebar-width) - 20px);
  margin-left: var(--sidebar-width);
  min-height: 100vh;
  padding-top: 1rem;
  position: relative;
  z-index: 1;
  padding: 2rem calc(1rem + 12px);
  background-color: #f5f6f7;
}
.trans {
  transition: fade 0.3s;
}
.table-fix {
  max-width: 100%;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

/* .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
} */

.slide-fade-enter,
.slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>