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

<script lang="ts">
/* eslint-disable */
import Vue from 'vue';

export default Vue.extend({
    name: 'v-table',
    props: {
        data: Array,
        columns: Array,
        filterKey: String
    },
    data() {
        const sortOrders = {};
        this.$props.columns.forEach((key) => {
            sortOrders[key] = 1;
        });
        return {
            sortKey: 0,
            sortOrders
        };
    },
    computed: {
        filteredData() {
            const filterKey = this.filterKey && this.filterKey.toLowerCase();
            const order = this.sortOrders[this.sortKey] || 1;
            if (filterKey) {
                this.data = this.data.filter((row) => Object.keys(row).some((key) => String(row[key]).toLowerCase().indexOf(filterKey) > -1));
            }
            if (this.sortKey) {
                this.data = this.data.slice().sort((a, b) => {
                    let count = 0;
                    if (a[this.sortKey] === b[this.sortKey]) {
                        count = 0;
                    } else if (a[this.sortKey] > b[this.sortKey]) {
                        count = 1;
                    } else {
                        count = 1;
                    }
                    return count * order;
                });
            }
            return this.data;
        }
    },
    filters: {
        capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    },
    methods: {
        sortBy(key: string): void {
            this.$data.sortKey = key;
            this.$data.sortOrders[key] = this.$data.sortOrders[key] * -1;
        }
    }
});
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
