<template>
    <div>
        <h1>Counter</h1>
    </div>
    <div>
        <p>{{ counterState.count }}</p>
        <button @click="clickIncrement()">Increment</button>
        </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'VuexCounterPage',
    methods: {
        clickIncrement: function () {
            this.$store.dispatch("counterModule/incrementCounter");
        },
        clickDecrement: function () {
            this.$store.dispatch("counterModule/decrementCounter");
        },
        clickIncrementBy: function (value) {
            this.$store.dispatch("counterModule/incrementCounterBy", { value: value });
        }
    },
    computed: mapGetters({ counterState: "getCounterState" })
}
</script>
<style></style>