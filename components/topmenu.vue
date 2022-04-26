<template>
  <div>
    <div
      class="
        d-flex
        bg-white
        px-3
        text-12
        align-items-center
        pop
        w-100
        flex-wrap
        justify-content-end
      "
    >
      <div class="items">
        <nuxt-link to="/patient-records">Patient Records</nuxt-link>
      </div>
      <div class="items"><nuxt-link to="/opd">OPD</nuxt-link></div>
      <div class="items"><nuxt-link to="/ipd">IPD</nuxt-link></div>
      <div class="items">
        <nuxt-link to="/laboratory">Laboratory</nuxt-link>
      </div>
      <div class="items"><nuxt-link to="/radiology">Radiology</nuxt-link></div>
      <div class="items"><nuxt-link to="/theather">Theather</nuxt-link></div>
      <div class="items">
        <nuxt-link to="/nursing-station">Nursing Station</nuxt-link>
      </div>
      <div class="items"><nuxt-link to="/pharmacy">Pharmacy</nuxt-link></div>
      <div class="items"><nuxt-link to="/finance">Finance</nuxt-link></div>
      <div class="items">
        <nuxt-link to="/procedures">Procedures</nuxt-link>
      </div>
      <div class="items"><nuxt-link to="/store">Store</nuxt-link></div>
      <div class="items">
        <nuxt-link to="/appointments">Appointments</nuxt-link>
      </div>
      <div class="items"><nuxt-link to="/settings">Settings</nuxt-link></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pop {
  z-index: 100;
  height: 48px;
  position: fixed;
  margin-top: 3.5rem;
  margin-bottom: 1rem;
}
.items {
  cursor: pointer;
  padding: 16px 0px;
}
.nuxt-link-active {
  background-color: #dbe9f4;
}
.items:hover {
  background-color: #dbe9f4;
}
a {
  padding: 1rem 0.35rem;
  color: #000;
}
a:hover {
  text-decoration: none;
  color: #007bff;
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
</style>