<template>
  <div>
    <div
      v-if="isShowing"
      class=""
      :class="{ show: isShowing }"
      @click="isShowing = true"
    ></div>
    <div
      id="site-sidebar font-brown"
      class="site-sidebar"
      :class="{ show: isShowing }"
    >
      <div>
        <div class="sidebar-nav-item text-14 items-wrapper font-brown">
          <template>
            <template v-if="isShowing">
              <div v-for="(comp, index) in sideOptions" :key="index">
                <div @click="toggler($event, index)">
                  <div
                    v-b-toggle="`collapse-${index}`"
                    ref="closeCollapse"
                    id="x"
                  >
                    <div to="" variant="white" class="nav-item items text">
                      <div style="min-width: 18px">
                        <span
                          class="iconify mb-1"
                          :data-icon="comp.icon"
                          data-width="18"
                          data-height="18"
                        ></span>
                      </div>

                      <div class="nav-item-text">
                        {{ comp.name }}
                      </div>
                      <arrow :isToggled="comp.isToggled" />
                    </div>
                  </div>
                </div>

                <div class="hack" v-if="comp.child.length != 0">
                  <b-collapse
                    v-for="(child, index2) in comp.child"
                    :key="index2"
                    :id="`collapse-${index}`"
                    class="mt-2 mx-3"
                  >
                    <div @click.prevent="advet">
                      <nuxt-link
                        class="nav-item items nav-item-text"
                        :to="child.link"
                      >
                        <div>
                          <span
                            class="iconify ml-1"
                            :data-icon="child.icon"
                            data-width="18"
                            data-height="18"
                          ></span>
                        </div>
                        <div class="nav-item-text">
                          {{ child.name }}
                        </div></nuxt-link
                      >
                    </div>
                  </b-collapse>
                </div>
              </div>

              <!-- <nuxt-link
                :key="index"
                :to="{ name: '', params: { id: $route.params.id } }"
                class="nav-item items"
                >trhgerdger
              </nuxt-link> -->
            </template>
            <template v-else>
              <nuxt-link
                :to="{ name: '', params: { id: $route.params.id } }"
                class="nav-item items active has-dropdown"
              >
                <span class="nav-item items-text text-capitalize">
                  serdtyjhgdgftyjut
                </span>
              </nuxt-link>
              <div :key="index" class="nav-dropdown">
                <template>
                  <nuxt-link
                    :to="{
                      name: '',
                      params: { id: $route.params.id },
                    }"
                    class="nav-dropdown-item"
                  >
                    <span class="nav-item items-text ml-1 text-capitalize">
                      ghrdeghtr
                    </span>
                  </nuxt-link>
                </template>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "./arrow.vue";
