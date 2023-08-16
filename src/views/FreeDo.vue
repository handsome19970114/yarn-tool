<template>
    <div style="" class="dts">
        <div id="player">
            test
        </div>
    </div>
</template>

<script>
export default {
    name: "Player",
    data() {
        return {
            api: null,
        };
    },
    mounted() {
        this.api = new acapi.AirCityPlayer("10.100.0.93:8080", {
            domId: "player",
        }).getAPI();
    },
};
</script>

<style scoped>
#player {
    width: 100%;
    height: calc(100vh - 200px);
}
</style>