<template>
    <table>
        <thead>
        <tr>
            <th v-for="key in columns"
            @click="sortBy(key)"
            :class="{ active: sortKey == key }">
            {{ key | capitalize }}
            <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
            </span>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="entry in filteredData">
            <td v-for="key in columns">
            {{entry[key]}}
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
/* eslint-disable */
export default {
    name: 'v-table',
    props: {
        data: Array,
        columns: Array,
        filterKey: String
    },
    data() {
        var sortOrders = {};
        this.columns.forEach(function (key) {
            sortOrders[key] = 1;
        });
        return {
            sortKey: '',
            sortOrders: sortOrders
        };
    },
    computed: {
        filteredData() {
            var sortKey = this.sortKey;
            var filterKey = this.filterKey && this.filterKey.toLowerCase();
            var order = this.sortOrders[sortKey] || 1;
            var data = this.data;
            if (filterKey) {
                data = data.filter(function(row) {
                    return Object.keys(row).some(function(key) {
                        return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
                    });
                });
            }
            if (sortKey) {
                data = data.slice().sort(function (a, b) {
                    a = a[sortKey];
                    b = b[sortKey];
                    return (a === b ? 0 : a > b ? 1 : -1) * order;
                });
            }
            return data;
        }
    },
    filters: {
        capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    },
    methods: {
        sortBy(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
        }
    }
};
</script>

<style>
table {
  border: 1px solid rgb(250, 250, 250);
  border-radius: 3px;
  background-color: #fff;
  width: 100%;
}

th {
  background-color: rgb(250, 250, 250);
  color: rgb(153, 153, 153);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: left;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: rgb(153, 153, 153);
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
  color: rgb(153, 153, 153);
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid rgb(153, 153, 153);
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid rgb(153, 153, 153);
}
</style>