import Iconify from "@iconify/iconify";
// import Menu from "primevue/menu";
// import Accordion from "primevue/accordion";
// import AccordionTab from "primevue/accordiontab";
export default {
  data() {
    return {
      //   components: {
      //   Menu,
      //     Accordion,
      //     AccordionTab,
      //   },
      components: {
        Iconify,
      },
      isToggled: false,
      isShowing: true,
      sideOptions: [
        {
          name: "Patient Registeration",
          link: "/patient-registeration/patient-records",
          isToggled: false,
          icon: "fluent:patient-20-filled",

          child: [
            {
              name: "Patient Registeration",
              link: "/patient-registeration/patient-records",
              icon: "fluent:document-catch-up-16-regular",
            },

            {
              name: "Patient Search",
              link: "/patient-registeration/patient-search",
              icon: "ic:baseline-person-search",
            },
          ],
        },
        {
          isToggled: false,

          name: "OPD",
          link: "/opd",
          icon: "fontisto:doctor",
          child: [
            {
              name: "Appointment",
              link: "/opd",
              icon: "uil:stethoscope",
            },
          ],
        },
        {
          isToggled: false,
          name: "IPD",
          link: "/ipd",
          child: [],
          icon: "fontisto:bed-patient",
        },
        {
          isToggled: false,
          name: "Laboratory",
          link: "/laboratory",
          child: [],
          icon: "medical-icon:i-laboratory",
        },
        {
          isToggled: false,
          name: "Radiology",
          link: "/radiology",
          child: [],
          icon: "medical-icon:i-radiology",
        },
        {
          isToggled: false,
          name: "Theather",
          link: "/theather",
          child: [],
          icon: "healthicons:hospitalized-outline",
        },
        {
          isToggled: false,
          name: "Nursing Station",
          link: "/nursing-station",
          icon: "la:user-nurse",
          child: [],
        },
        {
          isToggled: false,
          name: "Pharmacy",
          link: "/pharmacy",
          icon: "medical-icon:i-pharmacy",
          child: [],
        },
        {
          isToggled: false,
          name: "Finance",
          link: "/finance",
          icon: "ri:secure-payment-fill",
          child: [],
        },
        {
          isToggled: false,
          name: "Procedures",
          link: "/procedures",
          icon: "fa-solid:procedures",
          child: [],
        },
        {
          isToggled: false,
          name: "Store",
          link: "/store",
          icon: "ic:twotone-local-grocery-store",
          child: [],
        },
        {
          isToggled: false,
          name: "Appointments",
          link: "/appointments",
          icon: "teenyicons:appointments-outline",
          child: [],
        },
        {
          isToggled: false,
          name: "Settings",
          link: "/settings",
          icon: "fluent:clipboard-settings-24-regular",
          child: [],
        },
      ],
      items: [
        {
          label: "Patient Registeration",
          items: [
            {
              label: "Patient Registeration",
              icon: "pi pi-fw pi-cog",
              to: "/patient-registeration",
            },
            {
              label: "Patient Search",
              icon: "pi pi-fw pi-power-off",
              to: "/patient-registeration/patient-search",
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggler(e, index) {
      this.sideOptions[index].isToggled = !this.sideOptions[index].isToggled;
    },
    advet() {
      return;
      if (this.$refs.closeCollapse) {
        this.$refs.closeCollapse.click();
      }
    },
  },
};
</script>

<style scoped>
.text {
  overflow-x: hidden;
}

.down {
  transform: rotate(0deg);
}
.up {
  transform: rotate(-90deg);
}
.p-component {
  font-family: Museo Sans;
  font-size: 14px;
  font-weight: normal;
}
.p-menu .p-menuitem-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  position: relative;
  font-size: 14px;
  font-family: Museo Sans;
}
.p-menu {
  padding: 0.25rem 0;
  background: #ffffff;
  color: #495057;
  border: 1px solid #fff;
  border-radius: 3px;
  width: 12.5rem;
}
.p-menu .p-menuitem-link {
  padding: 0.75rem 1rem;
  color: #495057;
  font-size: 14px;
  font-family: Museo Sans;
  border-radius: 0;
  transition: box-shadow 0.2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.p-menu .p-menuitem-link .p-menuitem-text {
  color: #495057;
  font-size: 14px;
  font-family: Museo Sans;
}
.nav-item items-icon {
  z-index: 999;
}
.items {
  cursor: pointer;
}
/* .nuxt-link-active {
  background-color: #dbe9f4;
} */
.items:hover {
  background-color: #dbe9f4;
}
a {
  color: #007bff;
}
a:hover {
  text-decoration: none;
  color: #007bff;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  background: rgba(0, 0, 0, 0.2);
}

.site-sidebar {
  z-index: 901 !important;
}

.bold {
  font-weight: 900;
}

.site-sidebar .nav-item items .nav-item items-icon {
  line-height: 0;
}
.site-sidebar .nav-item items .nav-item items-icon svg {
  height: 36px;
  width: 36px;
}
.site-sidebar .nav-item items .nav-item items-icon svg path {
  fill: #8f9aa3;
}

.site-sidebar.show .dontshow {
  display: none;
}

.nuxt-link-exact-active {
  background: rgba(16, 112, 183, 0.1) !important;
  color: #007bff;
}
.nuxt-link-active {
  background: rgba(16, 112, 183, 0.1) !important;
  color: #007bff;
}
.nuxt-link-active .nav-item items-text {
  color: #0d6cbb !important;
}

.nuxt-link-active .nav-item items-icon {
  color: #0d6cbb !important;
}
.nuxt-link-exact-active .nav-item items-text {
  color: #0d6cbb !important;
}

.nuxt-link-exact-active .nav-item items-icon {
  color: #0d6cbb !important;
}

.nav-item items {
  border-radius: 8px;
  position: relative;
}
</style>
