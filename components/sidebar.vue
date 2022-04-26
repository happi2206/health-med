<template>
  <div>
    <div
      v-if="isShowing"
      class="modal-overlay"
      :class="{ show: isShowing }"
      @click="isShowing = false"
    ></div>
    <div
      id="site-sidebar font-brown"
      class="site-sidebar"
      :class="{ show: isShowing }"
    >
      <div>
        <div class="sidebar-items-wrapper font-brown">
          <div
            v-if="isShowing"
            class="topbar-school-selector d-md-none d-block"
          >
            <p class="d-lg-flex align-items-lg-center my-3 bold fs-14">
              ghjkldrfegrd
            </p>
          </div>
          <template>
            <template>
              <nuxt-link to="/patient-records" class="nav-item">
                <div class="nav-item-text text-capitalize">
                  Patient Registeration
                </div>
              </nuxt-link>
              <nuxt-link to="/patient-records/patient-search" class="nav-item">
                <div class="nav-item-text text-capitalize">Patient Search</div>
              </nuxt-link>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

// <script lang="ts">
// import Vue from 'vue'

// export default Vue.extend({
//   data() {
//     const routes: RouteSetupType[] = []
//     return {
//       isMobile: false,
//       isShowing: false,
//       routes,
//     }
//   },
//   watch: {
//     $route: {
//       handler() {
//         this.onRouteChange()
//       },
//       immediate: true,
//     },

//     '$route.query.fromPage': {
//       handler(newVal) {
//         if (newVal) {
//           this.onRouteChange(newVal)
//         }
//       },
//       immediate: true,
//     },
//   },

//   created() {
//     this.$nuxt.$on('openSidebar', () => {
//       this.isMobile = !this.isMobile
//       this.isShowing = !this.isShowing
//     })
//   },

//   methods: {
//     isShowingMethod() {
//       this.isShowing = !this.isShowing
//     },
//     onRouteChange(fullPath = null) {
//       const spiltUrlToArray = fullPath || this.$route.fullPath.split('/')

//       const RouteObj = Routes.find((item) =>
//         item.keywords.every((keyword) => spiltUrlToArray.includes(keyword))
//       )
//       this.routes = RouteObj?.routes as []
//     },
//   },
// })
//
</script>

<style scoped>
/* .nav-item-icon {
  z-index: 999;
} */

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  background: rgba(0, 0, 0, 0.2);
}

/* .site-sidebar {
  z-index: 901 !important;
} */

.bold {
  font-weight: 900;
}

.site-sidebar .nav-item .nav-item-icon {
  line-height: 0;
}
.site-sidebar .nav-item .nav-item-icon svg {
  height: 36px;
  width: 36px;
}
.site-sidebar .nav-item .nav-item-icon svg path {
  fill: #8f9aa3;
}

.site-sidebar.show .dontshow {
  display: none;
}

.nuxt-link-exact-active {
  background: rgba(16, 112, 183, 0.1) !important;
}
.nuxt-link-active {
  background: rgba(16, 112, 183, 0.1) !important;
}
.nuxt-link-active .nav-item-text {
  color: #0d6cbb !important;
}

.nuxt-link-active .nav-item-icon {
  color: #0d6cbb !important;
}
.nuxt-link-exact-active .nav-item-text {
  color: #0d6cbb !important;
}

.nuxt-link-exact-active .nav-item-icon {
  color: #0d6cbb !important;
}

.nav-item {
  border-radius: 8px;
  position: relative;
}
</style>
