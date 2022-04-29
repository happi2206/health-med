<template>
  <div>
    <div v-if="isLoading" class="skeleton"></div>
    <div class="bg-light text-12 border-radius mb-3 margin-fix" v-else>
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
          <div>
            <div class="d-flex">
              <ul
                class="text-14 pl-0"
                style="
                  list-style: none;
                  width: 120px;
                  border: 1px solid #f5f6f7;
                  background: #f5f6f7;
                "
              >
                <li class="p-2">Vitals</li>
                <li class="p-2">Records</li>
                <li class="p-2">Bills</li>
                <li class="p-2">Vitals</li>
                <li class="p-2">Records</li>
                <li class="p-2">Bills</li>
              </ul>
              <div class="w-100 d-flex flex-wrap px-2">
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <small class="text-grey text-12">UHID</small
                  ><input
                    type="text"
                    placeholder="UHID"
                    class="form-control ng-untouched ng-pristine ng-valid"
                  />
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <small class="text-grey text-12">Patient Name</small
                  ><input
                    type="text"
                    placeholder="Patient Name"
                    class="form-control ng-untouched ng-pristine ng-valid"
                  />
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <small class="text-grey text-12">D.O.B</small
                  ><input
                    type="date"
                    placeholder="Date of birth"
                    class="form-control ng-untouched ng-pristine ng-valid"
                  />
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <small class="text-grey text-12">Phone Number</small
                  ><input
                    type="text"
                    placeholder="Phone Number"
                    class="form-control ng-untouched ng-pristine ng-valid"
                  />
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <small class="text-grey text-12">City</small
                  ><input
                    type="text"
                    placeholder="City"
                    class="form-control ng-untouched ng-pristine ng-valid"
                  />
                </div>

                <div class="col-lg-4 col-md-6 col-sm-12">
                  <small class="text-grey text-12">Member No.</small
                  ><input
                    type="text"
                    placeholder="Member No."
                    class="form-control ng-untouched ng-pristine ng-valid"
                  />
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <small class="text-grey text-12">HBP</small
                  ><input
                    type="text"
                    placeholder="HPB"
                    class="form-control ng-untouched ng-pristine ng-valid"
                  />
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <template #header>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
            <span class="ml-2">Laboratory</span>
          </template>
          Content II
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
            <span class="ml-2">Vitals</span>
          </template>
          Content III
        </TabPanel>
        <TabPanel>
          <template #header>
            <i class="pi pi-user"></i>
            <span class="ml-2">Encounter</span>
          </template>
          Content IV
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<script>
import sidebar from "~/components/sidebar.vue";
export default {
  components: { sidebar },
  layout: "dashboard",

  data() {
    return {
      items: [],
      isLoading: false,
    };
  },
};
</script>

<style scoped>
li {
  cursor: pointer;
  border: 0.5px solid #fff;
}
.margin-fix {
  margin: 4.5rem 0 6rem;
  background: #fff;
}
.site-container {
  width: calc(100vw - var(--sidebar-width) - 20px);
  margin-left: var(--sidebar-width);
  padding-top: 1rem;
  position: relative;
  z-index: 1;
  padding: 2rem calc(1rem + 12px);
  background-color: #f5f6f7;
}
.p-tabview .p-tabview-nav li .p-tabview-nav-link {
  border: solid #dee2e6;
  border-width: 0 0 2px 0;
  min-width: 200px;
  max-width: 500px;
  border-color: transparent transparent #dee2e6 transparent;
  background: #ffffff;
  color: #6c757d;
  padding: 1rem 5.8rem;
  font-weight: 600;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  transition: box-shadow 0.2s;
  margin: 0 0 -2px 0;
}
.p-tabview-nav {
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
  flex: 1 1 auto;
  justify-content: center;
  width: 100%;
}
</style>