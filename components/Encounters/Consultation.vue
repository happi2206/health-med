<template>
  <div>
    <div class="d-flex">
      <ul class="text-12 pl-0" style="background: #fff">
        <li
          @click="vitals"
          :class="hide1 ? 'bg-primary color' : ''"
          class="p-2"
        >
          Vital Signs
        </li>
        <li
          @click="complaint"
          :class="hide4 ? 'bg-primary color' : ''"
          class="p-2"
        >
          Chief Complaint
        </li>
        <li @click="ros" :class="hide2 ? 'bg-primary color' : ''" class="p-2">
          Review of Systems
        </li>
        <li @click="exam" :class="hide3 ? 'bg-primary color' : ''" class="p-2">
          Physical Exam
        </li>

        <li
          @click="diagnosis"
          :class="hide5 ? 'bg-primary color' : ''"
          class="p-2"
        >
          Diagnosis
        </li>
        <li @click="order" :class="hide6 ? 'bg-primary color' : ''" class="p-2">
          Order
        </li>
        <li @click="plan" :class="hide7 ? 'bg-primary color' : ''" class="p-2">
          Plan
        </li>
      </ul>
      <div v-show="tab1" style="max-width: 95%" class="trans pl-3">
        <EncountersVitals />
      </div>
      <div v-show="tab2" style="max-width: 80vw" class="trans pl-3 w-100">
        <EncountersRos />
      </div>
      <div v-show="tab3" style="max-width: 80vw" class="trans pl-3 w-100">
        <EncountersExam />
      </div>
      <div v-show="tab4" style="max-width: 80vw" class="trans pl-3 w-100">
        <EncountersComplaints />
      </div>
      <div v-show="tab5" style="max-width: 80vw" class="trans pl-3 w-100">
        <EncountersDiagnosis />
      </div>
      <div v-show="tab6" style="max-width: 80vw" class="trans pl-3 w-100">
        <EncountersOrder />
      </div>
      <div v-show="tab7" style="max-width: 80vw" class="trans pl-3 w-100">
        <EncountersPlan />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: false,
      tab6: false,
      tab7: false,
      hide1: true,
      hide2: false,
      hide3: false,
      hide4: false,
      hide5: false,
      hide6: false,
      hide7: false,
    };
  },
  watch: {
    tab1() {
      this.hide1 = !this.hide1;
    },
    tab2() {
      this.hide2 = !this.hide2;
    },
    tab3() {
      this.hide3 = !this.hide3;
    },
    tab4() {
      this.hide4 = !this.hide4;
    },
    tab5() {
      this.hide5 = !this.hide5;
    },
    tab6() {
      this.hide6 = !this.hide6;
    },
    tab7() {
      this.hide7 = !this.hide7;
    },
  },
  methods: {
    vitals() {
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
      this.tab5 = false;
      this.tab6 = false;
      this.tab7 = false;
    },
    ros() {
      this.tab2 = true;
      this.tab1 = false;
      this.tab3 = false;
      this.tab4 = false;
      this.tab5 = false;
      this.tab6 = false;
      this.tab7 = false;
    },
    exam() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
      this.tab4 = false;
      this.tab5 = false;
      this.tab6 = false;
      this.tab7 = false;
    },
    complaint() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = true;
      this.tab5 = false;
      this.tab6 = false;
      this.tab7 = false;
    },
    diagnosis() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
      this.tab5 = true;
      this.tab6 = false;
      this.tab7 = false;
    },
    order() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
      this.tab5 = false;
      this.tab6 = true;
      this.tab7 = false;
    },
    plan() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
      this.tab5 = false;
      this.tab6 = false;
      this.tab7 = true;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  width: 120px;
  max-width: 121px;

  /* border: 1px solid #f5f6f7; */
  background: #f5f6f7;
}
li {
  border-bottom: 2px solid #fff;
  border-radius: 4px;
  background: #f5f6f7;
  cursor: pointer;
}
.trans {
  transition: 0.3s;
}
.color {
  color: #fff;
}
</style>