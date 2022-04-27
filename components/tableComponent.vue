<template>
  <div class="table-responsive text-14 text-grey">
    <b-table
      ref="scrollingtable"
      :items="items"
      :fields="fields"
      stacked="md"
      :filter="filter"
      hover
      striped
      responsive
      show-empty
      sort-icon-left
      :busy="busy"
      class="custom-table"
      :table-class="tableClass"
      @row-clicked="$emit('row-clicked', $event)"
    >
      <template #table-busy>
        <div class="p-4">
          <b-skeleton-table
            :rows="4"
            :columns="4"
            :table-props="{ bordered: true, striped: true }"
          ></b-skeleton-table>
        </div>
      </template>
      <template #cell(action)="item">
        <slot name="action" :data="item"> </slot>
      </template>

      <template #table-colgroup="fields">
        <template v-for="field in fields">
          <col
            v-if="field.key === 'email'"
            :key="field.key"
            :style="{ width: '15rem' }"
          />
          <col
            v-else-if="field.key === 'name'"
            :key="field.key"
            :style="{ width: '8rem' }"
          />
          <col
            v-else-if="field.key === 'DOB'"
            :key="field.key"
            :style="{ width: '9rem' }"
          />
          <col
            v-else-if="field.key === 'status'"
            :key="field.key"
            :style="{ width: '7rem' }"
          />
          <col
            v-else-if="field.key === 'connected'"
            :key="field.key"
            :style="{ width: '10rem' }"
          />
          <col
            v-else-if="field.key === 'grade_books'"
            :key="field.key"
            :style="{ width: '5rem' }"
          />
          <col
            v-else-if="field.key === 'excercises'"
            :key="field.key"
            :style="{ width: '6rem' }"
          />
          <col
            v-else-if="field.key === 'lesson_count'"
            :key="field.key"
            :style="{ width: '3rem' }"
          />
          <col v-else :key="field.key" :style="{ width: '' }" />
        </template>
      </template>

      <!-- <template #cell(dots)="row">
        <b-dropdown
          variant="link"
          toggle-class="text-decoration-none text-center"
          no-caret
        >
          <template class="p-0 mx-auto text-center" #button-content>
            <b-icon icon="three-dots-vertical" class="text-dark"></b-icon>
          </template>
          <template v-if="dropdownItem.length > 0">
            <b-dropdown-item
              v-for="(dropdown, index) in dropdownItem"
              right
              :key="index"
              class="text-capitalize"
              @click="$emit(dropdown, row.item)"
              >{{ dropdown.split("_").join(" ") }}</b-dropdown-item
            >
          </template>
        </b-dropdown>
      </template> -->
    </b-table>
    <b-pagination
      v-if="paginate"
      v-model="currentPage"
      :total-rows="totalItems"
      :per-page="perPage"
      align="right"
      size="sm"
      class="my-0"
      @change="$emit('page-changed', $event)"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    fields: {
      type: Array,
      default: () => [],
      required: false,
    },
    perPage: {
      default: 12,
    },
    /**
     * @description
     * The number of pages coming from the server(API)
     */
    pages: {
      type: Number,
      default: 0,
    },
    busy: {
      type: Boolean,
      default: false,
    },
    /**
     * @description
     * If true, pagination will be displayed
     */
    paginate: {
      type: Boolean,
      default: true,
    },
    totalItems: {
      type: Number,
      default: 0,
    },
    filter: {
      type: String,
      required: false,
      default: "",
    },

    // this is for the three dots dropdown
    dropdownItem: {
      type: Array,
      default: () => [],
    },
    tableClass: {
      type: String,
      default: "custom-table pointer",
    },
    disableEditAction: {
      type: Boolean,
      default: false,
    },
    disableDeleteAction: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentPage: 1,
      totalRows: 0,
    };
  },
  computed: {
    sortable_cols() {
      return this.fields.map((f) => {
        const notSortColumn = ["actions"];
        // eslint-disable-next-line prefer-const
        let tmp = f;
        if (notSortColumn.includes(tmp.key)) {
          return tmp;
        }
        tmp.sortable = true;
        return tmp;
      });
    },
  },
  watch: {
    pages() {
      // This is a hack to help to get the total rows in the DB
      // Then passes it to bootstrap to do his work
      this.totalRows = this.perPage * this.pages;
    },
  },
  mounted() {
    this.totalRows = this.perPage * this.pages;
    const tableScrollBody = this.$refs.scrollingtable.$el;

    tableScrollBody.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.$emit("handle-scroll", e);
      if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
        console.log();
      }
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },

    sendId: function (id) {
      this.$emit("sendId", id);
    },
  },
};
</script>

<style scoped>
</style>
