<template>
  <table class="table-auto mt-medium">
    <thead>
      <tr>
        <th v-for="cell in header.cells" :key="cell">{{ cell }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in body" :key="row._key">
        <td v-for="cell in row.cells" :key="cell" v-kata-html="cell" />
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    table: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    header() {
      return this.table.rows[0]
    },
    body() {
      return this.table.rows.slice(1)
    },
  },
}
</script>

<style scoped>
table {
  /* Remove spacing between table cells (from Normalize.css) */
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #cbcbcb;
}

td,
th {
  border-left: 1px solid #cbcbcb; /*  inner column border */
  border-width: 0 0 0 1px;
  font-size: inherit;
  margin: 0;
  overflow: visible; /* to make ths where the title is really long work */
  @apply p-small;
}

td:first-child,
th:first-child {
  padding-left: 12px !important;
}

thead {
  background-color: #e0e0e0;
  color: #000;
  text-align: left;
  vertical-align: bottom;
}

/* BORDERED TABLES */
td {
  border-bottom: 1px solid #cbcbcb;
}
tbody > tr:last-child > td {
  border-bottom-width: 0;
}
</style>
